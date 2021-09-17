
const User=require('../models/user');
module.exports.profile=function(req,res){
  res.render('user_profile',{
    title:"Profile"
  }) ;
 }
// render the sign up page
 module.exports.signUp=function(req,res){
   if(req.isAuthenticated()){
    return res.redirect('/users/profile');
   }

  return res.render('user_sign_up',{
     title:"Codeal|SignUP"
   });
 }
//  render the sign in
 module.exports.signIn=function(req,res){
  if(req.isAuthenticated()){
    return res.redirect('/users/profile');
  }

return  res.render('user_sign_in',{
    title:"Codeal|signIn"
  });
}

module.exports.create=function(req,res){
  if(req.body.password!=req.body.confirm_password){
    return res.redirect('back');
  }
 User.findOne({email:req.body.email},function(err,user){
   if(err){console.log("eror to finding the email");return}
   
   if(!user){
     User.create(req.body,function(err,user){
       if(err){console.log('eror while creating user');return}
       return res.redirect('/users/signIn');
     });
   }else{res.redirect('back');}
 });

}
module.exports.create_session=function(req,res){
   
  return res.redirect('/');
}

module.exports.destroySession=function(req,res){
   req.logout();
  return res.redirect('/');
}