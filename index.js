function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// function fuzzyMatch(drivers, partialName) {
//   const result = [];
//   for (const driverName of drivers) {
//     let nameChars = '';
//     for (const ch of driverName) {
//       nameChars += ch;
//       if (nameChars === partialName) {
//         result.push(driverName);
//       }
//     }
//   }
//   return result;
// }

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.slice(0, name.length) === name);
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
