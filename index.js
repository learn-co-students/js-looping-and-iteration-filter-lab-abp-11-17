// Code your solution in this file
function findMatching(drivers, name){
  let matchingDrivers = drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()){
      return true
    } else {
      return false
    }
  })
  return matchingDrivers;
}

function fuzzyMatch(drivers, firstLetter){
  let wholeName = firstLetter.length;
  return drivers.filter(function(driverName){
    return driverName.slice(0, wholeName) === firstLetter;
  })
}

function matchName(driver, name){
  return driver.filter(function(list){
    return list.name.toLowerCase() === name.toLowerCase();
  })
}
