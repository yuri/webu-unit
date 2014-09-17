angular.module('app.tasks', [
  'app.server',
  'app.user'
])

.factory('tasks', function(server, user) {
  var service = {};

  service.getTasks = function () {
    return server.get('tasks');
  };

  service.getMyTasks = function () {
    return service.getTasks()
      .then(function(taskArray) {
        return _.filter(taskArray, function(task) {
          return task.owner === user.username;
        });
      });
  };

  return service;
});

