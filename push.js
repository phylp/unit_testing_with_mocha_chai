'use strict';

Array.prototype.myPush = function(item){
	this[this.length] = item;
	return this.length; 
}

