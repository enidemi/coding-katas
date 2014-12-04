var returnString = [];

function randGer(directory) {
	return Math.floor((Math.random() * directory.length) + 1);
}

function iteratorCaller(randomNumber, directory) { 
	returnString.push(directory[randomNumber]);
	directory.splice(randomNumber, 1)
	return returnString;
};

function Iterator(files,randomGen) {
	this.files = randomGen(files);
	this.index = 0;
	this.next = function(){
		var item =files[this.index];
		this.index++;
		if (this.index>=files.length) {
			this.files = randomGen(files);
			this.index = 0;
		}
		return item;
	}
}

module.exports.iteratorCaller = iteratorCaller;
module.exports.Iterator = Iterator;
module.exports.randGer = randGer;
