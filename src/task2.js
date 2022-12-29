export default function encloseEnv (obj1) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return { status: 'failed', reason: 'ERROR: Arguments must be two objects' }
  } else if (Object.keys(obj1).length !== 2 || Object.keys(obj2).length !== 2) {
    return { status: 'failed', reason: 'ERROR: Each object must have two sides' }
  } 

  let obj1Arr = Object.values(obj1);
  let obj2Arr = Object.values(obj2);

  if (typeof obj1Arr[0] !== 'number' || typeof obj1Arr[1] !== 'number'
    || typeof obj2Arr[0] !== 'number' || typeof obj2Arr[1] !== 'number') {
    return { status: 'failed', reason: 'ERROR: Sides of the envelopes must be numbers' }
  } else if (obj1Arr[0] < 0 || obj1Arr[1] < 0 || obj2Arr[0] < 0 || obj2Arr[1] < 0) {
    return { status: 'failed', reason: 'ERROR: The values must be possitive numbers' }
  }

  if (obj1Arr[0] > obj2Arr[0] && obj1Arr[1] > obj2Arr[1]) {
    return '1';
  } else if (obj2Arr[0] > obj1Arr[0] && obj2Arr[1] > obj1Arr[1]) {
    return '2';
  } else {
    return '0';
  }
}
