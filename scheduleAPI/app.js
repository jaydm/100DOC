const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/scheduleAPI');
const scheduleRouter = express.Router();
const port = process.env.PORT || 3000;
const Project = require('./models/projectModel');

scheduleRouter.route('/schedule')
  .get((req, res) => {
    const query = {};

    if (req.query.projectID) {
      query.projectID = req.query.projectID;
    }

    Project.find(query, (err, projects) => {
      if (err) {
        return res.send(err);
      }

      return res.json(projects);
    });
  });

scheduleRouter.route('/schedule/:projectId')
  .get((req, res) => {
    Project.findById(req.params.projectId, (err, projects) => {
      if (err) {
        return res.send(err);
      }

      return res.json(projects);
    });
  });

app.use('/api', scheduleRouter);

app.listen(port, () => {
  console.log('Running on port: ' + port);
});
