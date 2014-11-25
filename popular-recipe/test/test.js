
var assert = require("assert")
var filtervotes = require('../src/filtervotes.js').filtervotes;
var readFile = require('../src/filtervotes.js').readFile;

suite('filter recipe votes', function() {
	test('read sample file should output line count 13', function() {
		assert.equal( "4\ntilak +\ntilak +\ntilak -\ntilak +\n3\nratna +\nshashi -\nratna -\n3\nbhavani -\nbhavani +\nbhavani -", readFile("/Users/enidemi/workspace/coding-katas/popular-recipe/testfile.txt"));
	});
	test('read file lines', function() {
		assert.equal( 13, filtervotes("4\ntilak +\ntilak +\ntilak -\ntilak +\n3\nratna +\nshashi -\nratna -\n3\nbhavani -\nbhavani +\nbhavani -"));
	});

});
