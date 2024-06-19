const mongoose = require('mongoose');

const connect = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    throw error;
  }
};

module.exports = { connect };
