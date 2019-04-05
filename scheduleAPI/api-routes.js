// api-routes.js
// Initialize express router

const router = require('express').Router();

// Set default API response
router.get('/', (req, res) => {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!',
  });
});

const TaskType = require('./models/taskTypeModel');

// task type routes
router.route('/taskTypes/:')
  .get((req, res) => {
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
  })

router.route('/taskTypes')
  .get((req, res) => {
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
  })
  .post((req, res) => {
    const taskType = new TaskType();

    taskType._id = req.body.taskTypeID ? req.body.taskTypeID : taskType._id;
    taskType.name = req.body.taskTypeName ? req.body.taskTypeName : taskType.name;
    taskType.days = req.body.taskTypeDays ? req.body.taskTypeDays : taskType.days;
    taskType.created = req.body.taskTypeCreated ? req.body.taskTypeCreate : taskType.created;

    // save the contact and check for errors
    taskType.save((err) => {
      if (err) {
        res.json({
          status: 'error',
          message: err
        });
      }

      res.json({
        message: 'New task type created!',
        data: taskType
      });
    });
  });
router.route('/taskTypes/:taskTypeID')
  .get((req, res) => {
    console.log(req.params.taskTypeID);

    TaskType.findById(req.params.taskTypeID, (err, taskType) => {
      if (err) {
        res.json({
          status: 'error',
          message: err
        });
      }

      res.json({
        message: 'Task type details loading..',
        data: taskType
      });
    });
  })
  .patch((req, res) => {
    TaskType.findById(req.params.taskTypeID, (err, taskType) => {
      if (err) {
        res.json({
          status: 'error',
          message: err
        });
      }

      taskType.name = req.body.taskTypeName ? req.body.taskTypeName : taskType.name;
      taskType.days = req.body.taskTypeDays ? req.body.taskTypeDays : taskType.days;
      taskType.created = req.body.taskTypeCreated ? req.body.taskTypeCreate : taskType.created;

      // save the contact and check for errors
      taskType.save((saveErr) => {
        if (saveErr) {
          res.json({
            status: 'error',
            message: saveErr
          });
        }

        res.json({
          message: 'Task type info updated',
          data: taskType
        });
      });
    });
  })
  .put((req, res) => {
    TaskType.findById(req.params.taskTypeID, (err, taskType) => {
      if (err) {
        res.json({
          status: 'error',
          message: err
        });
      }

      taskType.name = req.body.taskTypeName ? req.body.taskTypeName : taskType.name;
      taskType.days = req.body.taskTypeDays ? req.body.taskTypeDays : taskType.days;
      taskType.created = req.body.taskTypeCreated ? req.body.taskTypeCreate : taskType.created;

      // save the contact and check for errors
      taskType.save((saveErr) => {
        if (saveErr) {
          res.json({
            status: 'error',
            message: saveErr
          });
        }

        res.json({
          message: 'Task type info updated',
          data: taskType
        });
      });
    });
  })
  .delete((req, res) => {
    TaskType.remove({ _id: req.params.taskTypeID }, (err, taskType) => {
      if (err) {
        res.json({
          status: 'error',
          message: err
        });
      }

      res.json({
        status: 'success',
        message: 'Task Type deleted'
      });
    });
  });

// Export API routes
module.exports = router;
