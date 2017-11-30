// Code your solution in this file
function findMatching(drivers, name){
  let match = drivers.filter(function(n) {
    return n.toLowerCase() == name.toLowerCase()
  })
  return match
}

function fuzzyMatch(drivers, name){
  let match = drivers.filter(function(n) {
    let m = n
    let length = name.length
    return m.slice(0, length) == name
  })
  return match
}

function matchName(drivers, name){
  let match = drivers.filter(function(n) {
    return n.name == name
  })
  return match
}
