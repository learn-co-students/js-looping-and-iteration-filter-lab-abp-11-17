function findMatching(driversArray, myString){
  return driversArray.filter(function(value){
    value = value.toUpperCase();
    myString = myString.toUpperCase();
    return value === myString}
  )
}

function fuzzyMatch(driversArray, myString){
  return driversArray.filter(function(value){
    let firstLetterValue = value[0].toUpperCase();
    let firstLetterMyString = myString[0].toUpperCase();
    return firstLetterMyString === firstLetterValue
  })
}

function matchName(drivers, string){
  return drivers.filter(function(value){
    return value.name === string
  })
}
