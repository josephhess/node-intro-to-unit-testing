const expect = require('chai').expect;

const fizzer = require('../fizzBuzzer');

describe('fizzer', function(){
  it('should return correct output for a given input', function(){
    const happyPath = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 5, expected: 'buzz'},
      {a: 3, expected: 'fizz'},
      {a: 2, expected: 2}
    ];
    happyPath.forEach(function(input){
      const result = fizzer(input.a);
      expect(result).to.equal(input.expected);
    })
  })

  it('should throw an error if passed non numbers', function(){
    const badArgs = ['1', false, undefined, null, [1,2], {a: '2'}];
    badArgs.forEach(function(arg){
      expect(function(){
        fizzer(arg);
      }).to.throw(Error);
     })

  })

})
