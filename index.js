// Code your solution in this file

function findMatching(drivers, name){
  let matchingDrivers = drivers.filter(function(driver){
    if (driver.toLowerCase() === name.toLowerCase()){
      return true
    } else {
      return false
    }
  })
  return matchingDrivers
}

function fuzzyMatch(drivers, name) {
  let matchingDrivers2 = drivers.filter(function(driver){
    if (driver.charAt(0) === name.charAt(0)){
      return true
    } else {
      return false
    }
  })
  return matchingDrivers2
}

function matchName(list, name){
  return list.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
