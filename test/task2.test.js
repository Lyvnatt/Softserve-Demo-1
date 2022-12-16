import chai from 'chai';
import encloseEnv from '../src/task2.js';

const assert = chai.assert;
const expect = chai.expect;
// const should = chai.should();

describe('Testing Envelope Analysis', function () {

  it('Returns the biggest envelope', function () {
    const result = encloseEnv({a: 5, b:3}, {c:4, d:2});
    assert.equal(result, '1');
  });

  it('Returns 0 if nesting is not possible', function () {
    const result = encloseEnv({a: 5, b:3}, {c:4, d:3});
    assert.equal(result, '0');
  });

  it('Tests when passing a floating number', function () {
    const result = encloseEnv({a: 5, b:3.5}, {c:6, d:4});
    assert.equal(result, '2');
  });

  it('Tests error: arguments must be two objects', function () {
    const result = encloseEnv((1, 2));
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Arguments must be two objects",
    });
  });

  it('Tests error: each envelope must have two sides', function () {
    const result = encloseEnv({a: 5}, {c:6, d:4});
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Each object must have two sides",
    });
  });

  it('Tests error: sides of the envelopes must be numbers', function () {
    const result = encloseEnv({a: '5', b:3}, {c:6, d:4});
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Sides of the envelopes must be numbers",
    });
  });
  
  it('Tests error: values must be possitive numbers', function () {
    const result = encloseEnv({a: -5, b:3}, {c:4, d:2});
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: The values must be possitive numbers",
    });
  });

  it('Tests when passing an empty object', function () {
    const result = encloseEnv({});
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Arguments must be two objects",
    });
  });

  it('Tests when passing a regular expression', function () {
    const result = encloseEnv(/\s/, /\s/);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Each object must have two sides",
    });
  });

  it('Tests when passing "undefined" as a value', function () {
    const result = encloseEnv({a: 0, b:undefined}, {c:4, d:2});
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Sides of the envelopes must be numbers",
    });
  });
})