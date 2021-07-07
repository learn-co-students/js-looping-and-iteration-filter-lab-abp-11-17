// Code your solution in this file

function findMatching(drivers, name){
  let matchingDrivers = drivers.filter(function(driver){
    if(name.toLowerCase() === driver.toLowerCase()){
      return true
    } else{
      return false
    }
  });

  return matchingDrivers;
}

function fuzzyMatch(drivers, name){
  let matchingDrivers = drivers.filter(function(driver){
    if(name === driver.slice(0, name.length)){
      return true;
    } else {
      return false;
    }
  });
  return matchingDrivers;
}

function matchName(drivers, name){
  let matchingDrivers = drivers.filter(function(driver){
    if(name === driver.name){
      return true;
    } else {
      return false;
    }
  });
  return matchingDrivers;
}
