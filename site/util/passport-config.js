const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcrypt");


const intialize = (passport) => {

    passport.use(new LocalStrategy({usernameField:"email"},async (email,password,done) => {
            return await User.findOne({where:{email}}).then(async (user) => {
                if(!user){return done(null,false)};
                return await bcrypt.compare(password,user.password,(err,res) => {
                  if(!res){return done(null,false)}
                  return done(null,user)
                });
             }).catch(err => done(err))
    }))
}

module.exports = intialize