const express=require('express');
const homeController=require('../controllers/home_controller');
const router=express.Router();


// the main index will take you here and from you can furture go
router.get('/',homeController.home);
router.use('/users',require('./users'));
// router.use('/posts',require('./posts'));



module.exports=router;