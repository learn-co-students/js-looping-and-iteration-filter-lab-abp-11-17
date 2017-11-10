// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(names, string) {
  const newCollection = [];

  for (const user of names) {
    if (user.toLowerCase() === string.toLowerCase()) {
    newCollection.push(user);
    }
  }
  return newCollection
}

function fuzzyMatch(names,string){
  const newCollection = []

  for (const user of names) {
    if (user.slice(0, string.length) === string) {
      newCollection.push(user)
    }
  }
  return newCollection
}

function matchName(names, string) {
  const newCollection = []

  for (const user of names) {
    if (user.name === string) {
      newCollection.push(user)
    }
  }
  return newCollection
}
  // In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.
