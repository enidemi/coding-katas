var chai = require("chai")
var sinon = require("sinon")
var assert = require("assert")
var filtervotes = require('../src/filtervotes.js').filtervotes;
var readFile = require('../src/filtervotes.js').readFile;

var testFileData = "4\ntilak +\ntilak +\ntilak -\ntilak +\n3\nratna +\nshashi -\nratna -\n3\nbhavani -\nbhavani +\nbhavani -";

suite('filter recipe votes', function() {
	test('read sample file should output line count 13', function() {
		assert.equal( testFileData, readFile("testfile.txt"));
	});
	// test('read file lines', function() {
	// 	assert.equal( 13, filtervotes("4\ntilak +\ntilak +\ntilak -\ntilak +\n3\nratna +\nshashi -\nratna -\n3\nbhavani -\nbhavani +\nbhavani -"));
	// });
	test('filter votes', function() {
		var fileStub = sinon.stub();
		fileStub.withArgs('testlog.txt').returns(testFileData);

		assert.deepEqual( [4,3,3], filtervotes(fileStub('testlog.txt')));
	});	

	test('food numbers', function() {
		assert.deepEqual( [4,3,3], filtervotes("4\ntilak +\ntilak +\ntilak -\ntilak +\n3\nratna +\nshashi -\nratna -\n3\nbhavani -\nbhavani +\nbhavani -"));
	});

});
