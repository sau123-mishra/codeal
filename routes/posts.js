const express=require('express');
const router=express.Router();
const usersPostController=require('../controllers/usersPost_controoller');

router.get('/post',usersPostController
.post);

module.exports=router;
