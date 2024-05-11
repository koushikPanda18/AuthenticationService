
const authValidateMiddleware=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data:{},
            success:false,
            message:'Something Went wrong',
            error:'Email or Password is missing in the request'
        })
    }
    next();
}
module.exports=authValidateMiddleware;