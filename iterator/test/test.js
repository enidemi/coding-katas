'use strict';

var assert = require('assert');

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

var FileLottery = require('../src/iterator.js').FileLottery;
var Iterator = require('../src/iterator.js').Iterator;

suite('Files', function() {
  var dir = ["file1", "file2", "file3"];
  var fileLottery = new FileLottery(dir);
  test('should return files from a directory', function() {
   assert.equal("file1", fileLottery.fileReader(dir));
  });
});

suite('Random in range', function() {
  var fileLottery = new FileLottery("dir");
  test('should return in a range', function() {
    assert(fileLottery.randomInRange(1,10) <= 10);
    assert(fileLottery.randomInRange(1,10) >= 1);
  });
});

suite('Shuffle the file list', function() {
  var dir = ["file1", "file2", "file3"];

  var fileLottery = new FileLottery(dir);
  var stub = sinon.stub(fileLottery, "randomInRange");
  stub
    .onFirstCall().returns(1)
    .onSecondCall().returns(2)
    .onThirdCall().returns(2);

  test('shuffles the files', function() {
    assert.deepEqual(["file2", "file1", "file3"], fileLottery.shuffle(dir));
  });
});

suite('Iterator', function() {
  var fileLottery = new FileLottery("dir");
  test('should iterate through files', function() {
    var iterator = new Iterator(["file1","file2"]);
    assert.equal("file1", iterator.next());
  });
});
