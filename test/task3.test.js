import chai from 'chai';
import sortTriangles from '../src/task3.js';

const assert = chai.assert;
const expect = chai.expect;
// const should = chai.should();

describe('Testing Sorting Triangles', function () {

  it('Returns ordered array of triangle names', function () {
    const result = sortTriangles([{ vertices: 'TED', t: 3, e: 4, d: 5 }, { vertices: 'ABC', a: 10, b: 20, c: 22.36 }]);
    assert.deepEqual(result, [ 'ABC', 'TED' ]);
  });

  it('Test error: argument must be an array', function () {
    const result = sortTriangles('');
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Argument must be an array",
    });
  });

  it('Test error: array must have at least one triangle', function () {
    const result = sortTriangles([]);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Array must have at least one triangle",
    });
  });

  it('Test error: objects must have 4 properties', function () {
    const result = sortTriangles([{ vertices: 'TED', e: 4, d: 5 }, { vertices: 'ABC', a: 10, b: 20, c: 22.36 }]);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Objects must have 4 properties ex: { vertices: ABC, a: 1, b:2, c:3 }",
    });
  });

  it('Test error: object property vertices not found', function () {
    const result = sortTriangles([{ h: 4, t: 3, e: 4, d: 5 }, { vertices: 'ABC', a: 10, b: 20, c: 22.36 }]);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Object property vertices not found",
    });
  });

  it('Test error: sides of the triangles must be numbers and greater that 0', function () {
    const result = sortTriangles([{ vertices: 'TED', t: '3', e: 4, d: 5 }, { vertices: 'ABC', a: 10, b: 20, c: 22.36 }]);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Sides of the triangles must be numbers and greater that 0",
    });
  });

  it('Test when passing a negative value', function () {
    const result = sortTriangles([{ vertices: 'TED', t: 3, e: 4, d: 5 }, { vertices: 'ABC', a: -10, b: 20, c: 22.36 }]);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Sides of the triangles must be numbers and greater that 0",
    });
  });

  it('Test when passing a string as a value', function () {
    const result = sortTriangles([{ vertices: 'TED', t: 3, e: 4, d: 5 }, { vertices: 'ABC', a: 10, b: '20', c: 22.36 }]);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Sides of the triangles must be numbers and greater that 0",
    });
  });

  it('Test when passing undefined as a value', function () {
    const result = sortTriangles([{ vertices: 'TED', t: undefined, e: 4, d: 5 }, { vertices: 'ABC', a: 10, b: 20, c: 22.36 }]);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Sides of the triangles must be numbers and greater that 0",
    });
  });

  it('Test when passing a regular expression as a value', function () {
    const result = sortTriangles([/\s/]);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Objects must have 4 properties ex: { vertices: ABC, a: 1, b:2, c:3 }",
    });
  });
})