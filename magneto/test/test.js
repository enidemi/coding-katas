'use strict';

var assert = require('assert');

var magnetoEffect = require('../src/magneto.js').magnetoEffect;
var Point = require('../src/magneto.js').Point;

suite('magnetoEffect', function() {

  test( 'point test', function() {
  	var point = new Point(3, 4);
    assert.equal(3, point.x)
    assert.equal(4, point.y)
  });

  test( 'distance test', function() {
  	var point1 = new Point(3, 4);
  	var point2 = new Point(5, 4);
    assert.equal(2, point1.distance(point2))
    assert.equal(2, point2.distance(point1))
  });

  test( 'magnetoeffect test', function() {
  	var ourMagnetoEffect = new magnetoEffect(3, [new Point(30, 50),]);
    assert.equal( 3, ourMagnetoEffect.radius)
    assert.equal(30, ourMagnetoEffect.magneticPoints[0].x)
	assert.equal(50, ourMagnetoEffect.magneticPoints[0].y)
  });

  // test( 'test', function() {
  // 	var ourMagnetoEffect = new magnetoEffect(3, [50,50]);
  // 	console.log(ourMagnetoEffect) 
  // 	assert.notEqual(undefined, ourMagnetoEffect)
  //   assert.equal( 3, ourMagnetoEffect.radius)
  // });

});
