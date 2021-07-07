// Code your solution in this file

function findMatching (drivers, name) {
  let matchingDrivers = drivers.filter(function(driver){
    if (name === driver) {
      return true;
    } else if (name.toLowerCase() === driver) {
      return true;
    } else if (name.toUpperCase() === driver) {
      return true;
    } else {
      return false;
    }
  })
  return matchingDrivers;
}

function fuzzyMatch (drivers, letters) {
  let matchingDrivers = drivers.filter(function(driver){
    if (letters === driver.slice(0,2)) {
      return true;
    } else {
      return false;
    }
  })
  return matchingDrivers;
}

function matchName (drivers, name) {
  let matchingDrivers = [];
  for (const driver of drivers) {
    if (driver.name === name) {
      matchingDrivers.push(driver)
    }
  }
  return matchingDrivers;
}
