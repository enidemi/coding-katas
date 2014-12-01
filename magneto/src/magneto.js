var magnetoEffect = function magnetoEffect(radius, magneticPoints) { 
	this.radius = radius;
	this.magneticPoints = magneticPoints;
};

magnetoEffect.prototype = {
	getRealCoordinate: function getRealCoordinate(point) {
		var minDist = 0;
		var closestPoint = new Point(0,0);

		for (var i = 0; i < this.magneticPoints.length; i++) {

			currentDist = point.distance(this.magneticPoints[i]);

			if (i == 0 || minDist > currentDist){
				minDist = currentDist;
				closestPoint.x = this.magneticPoints[i].x;
				closestPoint.y = this.magneticPoints[i].y;
			}
		}

		if (minDist < this.radius) {
			return closestPoint;
		} else {
			return point;
		}
	}
}

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
module.exports.magnetoEffect = magnetoEffect;