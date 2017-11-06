var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  })

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function () {
    assert.equal(true, true)
  }),

  it('should add 2 and 2 to make 4', function () {
    calculator.previousTotal = 2
    calculator.add(2)
    assert.equal(calculator.runningTotal, 4)
  }),

  it('should subtract 2 from 4 to make 2', function () {
    calculator.previousTotal = 4
    calculator.subtract(2)
    assert.equal(calculator.runningTotal, 2)
  }),

  it('should multiply 2 and 4 to make 8', function () {
    calculator.previousTotal = 2
    calculator.multiply(4)
    assert.equal(calculator.runningTotal, 8)
  }),

  it('should divide 8 by 2 to make 4', function () {
    calculator.previousTotal = 8
    calculator.divide(2)
    assert.equal(calculator.runningTotal, 4)
  }),

  it('should concatenate multiple clicks', function () {
    calculator.numberClick(2)
    calculator.numberClick(2)
    assert.equal(calculator.runningTotal, 22)
  }),

  it('should use multiple operator clicks', function () {
    calculator.numberClick(2)
    calculator.operatorClick("*")
    calculator.numberClick(2)
    calculator.operatorClick("-")
    calculator.numberClick(1)
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal, 3)
  })

})
