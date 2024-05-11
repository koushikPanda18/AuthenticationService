const express=require('express');
const userController=require('../../controller/user-controller');
const router=express.Router();
const authValidationMiddleware=require('../../middleware/index');

router.post('/signup',
    authValidationMiddleware.authRequestValidate,
    userController.create);
router.delete('/user',userController.destroy);
router.get('/user',userController.get);
router.post('/signin',
    authValidationMiddleware.authRequestValidate,
    userController.signIn);

module.exports=router;