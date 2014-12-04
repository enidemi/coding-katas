'use strict';

var assert = require('assert');

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

var Iterator = require('../src/iterator.js').Iterator;
var randGer = require('../src/iterator.js').randGer;
var iteratorCaller = require('../src/iterator.js').iteratorCaller;

var testRandom = 2;
var testFiles = ["1.txt","2.txt","3.txt","4.txt","5.txt","6.txt","7.th"];
var testRandomOrder = ["7.th","5.txt","3.txt","1.txt","2.txt","6.txt","4.txt"];

suite('iterator', function() {

 test('', function() {
    // var testRandomData = sinon.stub();
    // testRandomData.withArgs("/var/files").returns(testFiles.slice(0,[testRandom+1]));
    var results = [];
    var iterator = new Iterator(testFiles,function(testFiles){
      return testFiles;
    });
    for (var i = testFiles.length - 1; i >= 0; i--) {
      results.push(iterator.next());
    };

    assert.deepEqual( testFiles, results);
  });

});
