import chai from "chai";
import numericSequence from "../src/task6.js";

const assert = chai.assert;
const expect = chai.expect;
// const should = chai.should();

describe('Testing Numeric Sequence', function () {

  it('Returns a string with a series of numbers', function () {
    const result = numericSequence(3, 9);
    assert.equal(result, '3,4,5');
  });

  it('Tests error: two parameters are required', function () {
    const result = numericSequence(9);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Two parameters are required: length and the value of the minimum square",
    });
  });  

    it('Tests error: length and min must be an integer', function () {
    const result = numericSequence('3', 9);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Length and min must be an integer",
    });
  });  

  it('Tests error: length and width must be greater than 0', function () {
    const result = numericSequence(3, -9);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Length and width must be greater than 0",
    });
  }); 

  it('Tests when passing an array as length', function () {
    const result = numericSequence([], 9);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Length and min must be an integer",
    });
  });  

  it('Tests when passing undefined as min', function () {
    const result = numericSequence(3, undefined);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Two parameters are required: length and the value of the minimum square",
    });
  });  

  it('Tests when passing a regular expression as a value', function () {
    const result = numericSequence(/\s/, 9);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Length and min must be an integer",
    });
  }); 

  it('Tests when passing a letter as a value', function () {
    const result = numericSequence(3, 'd');
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Length and min must be an integer",
    });
  });  

    it('Returns a string with a series of numbers', function () {
    const result = numericSequence(5, 20);
    assert.equal(result, '5,6,7,8,9');
  });  

    it('Returns a string with a series of numbers', function () {
    const result = numericSequence(7, 55);
    assert.equal(result, '8,9,10,11,12,13,14');
  });  
})