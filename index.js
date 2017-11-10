// Code your solution in this file
function findMatching(drivers,string) {
  return drivers.filter(function (driva) {return driva.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers,string) {
  let neww = string.length
  return drivers.filter(function (letta) { return letta.slice(0,neww) === string})
}

function matchName(drivers,string) {
  return drivers.filter(function(findName) { return findName.name === string})

}
