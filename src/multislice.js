Array.prototype.multislice = function(ranges) {
	if(typeof ranges === 'undefined')
		throw Exception("Ranges have to be defined!");
	if(typeof ranges !== 'object') 
		throw Exception("You have to pass an array!");

	return ranges.map(el => this.slice(el.from, el.to));
};