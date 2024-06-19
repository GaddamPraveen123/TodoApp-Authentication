const User = require('./user');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const signIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send('Invalid username or password');
    }
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret_key', {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { signUp, signIn };
