export default function chessBoard(length, width, char) {
  if (!length || !width || !char) {
    return {
      status: "failed",
      reason: "ERROR: Three parameters are required: length, width, and a character to display",
    };
  } else if (!Number.isInteger(length) || !Number.isInteger(width)) {
    return { 
      status: "failed", 
      reason: "ERROR: Length and width must be an integer" 
    };
  } else if (length < 0 || width < 0) {
    return {
      status: "failed",
      reason: "ERROR: Length and width must be greater than 0",
    };
  } else if (typeof char !== "string") {
    return {
      status: "failed",
      reason: "ERROR: The character to display must be a string",
    };
  } 
  
  let board = "";

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < width; col++) {
      board += (col + row) % 2 === 0 ? char : " ";
    }
    if (row !== length - 1) {
      board += "\n";
    }
  }
  return board; 
}
