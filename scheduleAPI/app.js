const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scheduleAPI', { useNewUrlParser: true });
const db = mongoose.connection;

const port = process.env.PORT || 3000;

const TaskType = require('./models/taskTypeModel');
const User = require('./models/userModel');

app.get('/api', (req, res) => {
  console.log('hello world');

  res.json({
    status: 'API Is Working',
    message: 'Welcome to the Schedule API!',
  });
});

app.get('/api/taskTypes', (req, res) => {
  console.log(req.body);

  TaskType.find({}, (err, taskTypes) => {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'Task types retrieved successfully',
      data: taskTypes
    });
  });
});

app.post('/api/taskTypes', (req, res) => {
  const taskType = new TaskType(req.body);
  console.log(taskType);

  taskType.save((err, savedTaskType) => {
    res.json(savedTaskType);
  });
});

app.get('/api/taskTypes/:id', (req, res) => {
  console.log(req.body);

  TaskType.find({}, (err, taskTypes) => {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }

    res.json({
      status: 'success',
      message: 'Task types retrieved successfully',
      data: taskTypes
    });
  });
});

app.get('/api/users', (req, res) => {
  console.log(req.body);

  User.find({}, (err, users) => {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }

    res.json({
      status: 'success',
      message: 'Task types retrieved successfully',
      data: users
    });
  });
});

app.post('/api/users', (req, res) => {
  const user = new User(req.body);
  console.log(user);

  user.save((err, savedUser) => {
    res.json(savedUser);
  });
});

app.get('/api/users/:id', (req, res) => {
  console.log(req.body);

  User.find({}, (err, users) => {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }

    res.json({
      status: 'success',
      message: 'Task types retrieved successfully',
      data: users
    });
  });
});

app.listen(port, () => {
  const runningMessage = `Running on port: ${port}`;

  console.log(runningMessage);
});
