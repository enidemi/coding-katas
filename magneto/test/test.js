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

  test( 'magnetoeffect point test', function() {
  	var ourMagnetoEffect = new magnetoEffect(3, [new Point(30, 50),]);
    assert.equal( 3, ourMagnetoEffect.radius)
    assert.equal(30, ourMagnetoEffect.magneticPoints[0].x)
	  assert.equal(50, ourMagnetoEffect.magneticPoints[0].y)
  });

  test( 'Example 1', function() {
  	var ourMagnetoEffect = new magnetoEffect(5, [new Point(50, 50),]);
  	var testCoordinate = ourMagnetoEffect.getRealCoordinate(new Point(49,50))
  	assert.equal(50, testCoordinate.x)
  	assert.equal(50, testCoordinate.y)
  });

  test( 'Example 2', function() {
    var ourMagnetoEffect = new magnetoEffect(5, [new Point(50, 50),]);
    var testCoordinate = ourMagnetoEffect.getRealCoordinate(new Point(0,0))
    assert.equal(0, testCoordinate.x)
    assert.equal(0, testCoordinate.y)
  });

  test( 'Example 3', function() {
    var ourMagnetoEffect = new magnetoEffect(5, [new Point(50, 50),new Point(100, 50),]);
    var testCoordinate = ourMagnetoEffect.getRealCoordinate(new Point(101,48))
    assert.equal(100, testCoordinate.x)
    assert.equal(50, testCoordinate.y)
  });

    test( 'Example 4', function() {
    var ourMagnetoEffect = new magnetoEffect(5, [new Point(50, 50),new Point(51, 51),]);
    var testCoordinate = ourMagnetoEffect.getRealCoordinate(new Point(51,52))
    assert.equal(51, testCoordinate.x)
    assert.equal(51, testCoordinate.y)
  });
});
