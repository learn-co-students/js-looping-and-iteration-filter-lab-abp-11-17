function findMatching(drivers, name) {
  return drivers.filter(function(driver) {return driver.toUpperCase() === name.toUpperCase()})
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {return driver.substr(0, string.length) === string})
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {return driver.name === string})
}