// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(i) {
    return i.toLowerCase() === name.toLowerCase();});
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function(i) { return i[0] === name[0]});
}

function matchName(drivers, string) {
  return drivers.filter(function(i) { return i.name === string});
}
