const express = require('express');
const path = require('path');

const app=express();
app.use(express.static('public'));
//const publicPath=path.resolve(__dirname,'/public');
//app.use(express.static(publicPath));


app.listen(process.env.PORT||3001,()=>{
    console.log("running")});

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})