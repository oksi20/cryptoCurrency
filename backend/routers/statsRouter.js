const { Router } = require("express");
const Coin = require("../models/coin.model");
const router = Router();
const User=require('../models/user.model');

router.route("/")
.get( async (req, res)=>{
const allusers=await User.find({}).select('coins, work').populate('coins').exec();
let obj={};
for (let i=0; i<allusers.length; i++){
if (allusers[i].work in obj){
  obj[allusers[i].work]=[...obj[allusers[i].work], ...allusers[i].coins]
} else {
  obj[allusers[i].work]=allusers[i].coins;
}
}
console.log(obj);
res.status(200).json(obj)
})

module.exports=router;

