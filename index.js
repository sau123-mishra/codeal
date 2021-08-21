const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts); 
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

