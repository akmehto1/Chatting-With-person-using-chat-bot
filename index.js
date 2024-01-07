const express=require('express');

const { handler } = require('./controllers/service');
const app=express()


app.use(express.json());
app.get('*',async(req,resp)=>{
    // console.log("Working");
    // resp.send("hello sir my name is Abhishek");
    resp.send(await handler(req))
})


app.post('*',async(req,resp)=>{
    console.log(req.body);
    resp.send(await handler(req))
})



const PORT=300;

app.listen(PORT,(err)=>{
    if(err)console.log(err);
    else console.log(`Server is Running on Port ${PORT}`);
})