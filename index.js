// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function(name) {
    return name.toUpperCase() === string.toUpperCase();
  });
}

function fuzzyMatch(drivers, string) {
  let nameSize = string.length;
  return drivers.filter(function(name) {
    return name.slice(0,nameSize) === string;
  });
}

function matchName(drivers, search){
  return drivers.filter(function(check) {
    return check.name === search;
  });
}
