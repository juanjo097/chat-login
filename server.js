const express = require('express');
const mongoose = require('mongoose');
const body_parser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// body_parser (middleware)
app.use(
	body_parser.urlencoded({
	  extended: false
	})
);
app.use(body_parser.json());

// database config
const db = require('./config/keys').mongoURI;

// connects our back end code with the database
mongoose.connect( db, 
				{ useNewUrlParser: true, useUnifiedTopology: true }, 
				() => 
				{ 
					console.log('Connected to Mongodb!')
				}
).catch(err => 
	console.log(err)
);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));