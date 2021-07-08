// Code your solution in this file
function findMatching(drivers,string) {
  return drivers.filter(function (e) {
    return e === string || e.toLowerCase() === string.toLowerCase()

  })

}
function fuzzyMatch(drivers,string) {
  return drivers.filter(function(e){
    return e[0] === string[0];
  })

}
function matchName(drivers,string) {
  return drivers.filter(function (e) {
    return e.name === string;

  })

}
