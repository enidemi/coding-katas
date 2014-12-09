fs = require('fs');

function randGer(files) {
	for (var i = 0; i < files.length; i++) {
		var temp = files[i];
		randomIndex = Math.floor(Math.random() * files.length);
		files[i] = files[randomIndex];
		files[randomIndex] = temp;
	};
	return files;
}

function parseDirectory(directory) {
	return files = fs.readdirSync(directory);
}

function Iterator(path,randomGen,dirParser) {
	var files = dirParser(path);
	this.files = randomGen(files);
	this.index = 0;
	this.next=function(){
		var item = this.files[this.index];
		this.index++;
		if(this.index>=this.files.length) {
			this.index = 0;
			this.files = randomGen(files);
		}
		return item;
	}
}

// it = new Iterator (".",randGer,parseDirectory);

// for (var i = 0; i < 20; i++) {
// 	console.log(it.next());
// }

module.exports.Iterator = Iterator;
module.exports.randGer = randGer;
module.exports.parseDirectory = parseDirectory;
