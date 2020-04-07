const express = require('express');
//dotenv - allows us to create global variables - for the port and database
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = require('./models/Users');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

const transactions = require('./routes/transactions');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
//tell the app to use the session package with the initial configuration
app.use(
  session({
    secret: 'ChickenPot3.14',
    resave: false,
    saveUninitialized: false,
  })
);
//tell the app to use passport and to initialize the passport package
app.use(passport.initialize());
//tell the app to use passport to deal with the sessions
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/expenses', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', function () {
  console.log('Mongo DB connection established');
});

// passport.serializeUser(function (user,done) {
//   done (null, user.id)
// })

//typing in '/transactions' in the url bar connects to the tranactions file in the routes folder
app.use('/transactions', transactions);

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('User', userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', function (req, res) {
  User.register({ username: req.body.username, password: req.body.password });
  if (err) {
    console.log(err);
    res.redirect('/register');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`.yellow.bold);
});
