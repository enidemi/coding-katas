'use strict';

var assert = require('assert');

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

var iterator = require('../src/iterator.js').iterator;

var testRandom = 1;
var testFiles = ["1.txt","2.txt","3.txt","4.txt","5.txt","6.txt","7.th"];

suite('iterator', function() {

  // test( 'first', function() {
  //   var testData = sinon.stub();
  //   testData.withArgs("/var/files").returns(testRandom);
  //   assert.deepEqual( 1, iterator(testData("/var/files")) );
  // });

    test( 'return everything', function() {
    var testData = sinon.stub();
    testData.withArgs("/var/files").returns(testFiles);
    assert.deepEqual( testFiles, iterator(testData("/var/files")) );
  });

});
