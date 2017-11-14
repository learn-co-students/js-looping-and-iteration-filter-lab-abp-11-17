// Code your solution in this file

//This function takes an array of drivers and a string as arguments,
//and returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, name){
  return drivers.filter (function (matchedDrivers){
  return matchedDrivers.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
