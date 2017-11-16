// Code your solution in this file
function findMatching(drivers, name){
 return drivers.filter(function (driver) { return name.toLowerCase()===driver.toLowerCase(); });
}
function fuzzyMatch(drivers, nameBeginsWith) {
  return drivers.filter(function (driver) { return driver.startsWith(nameBeginsWith, 0); });

}
function matchName(drivers, name){
    return drivers.filter((driver) => {
      return driver.name === name
  })}
