describe('tasks service', function () {
  var data;
  beforeEach(module('app.tasks'));
  beforeEach(module(function($provide){
    $provide.service('server', function() {
      return {
        get: sinon.spy(function() {
          return Q.when(data);
        })
      };
    });
    $provide.service('user', function() {
      return {
        username: 'yuri'
      };
    });
    $provide.service('$q', function() {
      return Q;
    });
  }));

  it('should get tasks', function() {
    var tasks = getService('tasks');
    expect(tasks.getTasks()).to.not.be.undefined;
  });

  it('should get user\'s tasks', function() {
    var tasks = getService('tasks');
    var server = getService('server');
    data = [{
      owner: 'bob',
      description: 'Mow the lawn'
    }, {
      owner: 'yuri',
      description: 'Save the world'
    }];
    return tasks.getMyTasks()
      .then(function(myTasks) {
        expect(myTasks.length).to.equal(1);
        server.get.should.have.been.calledOnce;
      });
  });
});