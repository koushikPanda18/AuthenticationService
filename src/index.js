const express=require('express');
const {PORT} = require('./config/server-config');
const bodyParser=require('body-parser');
const apiRoutes=require('./routes/index');

const userService=require('./services/user-service');

const app=express();
const prepareAndStartServe=()=>{
    //console.log(PORT);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log('Server started at port ',PORT);
        //const userservice=new userService();
        // const token=userservice.createToken({name:'koushik',id:1});
        //const t='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia291c2hpayIsImlkIjoxLCJpYXQiOjE3MTUxNjU1NTAsImV4cCI6MTcxNTE2OTE1MH0.fBCc8iY3Nw93DHTqdDka8NRBh50nUaY3E-8LsIKB7t0'

        //console.log(userservice.verifyToken(t))
    })
}
prepareAndStartServe();