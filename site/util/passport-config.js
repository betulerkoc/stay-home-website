const LocalStrategy = require("passport-local").Strategy;
const User = require("../util/database");
const bcrypt = require("bcrypt");


const intialize = (passport) => {
    const validatePassword = async (password,userPassword) => {
        console.log(password,userPassword)
        return await bcrypt.compare(password,userPassword);
    }

    passport.use(new LocalStrategy({usernameField:"email"},async (email,password,done) => {
        try{
            const user = User.findOne({where:{email}});
            if(!user){return done(null,false)};
            if(!validatePassword(password,user.password)){return done(null,false)};
            return done(null,user);
        }
        catch(err){
            return done(err);
        }
    }))
}

module.exports = intialize