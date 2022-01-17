const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const User = require("./models/Users");
const initializePassport = require("./passportconfig");

const app = express();

app.use(express.urlencoded({ extended: false }));
require("dotenv").config();

const db_URI = process.env.DB_URI;

mongoose.connect(
	db_URI,
	{ useUnifiedTopology: true, useNewUrlParser: true }
);

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
	})
);

initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// app.get("/", (req, res) => {
// 	res.render("index");
// });

app.post("/signup", (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	user.save((err) => {
		if (err) {
			res.send(err);
		}
	});

	res.redirect("/");
});

function assertAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        return res.redirect('/login');
        // res.sendStatus(401);
    }
}

app.post('/login', passport.authenticate('local', { successRedirect: '/success',failureRedirect: '/login' }));

app.get('/success', assertAuthenticated, (req,res)=>{
    console.log(req.user)
    res.render('successLogin')
})


app.listen(5000);
