// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter(function (person) {
    return person.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, str) {
  const len = str.length;
  return drivers.filter(function (person) {
    return str === person.slice(0, len);
  });
}

//below : drivers is an array of objects
function matchName (drivers, str) {
  return drivers.filter(function (person) {
    return person.name.toLowerCase() === str.toLowerCase();
  });
}
