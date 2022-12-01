const express=require("express");
const { fetchChats, createGroupChat, accessChat, renameGroup, removeFromGroup,addToGroup } = require("../controllers/chatControllers");
const {protect}=require('../middleware/authMiddleware');
//const { route } = require("./userRoutes");

const router=express.Router();
 router.route('/').post(protect,accessChat);
 router.route('/').get(protect,fetchChats);
  router.route('/group').post(protect,createGroupChat);
 router.route('/rename').put(protect,renameGroup);
 router.route('/groupremove').put(protect,removeFromGroup);
 router.route('/groupadd').get(protect,addToGroup);
module.exports=router;