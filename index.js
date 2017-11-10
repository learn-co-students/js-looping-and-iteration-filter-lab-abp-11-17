// Code your solution in this file
//const drivers;

function findMatching (drivers, string) {
  let array = [];
  drivers.forEach(function(val) {
    if (val.toLowerCase() === string.toLowerCase()) {
      array.push(val);
    }
  });
  return array;
}

function fuzzyMatch (drivers, string) {
  let array = [];
  drivers.forEach(function(val) {
    if (val.slice(0, string.length) === string) {
      array.push(val);
    }
  });
  return array;
}

function matchName (drivers, string) {
  let array = [];
  drivers.forEach(function(val) {
    if (val.name === string) {
      array.push(val);
    }
  });
  return array;
}
