var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  }),

  it('should update the display with the running total', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  }),

  it('should update the display with the result of *', function () {
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number5')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('25')
  }),

  it('should update the display with the result of +', function () {
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number5')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  }),

  it('should update the display with the result of -', function () {
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number5')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  }),

  it('should update the display with the result of /', function () {
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number5')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  }),

  it('should update the display with the result of chained operators', function () {
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  }),

  it('should correctly update the display with negative numbers', function () {
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number1')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-5')
  }),

  it('should correctly update the display with decimal numbers', function () {
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number3')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number4')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('0.75')
  }),

  it('should correctly update the display with large numbers', function () {
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number3')).click()
    element(by.css('#number3')).click()
    element(by.css('#number3')).click()
    element(by.css('#number3')).click()
    element(by.css('#number3')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number3')).click()
    element(by.css('#number3')).click()
    element(by.css('#number3')).click()
    element(by.css('#number3')).click()
    element(by.css('#number3')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('666666')
  }),

  it('should correctly handle divide by zero', function () {
    runningTotal = element(by.css('#running_total'))
    element(by.css('#number3')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('Cannot Divide By 0')
  })
})
