function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()){
      return true
    } else {
      return false
    }
  })
  return matchingDrivers
}

function fuzzyMatch(drivers, letters) {
  let lengthOfLetters = letters.length;
  return drivers.filter(function(name) {
    return name.slice(0, lengthOfLetters) === letters
  })
}




function matchName(drivers, name) {
  return drivers.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
