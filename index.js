function findMatching(drivers, name){
  let matchingDrivers = drivers.filter(function(driver){
    if(name.toLowerCase() === driver.toLowerCase()){
      return true
    }else{
      return false
    }
  })
  return matchingDrivers
}// Code your solution in this file

// let arr = ["Hello","World"]
// let noMatches = arr.filter(function(word){
//   return word === "Avi"
// })
