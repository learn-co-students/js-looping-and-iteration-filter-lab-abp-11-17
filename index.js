// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, name) {
  return drivers.filter(
    function(driverName) {
      return driverName.toLowerCase() === name.toLowerCase()
    });
}
  
function fuzzyMatch (drivers, name) {
    let lengthOfName = name.length;
      return drivers.filter(
        function (driverName) {
        return driverName.slice(0, lengthOfName) === name;
  });

}  

function matchName(drivers, name) {
  return drivers.filter(
    function(driver) {
      return driver.name.toLowerCase() === name.toLowerCase()
    });
}
