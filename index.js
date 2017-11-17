// Code your solution in this file
//F1
function findMatching(drivers, name){
let matchingDrivers = drivers.filter(function(driver){
  if(name.toLowerCase() === driver.toLowerCase()){
    return true
  }
  else {
    return false
  }
})
return matchingDrivers
}

//F2
function fuzzyMatch(drivers, initials){
let matchingInitials = drivers.filter(function(driver){
  if(initials[0,1] === driver[0,1]){
    return true
  }
  else {
    return false
  }
})
return matchingInitials
};
//F3
function matchName(list, name){
  return list.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();});
}
