// Code your solution in this file
function findMatching(drivers, string) {
  const matchingDrivers = drivers.filter(function(name) {return name.toUpperCase() === string.toUpperCase()})
  ///console.log(matchingDrivers)
  return matchingDrivers
}

function fuzzyMatch(drivers, string) {
  let driverFuzzyMatch = []
  /*
  console.log(drivers)
  console.log(drivers[0])
  console.log(drivers[0][0])
  debugger;
  */

  for (const name of drivers) {
    const nameSlice = name.slice(0,string.length)
    /*
    console.log(name)
    console.log(nameSlice)
    console.log(string)
    debugger;
    */

    if (nameSlice === string) {
      driverFuzzyMatch.push(name)
      console.log(driverFuzzyMatch)
    }
    ///debugger;
  }
  ///console.log(driverFuzzyMatch)
  ///debugger;
  return driverFuzzyMatch
}


function matchName(drivers, string) {
  const driverMatch = []
  for (const user of drivers) {
    if (user.name === string) {
      driverMatch.push(user)
    }
  }
  ///console.log(driverMatch)
  ///debugger;
  return driverMatch
}
