// Code your solution in this file

// long form
// function findMatching(drivers, string){
//   let matching = [];
//     for(let i = 0; i < drivers.length; i++){
//       if (drivers[i].toLowerCase() === string.toLowerCase()){
//         matching.push(drivers[i]);
//       }
//     }
//     return matching;
// }

// shortened version using .filter()
function findMatching(drivers, string){
  return drivers.filter(function(element){ // filter() returns a new array with only those elements that are returned (in this case match the given parameters)
      if(element.toLowerCase() === string.toLowerCase()){
        return element;
      }
  })
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(element){
    if(element.substring(0, string.length) === string){ // substring returns how a segment of a string given a starting point (inclusive) and an ending point (exclusive)
      return element;
    }
  })
}

function matchName(drivers, string){
  return drivers.filter(function(element){
    if(element['name'] === string){
      return element;
    }
  })
}
