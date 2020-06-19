var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('should add 2 numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(5, calculator.runningTotal)
  })

  it('should subtract 2 numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  })

  it('should multiply 2 numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal)
  })

  it('should divide 2 numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  })

  it('should concat multiple number button clicks', function(){
    calculator.numberClick(9);
    calculator.numberClick(4);
    calculator.numberClick(2);
    assert.equal(942, calculator.runningTotal)
  })

  it('should chain operations', function(){
    calculator.numberClick(9);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(10, calculator.runningTotal)
  })

  it('should clear running total w/o affecting calculation', function(){
    calculator.numberClick(9);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(27, calculator.runningTotal)
  })

});
