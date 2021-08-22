const express=require('express');
const router=express.Router();
const userController=require('../controllers/users_controller');

router.get('/profile',userController.profile);
router.use('/posts',require('./posts'));
router.get('/signUp',userController.signUp);
router.get('/signIn',userController.signIn);
router.post('/create',userController.create);
router.post('/create_session',userController.create_session);
module.exports=router;