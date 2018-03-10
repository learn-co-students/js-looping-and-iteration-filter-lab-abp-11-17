// Code your solution in this file
 function findMatching(drivers, string) {
   const matchingDrivers = drivers.filter(function(driver) {
     return driver.toLowerCase() === string.toLowerCase()
   })
     return matchingDrivers
   }


  function fuzzyMatch(drivers, string) {
    const stringLength = string.length
    const sortaMatch = drivers.filter(function(driver) {
      return driver.slice(0, stringLength) === string
   })
   return sortaMatch
  }

  function matchName(drivers, string) {
    const nameMatch = drivers.filter(function(driver) {
      return driver['name'] === string
    })
    return nameMatch
  }
