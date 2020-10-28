const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userDB = {
    id: 1,
    email: "yudin93@mail.ru",
    password: 123

}


passport.serializeUser(function(user, done) {
    console.log('Сериализация:', user)
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    console.log('Десериализация:', id);
    const user = (userDb.id === id) ? userDB : false;
    done(null, user);
});


passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));