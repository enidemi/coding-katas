
function filtervotes(fileContent) {
	splitContentArray = fileContent.split('\n');
	//return splitContentArray.length;
	for (var i=0; i<=splitContentArray.length; i++) {
		if (isNaN(splitContentArray[i]) == false) {
			return splitContentArray[i];
		}
	}
}

function readFile(textfile) {
	fs = require('fs')
	var fileContent = fs.readFileSync(textfile).toString()
	return fileContent;

}

module.exports.filtervotes = filtervotes;
module.exports.readFile = readFile;
