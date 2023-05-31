const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: { type:String, required:true},
    phoneNumber: {type:Number, required:true},
    username: { type:String, required:true},
    password: { type:String, required:true},
    
})

module.exports = mongoose.model('Admin', UserSchema);