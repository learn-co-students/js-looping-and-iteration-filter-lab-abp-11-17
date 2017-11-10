// Code your solution in this file

/* This function takes an array of drivers and a
string as arguments, and returns the matching list
 of drivers. The function should be case insensitive.*/
function findMatching(drivers, str) {
  let out = [];
  for (let i = 0, len = drivers.length; i < len; i++) {
    if (drivers[i].toUpperCase() === str.toUpperCase()) {
      out.push(drivers[i]);
    }
  }

  return out;
}

/* This function takes an array of drivers and a string
as arguments for querying the array, and returns all drivers
whose names begin with the provided letters */
function fuzzyMatch(drivers, str) {
  let out = [];
  for (let i = 0, len = drivers.length; i < len; i++) {
    if (drivers[i][0].toUpperCase() === str[0].toUpperCase()) {
      out.push(drivers[i]);
    }
  }

  return out;
}

/* This function takes an array of drivers and a string as
arguments. In this function, each element of the drivers
array is a JavaScript object that has a property of name.
The function should return each element whose name property
matches the provided string argument. */
function matchName(drivers, str) {
  let out = [];
  for (let i = 0, len = drivers.length; i < len; i++) {
    if (drivers[i].name.toUpperCase() === str.toUpperCase()) {
      out.push(drivers[i]);
    }
  }

  return out;
}
