const mongoose = require('mongoose');
const squema = mongoose.Schema();

// squema for users information
const user_squema = new squema({
	name: {
	  type: String,
	  required: true
	},
	email: {
	  type: String,
	  required: true
	},
	password: {
	  type: String,
	  required: true
	},
	date: {
	  type: Date,
	  default: Date.now
	},
	status : {
	   type : Boolean,
	   default : true 
	}
});

module.exports = user = mongoose.model("users", user_squema);