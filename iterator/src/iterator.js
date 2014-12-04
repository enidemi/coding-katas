fs = require('fs');

function randGer(files) {
	for (var i = 0; i < files.length; i++) {
		var temp = files[i];
		var indexSomething = Math.floor(Math.random()) % files.length;
		files[i] = files[indexSomething];
		files[indexSomething] = temp;
	};
	return files;
};

function parseDirectory(directory) {
	var files = fs.readdirSync(directory);
	return files;	
}

function Iterator(files,randomGen) {
	this.files = randomGen(files);
	this.index = 0;
	this.next = function(){
		var item =this.files[this.index];
		this.index++;
		if (this.index>= files.length) {
			this.files = randomGen(files);
			this.index = 0;
		}
		return item;
	}
}

// files = parseDirectory("../");
// it = new Iterator(files, randGer);
// for (var i = 0; i < files.length; i++) {
// 	console.log(it.next());
// };

module.exports.Iterator = Iterator;
module.exports.randGer = randGer;
module.exports.parseDirectory = parseDirectory;
