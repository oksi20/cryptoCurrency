const { Router } = require("express");
const router = Router();
const saltRounds = 10;
const User=require('../models/user.model');
const bcrypt = require("bcrypt");

router.route("/signup")
.post(async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    console.log('email', email);

    if (!username || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
 
    const userName = await User.findOne({ username });
    if (userName){
      throw Error('Username already exists');
    } 
    const useremail = await User.findOne({email});
    if (useremail) {
      throw Error('Email already exists');}

    
    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');
      

    const user = await User.create({username, email, password: hash});
    
    req.session.user = user.username;
    return res.status(201).json({ userId: user._id, username: user.username, coins:user.coins, email:user.email });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
});

router.route("/login").post(async (req, res) => {
try {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user.username;
    return res.status(202).json({ userId: user._id, username: user.username, coins:user.coins, email:user.email });
  } else {
    throw Error("username and password doesn't match")
  }
  // else res.status(404).json({error:"username and password doesn't match"})
} catch (err) {
  return res.status(502).json({err:err.message});
}
});

router.get("/logout", (req, res, next) => {
req.session.destroy((err) => {
  if (err) {
   
    return next(err);
  }
  res.clearCookie("user_sid");
  return res.status(203).json({msg:'ok'});
});
});
router.route("/:username")
.get(async(req, res)=>{
  const {username}=req.params;
  try{
    const user=await User.findOne({username}).populate("coins").exec();
    console.log(user.coins);
    return res.status(200).json(user.coins)
  } catch(e){
    return res.sendStatus(501);
  }

})
module.exports=router;
