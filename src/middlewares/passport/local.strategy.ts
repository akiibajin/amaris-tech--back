import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcryptjs";
import db from "../../database/postgres/models";


passport.serializeUser((user:any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await db.User.findByPk(id);
  done(null, user);
});

passport.use(
  "log_in",
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const isCorrectPassword = (
        passwordToVerified: string,
        dbPassword: string
      ) => {
        return bcrypt.compareSync(passwordToVerified, dbPassword);
      };
      try {
        const user = await db.User.findOne({
          where: {
            email,
          },
        });
        if (!user) {
          const { name, surName, age } = req.body;
          const passwordEncrypted = bcrypt.hashSync(password, 8);
          const newUser = await db.User.create({
            email,
            password: passwordEncrypted,
            name,
            surName,
            age,
          });
          return done(null, newUser);
        }
        if (!isCorrectPassword(password, user.password)) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);
