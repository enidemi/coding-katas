'use strict';

var assert = require('assert');

var magnetoEffect = require('../src/magneto.js').magnetoEffect;

suite('magnetoEffect', function() {



  test( 'test', function() {
  	var ourMagnetoEffect = new magnetoEffect(3, [50,50]);
    assert.equal( 3, ourMagnetoEffect.radius)
    assert.notEqual([50,50], ourMagnetoEffect.magneticPoints)
  });

  // test( 'test', function() {
  // 	var ourMagnetoEffect = new magnetoEffect(3, [50,50]);
  // 	console.log(ourMagnetoEffect) 
  // 	assert.notEqual(undefined, ourMagnetoEffect)
  //   assert.equal( 3, ourMagnetoEffect.radius)
  // });

});
