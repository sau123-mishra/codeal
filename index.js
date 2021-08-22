const express=require('express');
const cookie_parser=require('cookie-parser');
const app=express();
app.use(express.urlencoded());
app.use(cookie_parser());
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts', true) ;

// usee express router
// first the browser request will come here after then it will go through routers
app.use('/',require('./routes'));

//setup viewengine

app.set('view engine','ejs');
app.set('views','./views');


 app.set('path','./views'); 



app.listen(port,function(err){
  if(err){
    console.log(`Eror runinng in server:${err}`);
    return;
  }
  console.log(`Connected to server:${port}`);
});

