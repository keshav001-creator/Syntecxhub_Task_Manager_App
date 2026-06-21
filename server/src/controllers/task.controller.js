const Task = require("../models/task.model");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user
  });

  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    user: req.user
  });

  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findById(
    req.params.id
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  if (task.user.toString() !== req.user) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  const updated =
    await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findById(
    req.params.id
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  await task.deleteOne();

  res.json({
    message: "Task Deleted"
  });
};