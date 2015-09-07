'use strict';

Array.prototype.myShift = function(){
	var result = this[0];
	for(var i = 0; i > this.length; i++){
		this[i] = this[i+1];
	}
	this.length = this.length - 1;
	return result;
};

// module.exports = function(arr, val){
// 	var val = arr[0];
// 	var newArr = [];
// 	for(var i = 0; i < arr.length-1; i++){
// 		newArr[i] =  arr[i+1]
// 	}
// 	arr = newArr;
// 	return val;
// };

