// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, name) {
  return drivers.filter(
    function(driverName){
      return driverName.toLowerCase() === name.toLowerCase()
    });
}
  

