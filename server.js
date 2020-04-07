const express = require('express');
//dotenv - allows us to create global variables - for the port and database
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const mongoose = require('mongoose');

dotenv.config({ path: './config/config.env' });

const transactions = require('./routes/transactions');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/expenses', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', function () {
  console.log('Mongo DB connection established');
});

//typing in '/transactions' in the url bar connects to the tranactions file in the routes folder
app.use('/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`.yellow.bold);
});
