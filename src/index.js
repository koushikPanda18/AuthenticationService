const express=require('express');
const {PORT} = require('./config/server-config');
const bodyParser=require('body-parser');
const apiRoutes=require('./routes/index');

const app=express();
const prepareAndStartServe=()=>{
    //console.log(PORT);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log('Server started at port ',PORT);
    })
}
prepareAndStartServe();