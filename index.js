// Code your solution in this file
function findMatching(drivers, string) {
 return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch(drivers , string) {
  return drivers.filter(function (letterMatch){
    return letterMatch.charAt(0) === string.charAt(0);
  })
}

function matchName(drivers, string) {
 return drivers.filter(function(pablo) {
    return pablo.name === string;
  });
}
