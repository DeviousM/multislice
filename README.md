# Array multislice

Multislice is made to slice mutliple ranges from an array at once using predefined index ranges.
Just import the module and you're ready to go!


# Usage example:

	import 'multislice';
	
	
	let sampleArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	
	let ranges = [
		{from: 1, to: 4}, 
		{from: 5, to: 10}
	];
	
	sampleArray.multislice(ranges);
	
	// Output will be: [[2,3,4],[6,7,8,9,10]]
	
	
# License
ISC License