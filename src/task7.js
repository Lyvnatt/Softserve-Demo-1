export default function fibonacciSeq (value) {
  if (typeof value !== 'number' && typeof value !== 'object') {
    return {
      status: "failed",
      reason: "ERROR: The value must be a number or an object with the minimun and maximun values of a range",
    };
  } 
  
  function formula(n) {
    if (n <= 1) return n;
    let result = formula(n-1) + formula(n-2);
    return result;
  }

  let sequence = [];

  if (typeof value === 'number') {
    if (value <= 0) {
      return {
        status: "failed",
        reason: "ERROR: The value must be greater than 0",
      };
    } else if (!Number.isInteger(value)) {
      return { 
        status: "failed", 
        reason: "ERROR: The value must be an integer" 
      };
    }

    if (value === 1) return [0];

    for(let i= 0; sequence.length < value; i++) {
      if (formula(i).toString().length) { 
        sequence.push(formula(i));
      }
    }
    return sequence;
  }

  if (typeof value === 'object') {
    if (value === null || Array.isArray(value)) {
      return {
        status: "failed",
        reason: "ERROR: Arrays or Null are not allowed",
      };
    } else if (Object.keys(value).length !== 2 || !Number.isInteger(Object.values(value)[0]) || !Number.isInteger(Object.values(value)[1])) {
      return { 
        status: 'failed', 
        reason: 'ERROR: The object must have the min and max fields and they must be integers' 
      }
    } else if (Object.values(value)[0] < 0 || Object.values(value)[1] < 0) {
      return { 
        status: 'failed', 
        reason: 'ERROR: Values must be equal or greater than 0' 
      }
    }

    for(let i = 0; formula(i) <= Object.values(value)[1]; i++) {
      if (formula(i) >= Object.values(value)[0]) {
        sequence.push(formula(i));
      }
    }
    return sequence;
  } 
}
