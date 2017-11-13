// Code your solution in this file
function findMatching(drivers, string) {
  let matchingDrivers = drivers.filter(function(name) {
    return name.toUpperCase() === string.toUpperCase();
  })
  return matchingDrivers
}

function fuzzyMatch(drivers, letter) {
  let matchingFirstLetter = drivers.filter(function(name) {
    return name.startsWith(letter);
  })
return matchingFirstLetter
}


// function matchName(drivers, string) {
//   let matchingNames = drivers.filter(function(drivername) {
//     return drivers["name"] === string;
//   })
// return matchingNames;
// }

function matchName(drivers, string) {
  let matchedNames = drivers.filter(function(driver){
      // return drivers["name"] === drivername;
      return driver["name"].toUpperCase() === string.toUpperCase();
    });
return matchedNames;
}
