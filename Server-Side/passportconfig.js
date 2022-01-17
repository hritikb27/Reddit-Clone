const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/Users");

const initializePassport = (passport)=>{
    console.log('configuring passport');
    passport.use(
        new LocalStrategy((email, password, done) => {
            User.findOne({ email })
            .then(user=>{
                if(!user){
                    return done(null, false, { message: "Incorrect username" });
                }
                if(user.password !== password){
                    return done(null, false, { message: "Incorrect password" });
                }
                return done(null, user);
            })
        })
    );
    
    passport.serializeUser(function (user, done) {
        return done(null, user._id);
    });
    
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            return done(err, user);
        });
    });
}

module.exports= initializePassport;