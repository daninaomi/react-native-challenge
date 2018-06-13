// 'use strict';
// module.exports = function(app) {
//   var user = require('../controllers/usersController');

//   // user Routes
//   app.route('/users')
//     .get(user.list_all_users)
//     .post(user.create_a_user);


//   app.route('/users/:userId')
//     .get(user.read_a_user)
//     .put(user.update_a_user)
//     .delete(user.delete_a_user);
// };

'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};