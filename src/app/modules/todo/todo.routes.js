var todo = require('./todo.controller');
module.exports = function(app) {
  app.route('/createTodo').post(todo.create);
  app.route('/listTodo/:skip/:limit').get(todo.list);
  app.route('/searchTodo/:text').get(todo.search);
  app.route('/updateTodo').post(todo.update);
  app.route('/deleteTodo').post(todo.update);
};
