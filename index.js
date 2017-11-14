// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(element) {
    return element.toUpperCase() === string.toUpperCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(element) {
    return element.startsWith(string);
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(element) {
    return element.name === string;
  });
}
