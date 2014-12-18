fs = require('fs');

function FileLottery(dir) {
	this.index = 0;
	this.fileList = this.fileReader(dir);
}

FileLottery.prototype = {
	shuffle: function(fileList) {
		var shuffledList = fileList.slice();
		for (var i = 0; i < shuffledList.length; i++) {
			var random = this.randomInRange(0, i);
			var tmp = shuffledList[random];
			shuffledList[random] = shuffledList[0];
			shuffledList[0] = tmp;
		}
		return shuffledList;
	},

	randomInRange: function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	fileReader: function(dir) {
		return dir[0];
	}

}

function Iterator(fileList) {
	this.index = 0;
	this.fileList = fileList.slice();
}

Iterator.prototype = {
	next: function() {
		return this.fileList[this.index++];
	}
}

module.exports.FileLottery = FileLottery;
module.exports.Iterator = Iterator;
