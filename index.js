function findMatching (drivers, string) {
  const matchingDrivers = drivers.filter( function(driver) { return driver.toLowerCase() === string.toLowerCase() } );
  return matchingDrivers;
}

function fuzzyMatch (drivers, string) {
  const matchingDrivers = drivers.filter( function(driver) { if (driver[0] + driver[1] === string) { return driver}});
  return matchingDrivers;
}

function matchName (drivers, string) {
  const matchingNames = drivers.filter ( function(driver) { return driver.name === string});
  return matchingNames;
}
