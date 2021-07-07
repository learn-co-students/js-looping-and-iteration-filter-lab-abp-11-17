// Code your solution in this file

function findMatching(drivers, string){
  let matching = [];
  for (const element of drivers){
    if (element.toLowerCase() === string.toLowerCase()){
      matching.push(element);
    }
  }
  return matching;
}

function fuzzyMatch(drivers, string){
  let matching = [];
  for (const element of drivers){
    if (element.toLowerCase().slice(0,string.length) === string.toLowerCase()){
      matching.push(element);
    }
  }
  return matching;
}

function matchName(drivers, string){
  let matching = [];
  for (const element of drivers){
    if (element.name.toLowerCase() === string.toLowerCase()){
      matching.push(element);
    }
  }
  return matching;
}
