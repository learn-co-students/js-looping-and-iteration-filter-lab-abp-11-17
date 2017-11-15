
//returns all drivers that match the passed in name


//ePenguinUsers = filter(users, function (user) { return user.favoriteColor === 'Blue' && user.favoriteAnimal === 'Penguin';
function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver){
     if (name.toLowerCase() === driver.toLowerCase()){
       return true
     } else {
       return false
     }
})

return matchingDrivers;
}



function fuzzyMatch(drivers, name) {

  let firstLetters = drivers.filter(function(driver){
    if(name[0].toLowerCase() === driver[0].toLowerCase()){
      return true
    } else {
      return false
    }


})

return firstLetters;
}

function matchName(drivers, name) {
  return drivers.filter(function(driver){
    return name === driver.name



  })
  
}
