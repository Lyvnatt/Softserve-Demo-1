import chai from 'chai';
import chessBoard from '../src/task1.js';

const assert = chai.assert;
const expect = chai.expect;
// const should = chai.should();

describe('Testing Chessboard', function () {

  it('Returns a string with the chessboard', function () {
    const result = chessBoard(4,7,'O');
    assert.equal(result, 'O O O O\n O O O \nO O O O\n O O O ');
  });

  it('Tests error: three parameters are required', function () {
    const result = chessBoard(null,7,'R');
    expect(result).to.include({
    status: "failed",
    reason: "ERROR: Three parameters are required: length, width, and a character to display",
  });
  })

  it('Tests error: length and width must be an integer', function () {
    const result = chessBoard(1.5,7,"S");
    expect(result).to.include({ 
    status: "failed", 
    reason: "ERROR: Length and width must be an integer" });
  })

  it('Tests error: character to display must be a string', function () {
    const result = chessBoard(4,5,true);
    expect(result).to.include({ 
    status: "failed", 
    reason: "ERROR: The character to display must be a string" });
  })

  it('Tests when passing no arguments', function () {
    const result = chessBoard();
    expect(result).to.include({ 
    status: "failed", 
    reason: "ERROR: Three parameters are required: length, width, and a character to display" });
  })

  it('Tests when passing a negative number', function () {
    const result = chessBoard(4,-7,"T");
    expect(result).to.include({ 
    status: "failed", 
    reason: "ERROR: Length and width must be greater than 0" });
  })

  it('Tests when passing "true" as a character to display', function () {
    const result = chessBoard(4,5,true);
    expect(result).to.include({ 
    status: "failed", 
    reason: "ERROR: The character to display must be a string" });
  })

  it('Tests when passing an array as the length', function () {
    const result = chessBoard([1, 2],2,"Y");
    expect(result).to.include({ 
    status: "failed", 
    reason: "ERROR: Length and width must be an integer" });
  })

  it('Tests when passing a number as the character to display', function () {
    const result = chessBoard(4,7,5);
    expect(result).to.include({ 
    status: "failed", 
    reason: "ERROR: The character to display must be a string" });
  })

  it('Tests when passing a regular expression as the width', function () {
    const result = chessBoard(4,/\s/,"X");
    expect(result).to.include({ 
    status: "failed", 
    reason: "ERROR: Length and width must be an integer" });
  })
});