// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()) {
      return true
    }
    else{
      return false
    }
  })
};

function fuzzyMatch(drivers, name){
  return drivers.filter(function(driver){
    if (name.charAt(0) === driver.charAt(0)){
      return true
    }
    else return false
  })
};
