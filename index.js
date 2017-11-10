// Code your solution in this file
function findMatching(drivers, string) {
  // console.log(string);
  // console.log(drivers);
  return drivers.filter(function (key) { return key.toLowerCase() == string.toLowerCase()});
  // console.log(drivers);
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (key) { return key.startsWith(string)});
}

function matchName(drivers, string){
  console.log(string);
  console.log(drivers);
  console.log(drivers.string);
  return drivers.filter(function (num) {
    return num.name == string;
  })
}
