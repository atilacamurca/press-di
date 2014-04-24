'use strict';

describe('Service: albumsList', function () {

  // load the service's module
  beforeEach(module('playlistApp'));

  // instantiate service
  var albumsList;
  beforeEach(inject(function (_albumsList_) {
    albumsList = _albumsList_;
  }));

  it('should do something', function () {
    expect(!!albumsList).toBe(true);
  });

});
