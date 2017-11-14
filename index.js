// Code your solution in this file
function findMatching(list, name){
  return list.filter(function(driver){
    if (driver.toLowerCase() === name.toLowerCase()){
     return driver
    }
  })
}

function fuzzyMatch(list, letters){
  let sliceNum = letters.length
  return list.filter(function(driverName){
    if (driverName.slice(0, sliceNum) === letters){
      return driverName
    }
  })
}

function matchName(list, name){
  return list.filter(function(driver){
    if (name === driver.name){
      return driver
    }
  })
}
