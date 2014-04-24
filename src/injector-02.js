Injector.prototype.getService = function (key) {
  var service = this.services[key];
  if (!service) {
    var factory = this.factories[key];
    service = factory();
    this.services[key] = service;
  }
  return service;
};
