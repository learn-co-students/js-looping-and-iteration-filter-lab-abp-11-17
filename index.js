// Code your solution in this file

function findMatching(drivers, string) {
  let findMatched = drivers.filter(function(drivers) {
    if (drivers.toLowerCase() === string.toLowerCase()) {
      return string;
    }
  });
  return findMatched;
}

function fuzzyMatch(drivers, string) {
  let fuzzyMatched = drivers.filter(function(drivers) {
    if (drivers.slice(0, string.length) === string){
      return drivers;
    }
  });
  return fuzzyMatched;
}


function matchName(drivers, string) {
  let matchedName = drivers.filter(function (drivers) {
    if (drivers.name === string) {
      return string;
    }
  });
  return matchedName;
}
