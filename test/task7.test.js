import chai from "chai";
import fibonacciSeq from "../src/task7.js";

const assert = chai.assert;
const expect = chai.expect;
// const should = chai.should();

// expect(result).to.include({
//   status: "failed",
//   reason: "ERROR: Arguments must be two objects",
// });

describe('Fibonacci Series', function () {

  it('Returns an array of numbers', function () {
    const result = fibonacciSeq(10);
    assert.deepEqual(result, [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34 ]);
  });

  it('Returns an array of numbers', function () {
    const result = fibonacciSeq(1);
    assert.deepEqual(result, [ 0 ]);
  });

  it('Returns an array of numbers', function () {
    const result = fibonacciSeq(2);
    assert.deepEqual(result, [ 0, 1 ]);
  });

  it('Tests error: the value must be a number or an object', function () {
    const result = fibonacciSeq('o');
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: The value must be a number or an object with the minimun and maximun values of a range",
    });
  });

  it('Tests error: value must be greater than 0', function () {
    const result = fibonacciSeq(-3);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: The value must be greater than 0",
    });
  });

  it('Tests error: value must be an integer', function () {
    const result = fibonacciSeq(3.1);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: The value must be an integer",
    });
  });

  it('Tests error: array is not allowed', function () {
    const result = fibonacciSeq(null);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Arrays or Null are not allowed",
    });
  });

  it('Tests error: object must have the min and max fields', function () {
    const result = fibonacciSeq({ min: [], max: [] });
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: The object must have the min and max fields and they must be integers",
    });
  });

  it('Tests error: values must be equal or greater than 0', function () {
    const result = fibonacciSeq({ min: 0, max: -5 });
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Values must be equal or greater than 0",
    });
  });

  it('Tests when passing regular expressions', function () {
    const result = fibonacciSeq(/\s/, /\s/);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: The object must have the min and max fields and they must be integers",
    });
  });

})