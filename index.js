
function findMatching (drivers, name) {
   return drivers.filter(function(driver){
    return name.toLowerCase() === driver.toLowerCase();
  });
}


function fuzzyMatch(drivers, name){
  return drivers.filter(function(driver){
    return name.charAt(0) === driver.charAt(0);
  });
}


function matchName(drivers, name){
  return drivers.filter(function(driver){
    return name.toLowerCase() === driver.name.toLowerCase();
  })
}
