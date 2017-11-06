// Code your solution in this file
function findMatching(drivers,string) {
  let ans = [];
  for (const name of drivers) {
    if (name.toUpperCase() === string.toUpperCase()) {
      ans.push(name);
    }
  }
  return ans;
}

function fuzzyMatch(drivers,string) {
  let ans = [];
  let length = string.length;
  for (const name of drivers) {
    if (name.slice(0, length) === string) {
      ans.push(name);
    }
  }
  return ans;
}

function matchName(drivers,string) {
  let ans = [];
  for (const obj of drivers) {
    if (obj.name === string) {
      ans.push(obj);
    }
  }
  return ans;
}
