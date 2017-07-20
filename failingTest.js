var assert = require('assert');

describe('String#split', function(){
  it('should return an array', function(){
    assert(Array.isArray('a!b!c'.split(',')));
  });
});

describe('adding two numbers', function(){
  it('should return the sum of the 2 numbers', function(){
    assert.equal(1+2,2);
  });
});