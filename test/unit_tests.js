'use strict';

var myShift = require('../shift.js');
var myUnshift = require('../unshift.js');
var myPop = require('../pop.js');
var myPush = require('../push.js');
var unique = require('../unique.js');
var frequency2 = require('../frequency2.js');
var chai = require('chai');
var expect = chai.expect;

describe('myShift', function(){
	it('should return an indexed array value', function(){
		var a = [1,2,3];
		expect(a.myShift()).to.eql(1);
	});
});

describe('myUnshift', function(){
	it('add argument value to array and return the array length', function(){
		var b = [1,2,3];
		expect(b.myUnshift(2)).to.eql(4);
		expect(b).to.eql([2,1,2,3]);
	});
});

describe('myPop', function(){
	it('remove the last array value and return the removed array value', function(){
		var h = [1,2,3];
		expect(h.myPop()).to.eql(3);
		expect(h).to.eql([1,2]);
	});
});

describe('myPush', function(){
	it('should add a value to the end of an array and return the length of new array', function(){
		var d = [1,2,3];
		expect(d.myPush(3)).to.eql(4);
		expect(d).to.eql([1,2,3,3]);
	});
});

describe('unique', function(){
	it('should return an array of unique values', function(){
		var e = [1,2,3,3,4,5,4,4,4,7,8,8];
		expect(unique(e)).to.eql([1,2,3,4,5,7,8]);
	});
});

describe ('frequency2', function(){
	it('should return the most common letter in an array', function(){
		var f = ['deep','doodles','udder','describe', 'diddly'];
		expect(frequency2(f)).to.eql('d');
	})
})


