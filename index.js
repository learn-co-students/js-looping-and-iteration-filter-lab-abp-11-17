// Code your solution in this file
function findMatching(drivers, string){
  let newDrivers = drivers.filter(function(driver){
    return driver.toUpperCase()===string.toUpperCase();});
  return newDrivers;
}
function fuzzyMatch (drivers,string){
  let newDrivers = drivers.filter(function (driver){
    return string.indexOf(driver[0],0)!==-1;});
  return newDrivers;
}
function matchName(drivers,string){
  let newDrivers = drivers.filter(function(driver){return driver.name===string;});
  return newDrivers;
}
