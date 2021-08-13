const express=require('express');
const port=8000;

const app=express();

app.listen(port,function(err){
  if(err){
    console.log(`Eror runinng in server:${err}`);
    return;
  }
  console.log(`Connected to server:${port}`);
});

