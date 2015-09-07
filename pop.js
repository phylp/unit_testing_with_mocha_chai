'use strict';

Array.prototype.myPop = function(){
	var result = this[this.length-1];
	this.length = this.length-1
	return result;
}

// module.exports = function(arr){
// 	var output = arr[arr.length-1];
// 	var newArr = [];
// 	for(var i = 0; i < arr;length-1; i++){
// 		newArr[i] = arr[i];
// 	}
// 	arr = newArr;
// 	return output;
// }