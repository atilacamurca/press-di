function Injector() {
  this.factories = {};
  this.services = {};
}

Injector.prototype.addService = function (key, factory) {
  this.factories[key] = factory;
};
