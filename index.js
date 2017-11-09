// Code your solution in this file
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,string) {
  let newDrivers=drivers.filter(function (name) {
    return name.toUpperCase()===string.toUpperCase();
  })
  return newDrivers;
}

function fuzzyMatch(drivers,string){
  let newArray=drivers.filter(function (name) {
  let counter=0;
  for(let i=0;i<string.length;i++){
      if(name[i]===string[i]){
        counter++;
      }
    }
  if(counter===string.length){
      return name;
    }
  })
  return newArray;
}

function matchName(drivers,string){
  let newerDrivers=drivers.filter(function (name) {
    return name["name"]===string;
  })
  return newerDrivers;
}
