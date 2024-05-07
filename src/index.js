const express=require('express');
const {PORT} = require('./config/server-config');


const app=express();
const prepareAndStartServe=()=>{
    console.log(PORT);
    app.listen(PORT,()=>{
        console.log('Server started at port ',PORT);
    })
}
prepareAndStartServe();