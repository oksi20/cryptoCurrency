const { Schema, model }=require('mongoose');
const Coin=require('./coin.model')

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  coins:[{type: Schema.Types.ObjectId, ref: 'Coin'}],
  cart:[{type: Schema.Types.ObjectId, ref: 'Coin'}]
});

module.exports= model('User', UserSchema);
