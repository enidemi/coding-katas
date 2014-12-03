var iterator = function iterator(directory) { 
	// return 0;
	var returnString = [];
	for (i = 0 ; i < directory.length; i++) {
		returnString.push(directory[i]);
	}
	return returnString;
};


module.exports.iterator = iterator;
