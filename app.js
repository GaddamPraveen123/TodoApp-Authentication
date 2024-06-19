const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./authRoutes');
const todoRoutes = require('./todoRoutes');
const db = require('./db');

const app = express();


app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);


const mongoURI = 'mongodb+srv://praveen123:praveen123@cluster0.7oueg4l.mongodb.net/?retryWrites=true&w=majority';
const port = 3599;

db.connect(mongoURI).then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
