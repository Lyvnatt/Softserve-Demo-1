export default function sortTriangles(array) {
  if (!Array.isArray(array)) {
    return { status: 'failed', reason: 'ERROR: Argument must be an array' }
  } else if (array.length <= 0) {
    return { status: 'failed', reason: 'ERROR: Array must have at least one triangle' }
  }

  const objectLenght = array.every(e => { return Object.keys(e).length === 4 });
  if (!objectLenght) {
    return { status: 'failed', reason: 'ERROR: Objects must have 4 properties ex: { vertices: ABC, a: 1, b:2, c:3 }' }
  }

  const verticesProp = array.every(e => { return e.vertices });
  if (!verticesProp) {
    return { status: 'failed', reason: 'ERROR: Object property vertices not found' }
  }
  
  const sidesAreNumber = array.every(e => {
    const temp = Object.values(e);
    return (typeof temp[1] === 'number' && temp[1] > 0) 
    && (typeof temp[2] === 'number' && temp[2] > 0) 
    && (typeof temp[3] === 'number' && temp[3] > 0);
  });
  if (!sidesAreNumber) {
    return { status: 'failed', reason: 'ERROR: Sides of the triangles must be numbers and greater that 0' }
  }

  const areas = [];
  const names = [];
  array.forEach(element => {
    const temp = Object.values(element);
    const s = (temp[1] + temp[2] + temp[3]) / 2;
    const a = Math.sqrt(s * (s - temp[1]) * (s - temp[2]) * (s - temp[3]));
    areas.push({ area: a, name: temp[0] });
  });

  const orderedAreas = areas.sort((a, b) => b.area - a.area);
  orderedAreas.forEach(element => {
    names.push(element.name);
  })
  return names;
};