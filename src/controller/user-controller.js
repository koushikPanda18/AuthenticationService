const userService=require('../services/user-service');

const userservics=new userService()
const create=async(req,res)=>{
    try{
        const user=await userservics.createUser(req.body);
        return res.status(201).json({
            data:user,
            success:true,
            message:"successfully created a user",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to create a user",
            error:err
        })
    }
}

module.exports={
    create
}