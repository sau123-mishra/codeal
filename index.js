const express=require('express');
const port=8000;

const app=express();
// usee express router
// first the browser request will come here after then it will go through routers
app.use('/',require('./routes'));

//seetup viewengine
app.set('view engine','ejs');
app.set('path','./views'); 


app.listen(port,function(err){
  if(err){
    console.log(`Eror runinng in server:${err}`);
    return;
  }
  console.log(`Connected to server:${port}`);
});

