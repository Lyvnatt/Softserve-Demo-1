import chai from "chai";
import luckyTickets from "../src/task5.js";

const assert = chai.assert;
const expect = chai.expect;
// const should = chai.should();

describe("Testing Lucky Tickets", function () {
  it("Returns an object with the winning method and the number of lucky tickets for each method", function () {
    const result = luckyTickets({ min: "000000", max: "999999" });
    expect(result).to.include({
      winningMethod: "Simple",
      Simple: 55252,
      Complicated: 25080,
    });
  });

  it("Tests error: argument must be an object", function () {
    const result = luckyTickets("hi");
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: The argument must be an object",
    });
  });

  it("Tests error: object must have the min number and the max number", function () {
    const result = luckyTickets({ max: "999999" });
    expect(result).to.include({
      status: "failed",
      reason:
        "ERROR: The object must have the min number and the max number of the interval to check",
    });
  });

  it("Tests error: sin and Max values must be strings", function () {
    const result = luckyTickets({ min: '000000', max: 999999 });
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Min and Max values must be strings",
    });
  });

  it('Tests error: strings must contain positive numbers', function () {
    const result = luckyTickets({ min: '-10000', max: '999999' });
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Strings must contain positive numbers",
    });
  });

  it('Tests error: strings must contain integers', function () {
    const result = luckyTickets({ min: '100000', max: '9999.9' });
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Strings must contain integers",
    });
  });

  it('Tests error: max value must be higher than min value', function () {
    const result = luckyTickets({ min: '100000', max: '99999' });
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: The max value must be higher than the min value",
    });
  });

  it('Tests passing undefined as a value', function () {
    const result = luckyTickets({ min: undefined, max: '999999' });
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Min and Max values must be strings",
    });
  });

  it('Tests when passing regular expressions as arguments', function () {
    const result = luckyTickets(/\s/, /\s/);
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: The object must have the min number and the max number of the interval to check",
    });
  });

  it('Tests when passing regular expressions as values', function () {
    const result = luckyTickets({ min: /\s/, max: '999999' });
    expect(result).to.include({
      status: "failed",
      reason: "ERROR: Min and Max values must be strings",
    });
  });
});
