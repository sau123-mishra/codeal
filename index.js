const express=require('express');
const port=4000;
const app=express(); 
const cookie_parser=require('cookie-parser');

app.use(express.urlencoded());
app.use(cookie_parser());

const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
// used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport_local_auth');
app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts', true) ;


//setup viewengine

app.set('view engine','ejs');
app.set('views','./views');
// These are the middleware routes shoulde be intialise after this
 app.use(session({
    name:'codeal',
    secret:'rockyrockstar',//to dochange secret before  the  deployment in production mode
    saveUninitialized:'false',
    resave:false,
    cookie:{
     originalmaxAge:'1000*60*100'
    }
 }));
 app.use(passport.initialize());
 app.use(passport.session());
 app.use(passport.setAuthenticatedUser);
 // usee express router
// first the browser request will come here after then it will go through routers
app.use('/',require('./routes'));
app.set('path','./views'); 



app.listen(port,function(err){
  if(err){
    console.log(`Eror runinng in server:${err}`);
    return;
  }
  console.log(`Connected to server:${port}`);
  
});

