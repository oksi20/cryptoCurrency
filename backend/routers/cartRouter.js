const { Router } = require("express");
const Coin = require("../models/coin.model");
const router = Router();
const User=require('../models/user.model');

router.route('/:username')
.get(async(req, res)=>{
  try{
    const {username}=req.params;
    const user=await User.findOne({username}).populate('cart').exec();
    res.status(200).json(user.cart)

  } catch(e){
    return res.status(501).json({e})
  }
})
.post(async(req, res)=>{
  try{
    const {amount, converted, coinname}=req.body;
    const {username}=req.params;
    const newCoin=await Coin.create({amount, converted, coinname});
    const user=await User.findOneAndUpdate({username}, {$push:{cart:newCoin._id}}, {new:true}).populate('cart').exec();
 
    return res.status(200).json(user.cart)
  } catch(e){
    return res.sendStatus(502)
  }
})
.put(async(req, res)=>{
  const {username}=req.params;
  try {
    const user=await User.findOne({username})
    console.log('user', user);
    const updatedUser=await User.findOneAndUpdate({username}, {cart:[], $push: {coins:user.cart}}, {new:true});
    console.log('put', updatedUser);
    return res.status(200).json({res:'ok'})
  } catch(e){
    console.log("error");
    return res.status(501).json(e)
  }
})

router.route('/:username/:id')
.delete(async(req, res)=>{
  try{
    const {id, username}=req.params;
    const user=await User.findOneAndUpdate({username}, {$pull:{cart:id}}, {new:true})
    const coin=await Coin.deleteOne({_id:id})
    console.log(user);
    return res.status(200).json({result:'ok'})
  } catch(error){
    return res.sendStatus(502)
  }
  
})
module.exports=router;
