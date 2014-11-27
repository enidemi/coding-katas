

var magnetoEffect = function magnetoEffect(radius, magneticPoints) { 
	this.radius = radius;
	this.magneticPoints = magneticPoints;
	// method1: function( param ) {
	// },
	// method2: function( param ) {
	// }
};

module.exports.magnetoEffect = magnetoEffect;

var Point = function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype = {
	distance: function distance(other) {
		return Math.sqrt(Math.pow((this.x-other.x),2) + Math.pow((this.y-other.y),2));
	}
}

module.exports.Point = Point;