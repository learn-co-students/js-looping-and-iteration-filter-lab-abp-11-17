// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, name) {
  let matchingDrivers = drivers.filter(function(driver){
    if(name.toLowerCase() === driver.toLowerCase()) {
      return true
    } else {
      return false
    }
  })
  return matchingDrivers;
}

function fuzzyMatch (drivers, partialName) {
  let lengthOfName = partialName.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  })
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
