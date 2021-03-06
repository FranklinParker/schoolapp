const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


const schema = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    role:{ type:String,required:true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
