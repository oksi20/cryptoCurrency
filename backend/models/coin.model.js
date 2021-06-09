const { Schema, model }=require('mongoose');
const User=require('./user.model')

const CoinSchema = new Schema({
  coinname: {
    type: String,
    
  },
  amount: {
    type: Number,
  },
  converted:{
    type:Number
  },
  username:{type:Schema.Types.ObjectId, ref: 'User'}

});

module.exports= model('Coin', CoinSchema);
