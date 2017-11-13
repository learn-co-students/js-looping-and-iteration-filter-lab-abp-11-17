// Code your solution in this file


function findMatching(drivers, name) {
  return drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()){
      return true
    }
    else {
      return false
    }
  })
}

function fuzzyMatch(drivers, fLetters) {
  let lengthOfName = fLetters.length;
  return drivers.filter(function(name){
    return name.slice(0, lengthOfName) === fLetters;
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driver){
      return driver.name === name
  })
}
