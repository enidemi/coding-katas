
function filtervotes(fileContent) {

	splitContentArray = fileContent.split('\n');
	var resultArray = [];
	//return splitContentArray.length;
	for (var i=0; i<=splitContentArray.length; i++) {
		if (isNaN(splitContentArray[i]) == false) {
			resultArray.push(parseInt(splitContentArray[i]));
		}
	}
	return resultArray;
}

function readFile(textfile) {
	fs = require('fs')
	var fileContent = fs.readFileSync(textfile).toString()
	return fileContent;
}

module.exports.filtervotes = filtervotes;
module.exports.readFile = readFile;
