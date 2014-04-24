Injector.prototype.create = function (Constructor) {
  var Dependant = function () {};
  Dependant.prototype = Contructor.prototype;
  var instance = new Dependant();
  this.inject(Constructor, instance);
  return instance;
};

Injector.prototype.inject =
    function (Constructor, instance) {
  var keys = Constructor.prototype.$deps || [];
  var deps = keys.map(this.getService, this);
  Constructor.apply(instance, deps);
};
