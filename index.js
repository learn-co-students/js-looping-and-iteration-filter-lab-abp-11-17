// Code your solution in this file

function findMatching(drivers, name) {
  let match =[];

  for (const user of drivers) {
    if (user.toUpperCase() === name.toUpperCase()) {
      match.push(user);
      //console.log (match);
    }

  }
  return match;
};

function fuzzyMatch(drivers, init) {
  let match =[];
  for (const user of drivers) {
    if (init[0] === user[0]) {
      match.push(user);

    }
  }
  //console.log(match);
  return match;
};

function matchName(drivers, checkName) {
  let match =[];
  for (const user of drivers) {
    if (user.name === checkName) {
      match.push(user);
    }
  }
  return match;
}
