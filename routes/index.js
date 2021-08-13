const express=require('express');
const homeController=require('../controllers/home_controller');
const router=express.Router();
// console.log('Router is loaded');


router.get('/',homeController.home);
router.get('/fun',homeController.funny);
module.exports=router;