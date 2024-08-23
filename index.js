require('dotenv').config()
const express= require("express");

const app=express();
 

app.get('/',(req,res)=>{
    res.send("Hello Abhi!");
})
app.get('/abhi',(req,res)=>{
    res.send( "notion.so/how-deploy-backend-code-in-production-f78553c5433b46f0af817a52ad5b347d" );
})
app.get('/login',(req,res)=>{
    res.send('<h1>login to the page</h1>')
})
app.get('/register',(req,res)=>{
      res.send('<h2>register to the page</h2>')
})
  const port=process.env.PORT;
 app.listen(port,()=>{
    console.log(`server is listening at port no ${port} `);
 })