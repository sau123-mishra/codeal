//accessing passport js and passport-local auth
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
//accesing the user document from models
const User=require('../models/user')

passport.use(new LocalStrategy({
   usernameField:'email',
  },
  function(email,password,done){

    User.findOne({email:email},function(err,user){
      if(err){console.log('eror to findinng the user email');return done(err);}
      if(!user||user.password!=password){
        console.log('invalid user name or password');
        return done(null,false);
      }
        done(null,user);
    });
  }
))


//Seariziing the user to decide which key is to be kept in the cookies

passport.serializeUser(function(user,done){
    done(null,user.id);
});

//Desearializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
      if(err){console.log('eror in finndinng user');return done(err);}
      return done(null,user);
    });
   
});


// check the user is  authenticated or not

passport.checkAuthentication=function(req,res,next){
  if(req.isAuthenticated()){
  return next();
}
// if user is not signed in
return res.redirect('/users/signIn');

}

passport.setAuthenticatedUser=function(req,res,next){
   if(req.isAuthenticated()){
    //  re.user contains the current signed in user from session cookie and we are just sending this to the locals for the views
     res.locals.user=req.user;
   }
}


module.exports=passport  
