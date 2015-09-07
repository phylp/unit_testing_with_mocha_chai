'use strict';

module.exports = function(arr){
	var map = {};
	for(var i = 0; i < arr.length; i++){
		for(var k = 0; k < arr[i].length; k++){
			if(map[arr[i][k]]){
				map[arr[i][k]]++;
			} else {
				map[arr[i][k]] = 1;
			}
		}
	}

	var most = 0;
	var final;
	for(var letter in map){
		if(map[letter] > most){
			most = map[letter];
			final = letter;
		}
	}
	
	return final;
}