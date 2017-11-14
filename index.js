// Code your solution in this file



function findMatching (arrayOfDrivers, name) {
    let matchingDrivers = arrayOfDrivers.filter(function(driverName) {
      if (name.toLowerCase() === driverName.toLowerCase()){
        return true;
      } else {
         return false;
        }
    })
    return matchingDrivers;
}


function fuzzyMatch(drivers, letters) {
  let nameLength = letters.length;

  let fuzzyDrivers = drivers.filter(function(driverName) {
    if (letters === driverName.slice(0, nameLength)) {
        return true;
    } else {
        return false;
    }
  })
  return fuzzyDrivers;
}


function matchName(drivers, name) {
  let nameMatch = drivers.filter (function (driver){
      if (driver.name.toLowerCase() === name.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });
    return nameMatch;
}
