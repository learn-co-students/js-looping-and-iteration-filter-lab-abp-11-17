// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function(word){
   return word.toLowerCase() === string.toLowerCase()
  })
}


function fuzzyMatch(drivers, string){
  return drivers.filter(function(driver){
    return driver.indexOf(string) == 0
  })
}

function matchName(drivers,string){
  return drivers.filter(function(driver){
    return driver.name === string
  })
}
