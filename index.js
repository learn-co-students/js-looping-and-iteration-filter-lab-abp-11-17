// Code your solution in this file
function findMatching(drivers, name){
  let matchingDrivers=drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()){
      return true;
    } else {
      return false;
    }
  });
  return matchingDrivers;
}
function fuzzyMatch(drivers, firstLetters){
  let matchingDrivers=drivers.filter(function(driver){
    if(firstLetters.toLowerCase()===driver.slice(0, firstLetters.length).toLowerCase()){
      return true;
    } else {
      return false;
    }
  });
  return matchingDrivers;
}
function matchName(drivers, name){
  let matchingDrivers=[];
  for(const driver of drivers){
    if (driver.name === name){
      matchingDrivers.push(driver);
    }
  }
  return matchingDrivers;
}
