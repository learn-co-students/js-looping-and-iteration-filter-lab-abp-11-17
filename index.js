// Code your solution in this file
function findMatching(arr, str){
  return arr.filter(function (element) {return element.toLowerCase() === str.toLowerCase()})
}

function fuzzyMatch(arr, str){
  return arr.filter(function (element) {return element.startsWith(str)})
}

function matchName(arr, str){
  return arr.filter(function(element) {return element.name === str})
}
