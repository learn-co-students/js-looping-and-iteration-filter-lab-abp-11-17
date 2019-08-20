function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  })
};

function fuzzyMatch (drivers, name) {
  return drivers.filter (function (driver) {
    if  (driver.charAt(0) === name.charAt(0) && driver.charAt(1) === name.charAt(1)){
      return driver;
    } else {
        return false;
      }
    }
  )
};

function matchName(drivers, name) {
  return drivers.filter (function (driver) {
    if (driver.name === name) {
      return driver;
    } else {
      false;
    }
  })
};
