var injector = new Injector();
injector.addService('user_repo', function () {
  return new UserRepository();
});

var controller = injector.create(UserPageController);
