const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: { type: String,unique: true,  required: true},
    email:{type:String,required:true},
    hash: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    active:{type:Boolean,default:false}
  
/* 	todos: [{ type: Schema.Types.ObjectId, ref: 'Todo'}] */
});

module.exports = mongoose.model('User', UserSchema);