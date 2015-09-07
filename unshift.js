'use strict';

Array.prototype.myUnshift = function(val){
	for(var i = this.length-1; i >= 0; i--){
		this[i+1] = this[i];
	}
	this[0] = val;
	return this.length;
}