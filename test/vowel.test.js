var assert = require('assert');
// require('chai')
// var numVowels ='../num_vowels_w_testing.js';
// console.log(numVowels)
//
// describe('numVowels', function() {
//   describe('invoke numVowels', function() {
//     it('should equal the number of vowels in a string', function() {
//       let string = "arlo";
//       let expected = numVowels(string)
//       assert.equal(expected, numVowels(string));
//     });
//   });
// });


var expected = add(1,2);

// these three assertions are equivalent:
assert(expected == 3, 'one plus two is three');
assert.ok(expected == 3, 'one plus two is three');
assert.equal(expected, 3, 'one plus two is three');
