// Code your solution in this file
//function findMatching(drivers, name){
  //let matchingDrivers = drivers.filter(function(driver){
    //if (name.toLowerCase() === driver.toLowerCase()){
      //return true
    //} else {
      //return false
    //}
  //})
  //return matchingDrivers;
//}

function findMatching(drivers, string){
  let matchingDrivers = drivers.filter(function(driver){
    if (string.toLowerCase() === driver.toLowerCase()){
      return true
    } else {
      return false
    }
  })
  return matchingDrivers;
  }

function fuzzyMatch(drivers, initial){
  let fuzzyMatch = drivers.filter(function(driver){
    if (initial.charAt(0,1) === driver.charAt(0,1)){
      return true
    } else {
      return false
    }
  })
  return fuzzyMatch
}


//drivers  === [{name: Bobby, hometown:Pittsburgh},{name:Bobby,hometown:Tenafly}]
function matchName (drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  })
}
