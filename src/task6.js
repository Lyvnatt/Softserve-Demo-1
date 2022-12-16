export default function numericSequence (length, min) {
  if (!length || !min) {
    return {
      status: "failed",
      reason: "ERROR: Two parameters are required: length and the value of the minimum square",
    };
  } else if (!Number.isInteger(length) || !Number.isInteger(min)) {
    return { 
      status: "failed", 
      reason: "ERROR: Length and min must be an integer" };
  } else if (length < 0 || min < 0) {
    return {
      status: "failed",
      reason: "ERROR: Length and width must be greater than 0",
    };
  }

  const result = [];

  for (let i = 0; result.length < length; i++) {
    if (i * i >= min) result.push(i);
  }

  return result.join();
}
