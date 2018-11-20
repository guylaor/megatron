var Application = require('spectron').Application
var path = require('path')
var assert = require('assert')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')

var baseDir = path.join(__dirname, '..')
var electronBinary = path.join(baseDir, 'node_modules', '.bin', 'electron')


var app = new Application({
    path: electronBinary,
    args: [baseDir]
})

global.before(function () {
    chai.should();
    chai.use(chaiAsPromised);
});


describe('Launch Test', function () {
  
  this.timeout(10000)

  beforeEach(function () {
      return app.start();
  });

  afterEach(function () {
      return app.stop();
  });

  it('opens a window', function () {
    return app.client.waitUntilWindowLoaded()
      .getWindowCount().should.eventually.equal(2);
  });

  it('tests the title', function () {
    return app.client.windowByIndex(1)
      .getTitle().should.eventually.equal('Megatron');
  });
});

