const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating a new Schema
const UserSchema = new Schema({
	name: 
	{
    	type: String,
    	required: true
  	},
	email: 
	{
    	type: String,
    	required: true
  	},
	password: 
	{
    	type: String,
    	required: true
  	},
	date: 
	{
    	type: Date,
    	default: Date.now
	},
	status : 
	{
		type: Boolean,
		default : true
	}  
});
module.exports = User = mongoose.model("users", UserSchema);