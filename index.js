// Code your solution in this file
  function findMatching (drivers, string) {
    return drivers.filter(function (element) {
      return element.toLowerCase() === string.toLowerCase();
    });
  }

function fuzzyMatch(list, partialName) {
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
