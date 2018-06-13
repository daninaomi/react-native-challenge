// 'use strict';

// var mongoose = require('mongoose'),
//   User = mongoose.model('Users');

// exports.list_all_users = function(req, res) {
//   User.find({}, function(err, user) {
//     if (err)
//       res.send(err);
//     res.json(user);
//   });
// };

// exports.create_a_user = function(req, res) {
//   var new_user = new User(req.body);
//   new_user.save(function(err, user) {
//     if (err)
//       res.send(err);
//     res.json(user);
//   });
// };

// exports.read_a_user = function(req, res) {
//   User.findById(req.params.userId, function(err, user) {
//     if (err)
//       res.send(err);
//     res.json(user);
//   });
// };

// exports.update_a_user = function(req, res) {
//   User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
//     if (err)
//       res.send(err);
//     res.json(user);
//   });
// };

// exports.delete_a_user = function(req, res) {
//   User.remove({
//     _id: req.params.userId
//   }, function(err, user) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'User successfully deleted' });
//   });
// };


'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
