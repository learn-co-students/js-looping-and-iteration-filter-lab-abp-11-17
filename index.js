function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
  return matchingDrivers;
}

function fuzzyMatch(drivers, string){
  let matchingDrivers = drivers.filter(function(driver){
      return driver.substring(0, string.length) === string;
    });
  return matchingDrivers;
}

function matchName(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver) {
    for(let match in driver){
    return driver[match] === name;
    }
  });
  return matchingDrivers;
}
