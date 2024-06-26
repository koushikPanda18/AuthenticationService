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
const signIn=async(req,res)=>{
    try{
        const user=await userservics.signIn(req.body.email,req.body.password);
        return res.status(201).json({
            data:user,
            success:true,
            message:"successfully Signed In",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to Sign In",
            error:err
        })
    }
}

const isAuthenticated=async(req,res)=>{
    try{
        const token=req.headers['x-access-token']
        const isVerified=await userservics.isAuthenticated(token);
            return res.status(201).json({
                data:isVerified,
                success:true,
                message:"user is authenticated and token is valid",
                error:{}
            })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"user not Authenticated",
            error:err
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    signIn,
    isAuthenticated
}