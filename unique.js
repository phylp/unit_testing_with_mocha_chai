'use strict';

module.exports = function(arr){
	var seen = {};
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		if(seen[arr[i]]){
			continue;
		} else {
			seen[arr[i]] = true;
			newArr.push(arr[i]);
		}
	}
	return newArr;
}