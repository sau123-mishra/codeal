const express=require('express');
const cookie_parser=require('cookie-parser');
const port=8000;
const app=express(); 
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport_local_auth');
//const  MongoStore=require('connect-mongo')(session);
const sassMiddleware=require('node-sass-middleware');
app.use(sassMiddleware({
    /* Options */
    src:'./assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>

}));



app.use(express.urlencoded());
app.use(cookie_parser());
app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts', true) ;
// usee express router
// first the browser request will come here after then it will go through routers
//setup viewengine
app.set('view engine','ejs');
app.set('views','./views');
app.set('path','./views'); 
// These are the middleware routes shoulde be intialise after this
app.use(session({
    name:'codeal',
    secret:'rockyrockstar',//to dochange secret before  the  deployment in production mode
    saveUninitialized:'false',
    resave:false,
    cookie:{
     originalmaxAge:'1000*60*100'
    },
  /*  store:MongoStore.create({
      mongooseConnection:db,
      autoRemove:'disabled'
  
      })
   /* function(err){
      console.log(err||"Connect set is ok");
    }*/

  }));
 app.use(passport.initialize());

 app.use(passport.session());
 app.use(passport.setAuthenticatedUser);
 app.use('/',require('./routes'));
 

app.listen(port,function(err){
  if(err){
    console.log(`Eror runinng in server:${err}`);
    return;
  }
  console.log(`Connected to server:${port}`);
  
});

