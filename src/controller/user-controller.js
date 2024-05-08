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
const destroy=async(req,res)=>{
    try{
        const user=await userservics.deleteUser(req.query.id);
        return res.status(201).json({
            data:user,
            success:true,
            message:"successfully deleted a user",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to delete a user",
            error:err
        })
    }
}
const get=async(req,res)=>{
    try{
        const user=await userservics.getUser(req.query.id);
        return res.status(201).json({
            data:user,
            success:true,
            message:"successfully fetched a user",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to fetch a user",
            error:err
        })
    }
}

module.exports={
    create,
    destroy,
    get
}