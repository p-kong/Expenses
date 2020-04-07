const Transaction = require('../models/Transactions');

// Gets all transactions
// GET /transactions

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).send({ data: transactions });
  } catch (err) {
    return res.status(500).send({ error: 'Server Error' });
  }
};

//Adds a transaction
//POST /transactions

exports.addTransaction = async (req, res, next) => {
  try {
    const newTransaction = {
      text: req.body.text,
      amount: req.body.amount,
    };
    await Transaction.create(newTransaction);
    return res.status(201).send({ newTransaction });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      res.status(400).send({
        error: messages,
      });
    } else {
      res.status(500).send({ error: 'Error' });
    }
  }
};

//Removes a transaction by ID
//DELETE /transactions

exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      res.status(404).send({ error: 'No Transaction Found' });
    }
    await transaction.remove();
    return res.status(200).json({ data: {} });
  } catch (error) {
    res.status(500).send({ error: 'Error' });
  }
};
