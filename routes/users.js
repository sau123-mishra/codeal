const express=require('express');
const router=express.Router();
const passport=require('passport');
const userController=require('../controllers/users_controller');


router.get('/profile',passport.checkAuthentication,userController.profile);
router.use('/posts',require('./posts'));
router.get('/signUp',userController.signUp);
router.get('/signIn',userController.signIn);
router.post('/create',userController.create);
// use passport as a middleware to authenticate
router.post('/create_session',passport.authenticate(
   'local',
   {failureRedirect:'/users/signIn'},
   )
   ,userController.create_session);
router.get('/signOut',userController.destroySession);

   module.exports=router;