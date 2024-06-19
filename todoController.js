const Todo = require('./todo');

const createTodo = async (req, res) => {
  const { title, description, isFavorite } = req.body;
  const userId = req.user.userId;
  try {
    const todo = new Todo({
      user: userId,
      title,
      description,
      isFavorite,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTodos = async (req, res) => {
  const userId = req.user.userId;
  const { page = 1, limit = 10, search = '' } = req.query;
  try {
    const todos = await Todo.find({
      user: userId,
      title: { $regex: search, $options: 'i' },
    })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const count = await Todo.countDocuments({
      user: userId,
      title: { $regex: search, $options: 'i' },
    });
    res.json({
      todos,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getTodoById = async (req, res) => {
  const userId = req.user.userId;
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ _id: id, user: userId });
    if (!todo) return res.status(404).send('Todo not found');
    res.json(todo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateTodo = async (req, res) => {
  const userId = req.user.userId;
  const { id } = req.params;
  const { title, description, isFavorite } = req.body;
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: userId },
      { title, description, isFavorite },
      { new: true }
    );
    if (!todo) return res.status(404).send('Todo not found');
    res.json(todo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteTodo = async (req, res) => {
  const userId = req.user.userId;
  const { id } = req.params;
  try {
    const todo = await Todo.findOneAndDelete({ _id: id, user: userId });
    if (!todo) return res.status(404).send('Todo not found');
    res.send('Todo deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
