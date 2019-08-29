// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()){
      return true
    } else {
      return false
    }
  })

  return matchingDrivers;
}

function fuzzyMatch(drivers, name) {
  let fuzzyDrivers = drivers.filter(function(driver){
    if (name[0] === driver[0]) {
      return true
    } else {
      return false
    }
  })

  return fuzzyDrivers
}

function matchName(drivers, name) {
  let exactMatches = drivers.filter(function(driver){
    if (driver.name.toLowerCase() === name.toLowerCase()) {
      return true
    } else {
      return false
    }
  })

  return exactMatches
}
