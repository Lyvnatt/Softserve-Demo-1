export default function luckyTickets(obj) {
  let values = Object.values(obj);

  if (typeof obj !== "object") {
    return {
      status: "failed",
      reason: "ERROR: The argument must be an object",
    };
  } else if (Object.keys(obj).length !== 2) {
    return {
      status: "failed",
      reason:
        "ERROR: The object must have the min number and the max number of the interval to check",
    };
  } else if (typeof values[0] !== "string" || typeof values[1] !== "string") {
    return {
      status: "failed",
      reason: "ERROR: Min and Max values must be strings",
    };
  }

  let temp = values[0].split("");
  let temp2 = values[1].split("");
  let noNumbers = temp.filter(l => l.match(/[^0-9]/)).length > 0;
  let noNumbers2 = temp2.filter(l => l.match(/[^0-9]/)).length > 0;

  if (Number(temp.join("") < 0) || Number(temp2.join("") < 0)) {
    return {
      status: "failed",
      reason: "ERROR: Strings must contain positive numbers",
    };
  } else if (noNumbers || noNumbers2) {
    return {
      status: "failed",
      reason: "ERROR: Strings must contain integers",
    };
  } else if (Number(values[0]) > Number(values[1])) {
    return {
      status: "failed",
      reason: "ERROR: The max value must be higher than the min value",
    };
  }

  let luckySimple = [];
  let luckyComplicated = [];

  function simpleCheck(num) {
    if (temp.join("").length === 6 && temp2.join("").length === 6) {
      const total1 = num
        .toString()
        .slice(0, 3)
        .split("")
        .reduce((a, b) => Number(a) + Number(b));
      const total2 = num
        .toString()
        .slice(-3)
        .split("")
        .reduce((a, b) => Number(a) + Number(b));
      return total1 === total2;
    }
  }

  function complicatedCheck(num) {
    const a = num
      .toString()
      .split("")
      .map((num) => {
        return Number(num);
      });
    const even = a
      .filter((n) => n % 2 === 0)
      .reduce((a, b) => Number(a) + Number(b), 0);
    const odds = a
      .filter((n) => n % 2 === 1)
      .reduce((a, b) => Number(a) + Number(b), 0);
    return even === odds && num !== 0;
  }

  let i = Number(values[0]);
  while (i <= values[1]) {
    if (i < 10) {
      temp[5] = String(i);
    } else if (i < 100) {
      const digit1 = String(i)[0];
      const digit2 = String(i)[1];
      temp[4] = digit1;
      temp[5] = digit2;
    } else if (i < 1000) {
      const digit1 = String(i)[0];
      const digit2 = String(i)[1];
      const digit3 = String(i)[2];
      temp[3] = digit1;
      temp[4] = digit2;
      temp[5] = digit3;
    } else if (i < 10000) {
      const digit1 = String(i)[0];
      const digit2 = String(i)[1];
      const digit3 = String(i)[2];
      const digit4 = String(i)[3];
      temp[2] = digit1;
      temp[3] = digit2;
      temp[4] = digit3;
      temp[5] = digit4;
    } else if (i < 100000) {
      const digit1 = String(i)[0];
      const digit2 = String(i)[1];
      const digit3 = String(i)[2];
      const digit4 = String(i)[3];
      const digit5 = String(i)[4];
      temp[1] = digit1;
      temp[2] = digit2;
      temp[3] = digit3;
      temp[4] = digit4;
      temp[5] = digit5;
    } else if (i < 1000000) {
      const digit1 = String(i)[0];
      const digit2 = String(i)[1];
      const digit3 = String(i)[2];
      const digit4 = String(i)[3];
      const digit5 = String(i)[4];
      const digit6 = String(i)[5];
      temp[0] = digit1;
      temp[1] = digit2;
      temp[2] = digit3;
      temp[3] = digit4;
      temp[4] = digit5;
      temp[5] = digit6;
    }
    let result = simpleCheck(temp.join(""));
    if (result) {
      luckySimple.push(temp.join(""));
    }
    i++;
  }

  for (let i = Number(values[0]); i <= values[1]; i++) {
    if (complicatedCheck(i)) {
      luckyComplicated.push(i);
    }
  }

  let result =
    luckySimple.length > luckyComplicated.length
      ? {
          winningMethod: "Simple",
          Simple: luckySimple.length,
          Complicated: luckyComplicated.length,
        }
      : {
          winningMethod: "Complicated",
          Complicated: luckyComplicated.length,
          Simple: luckySimple.length,
        };
  return result;
}
