// drivers.filter(findMatching(driver,name){
// let driver=driver.toUpperCase();
// let name=name.toUpperCase();
// if (driver===name){
  // return true};
// });

function findMatching(drivers,name){

  let matchingDrivers= drivers.filter(function(driver){
    if (driver.toUpperCase() === name.toUpperCase()){
      return true
    } else {
      return false
    }
  })
  return matchingDrivers;
}

function fuzzyMatch(drivers, string){
  let myMatchingDrivers = drivers.filter(function(driver){
    let str=string.length;
    let myStr=driver.slice(0,(str));
    if (myStr.toUpperCase() === string.toUpperCase()) {
      return true
    } else {
      return false
    }
  })
  return myMatchingDrivers;
}

function matchName(drivers,string){
  let matchedDrivers=drivers.filter(function (driver){
    if (driver.name === string){
      return true
    }
    else {
      return false
    }
  })
  return matchedDrivers;
}
