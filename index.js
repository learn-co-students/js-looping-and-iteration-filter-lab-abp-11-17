// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driverName) {
    return driverName[0] === string[0];
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}
