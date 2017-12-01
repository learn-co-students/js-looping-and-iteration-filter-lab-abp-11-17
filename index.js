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

function fuzzyMatch(drivers, name){
  let matchingFirstLetters = drivers.filter(function(driver){
    if (name[0,1] === driver[0,1]){
      return true
    } else {
      return false
    }
  })
  return matchingFirstLetters
}

function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
  
}
