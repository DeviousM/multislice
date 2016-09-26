'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Array.prototype.multislice = function (ranges) {
	var _this = this;

	if (typeof ranges === 'undefined') throw Exception("Ranges have to be defined!");
	if ((typeof ranges === 'undefined' ? 'undefined' : _typeof(ranges)) !== 'object') throw Exception("You have to pass an array!");

	return ranges.map(function (el) {
		return _this.slice(el.from, el.to);
	});
};