require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const databaseConnection = require("./services/mongo.services");
const indexRoutes = require("./routes/index.routes");
// const connectDB = require('./server/config/db');

const app = express();
const port = 4000 || process.env.PORT;

databaseConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));
app.use(express.static("src/public"));
app.use(expressLayouts);
app.set("views", "src/views");
app.set("view engine", "ejs");
app.set("layout", "layouts/main.layouts.ejs");

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRoutes);

app.get("*", function (req, res) {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const env = process.env;
// passport.use(new GoogleStrategy({
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: env.NODE_ENV === 'production' ? env.GOOGLE_CALLBACK_URL_LIVE : env.GOOGLE_CALLBACK_URL_LOCAL
// },
// function(accessToken, refreshToken, profile, cb) {
//   User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     return cb(err, user);
//   });
// }
// ));
