// Code your solution in this file
function findMatching(arr, name) {
    return arr.filter(function(x) {
      return x.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(arr, matchTo) {
  return arr.filter(function(x) {
    const matchLength = matchTo.length;
    if(x.slice(0, matchLength) === matchTo) {
      return x;
    }
  })
}

function matchName(arr, name) {
  return arr.filter(function(x) {
    for(const key in x) {
      console.log(key);
      if(x[key] === name) {
        return x;
      }
    }
  })
}
