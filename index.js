//Code Here
function findMatching(drivers, string){
  //Declare an array called 'matchingDrivers' that is built by filtering the originally passed in 'drivers' array.
  let matchingDrivers=drivers.filter(function(driver){
    return driver.toLowerCase()==string.toLowerCase()
  })
  return matchingDrivers
}

function fuzzyMatch(drivers, string){
  let matchingDrivers= drivers.filter(function(driver){
    return driver.slice(0,string.length)===string
  })
  return matchingDrivers
}

function matchName(drivers, string){
  let matchingDrivers=drivers.filter(function(driver){
    return driver.name==string
  })
  return matchingDrivers;
}
