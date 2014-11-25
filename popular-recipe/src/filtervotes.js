

function filtervotes() {

}

function readFile(textfile) {
	fs = require('fs')
	var fileContent = fs.readFileSync(textfile).toString()
	return fileContent;

}

module.exports.filtervotes = filtervotes;
module.exports.readFile = readFile;
