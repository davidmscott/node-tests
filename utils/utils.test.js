const expect = require('expect');

const utils = require('./utils.js');

describe('Utils', () => {
	describe('#add', () => {
		it('should add two numbers', () => {
			var result = utils.add(33, 11);
			// if (result !== 44) {
			// 	throw new Error(`Expected 44, but got ${result}.`);
			// }
			expect(result).toBe(44).toBeA('number');
		});
	});

	it('should async add two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
		done();
		});
	});

	it('should square a number', () => {
		var resultSquare = utils.square(3);
	// 	if (resultSquare !== 9) {
	// 		throw new Error(`Expected 9, but got ${resultSquare}.`);
	// 	}
		expect(resultSquare).toBe(9).toBeA('number');
	});

	it('should async square a number', (done) => {
		utils.asyncSquare(3, (square) => {
			expect(square).toBe(9).toBeA('number');
			done();
		});
	});
});

it('should have first and last name properties', () => {
	var user = {age: 35, location: 'Boulder'};
	var fullName = 'Dave Scott';
	utils.setName(user, fullName);
	expect(user).toInclude({firstName: 'Dave', lastName: 'Scott'}).toBeA('object');
});

// it('should expect some values', () => {
	// expect(12).toNotBe(11);
	// expect({name: "Dave"}).toEqual({name: "Dave"}); 
	// expect([2, 3, 4]).toExclude(1);
	// expect({name: "Dave", age: 35, location: "Boulder"}).toInclude({age: 35});
// });

