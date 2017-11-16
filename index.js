function findMatching (driverArray, name) {
  return driverArray.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(driverArray, partialName) {
  let nameLength = partialName.length;
  return driverArray.filter(function (driverName) {
    return driverName.slice(0, nameLength) === partialName;
  });

}

function matchName (driverArray, name) {
  return driverArray.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  }); 
}