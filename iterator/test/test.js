'use strict';

var assert = require('assert');

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

var Iterator = require('../src/iterator.js').Iterator;
var randGer = require('../src/iterator.js').randGer;
var parseDirectory = require('../src/iterator.js').parseDirectory;

suite('suite name iterator', function() {
 test('random generator', function() {
 	var fileArray = [12,23,44,21];
 	var results = randGer(fileArray);
 	for (var i = 0; i < results.length; i++) {
 		assert(fileArray.indexOf(results[i])>=0);
 	};
  });
 test('Iterator FS Mock', function() {
 	var files = ["Baka1","Baka2","Baka3"];
 	var fakeDirParse = sinon.stub().returns(files);
 	var expectedFiles = ["Baka2","Baka1","Baka3"];
 	var fakeRandGen = sinon.stub().returns(expectedFiles);
 	var iterator = new Iterator("somestring", fakeRandGen,fakeDirParse);
 	var results =[];
 	for (var i = 0; i < files.length; i++) {
 		results.push(iterator.next());
 	};
 	assert.deepEqual(expectedFiles,results);
  });
  test('Iterator FS Mock', function() {
 	var files = ["Baka1","Baka2","Baka3"];
 	var fakeDirParse = sinon.stub().returns(files);
 	var expectedFiles = ["Baka2","Baka1","Baka3"];
 	var fakeRandGen = sinon.stub().returns(expectedFiles);
 	var spyRanGen = sinon.spy(fakeRandGen);
 	var iterator = new Iterator("somestring", spyRanGen,fakeDirParse);
 	var results =[];
 	var someNo = 3;
 	for (var i = 0; i < files.length*someNo; i++) {
 		results.push(iterator.next());
 	};
 	var mulExpectedR = [];
 	for (var i = 0; i < someNo; i++) {
 		for (var j = 0; j < expectedFiles.length; j++) {
  			mulExpectedR.push(expectedFiles[j]);
 		};
 	};
 	assert.equal(someNo+1,spyRanGen.callCount);
 	assert.deepEqual(mulExpectedR,results);
  });
});
