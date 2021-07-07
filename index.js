// Code your solution in this file
function findMatching(drivers,name) {
  let results  = []
  for (const element of drivers) {
    if (element.toUpperCase() == name.toUpperCase()) {
    results.push(element)
    }
  }
  return results
}

function fuzzyMatch(drivers,letters) {
  return drivers.filter(function(el) {
    return el.toLowerCase().indexOf(letters.toLowerCase()) > -1 &&
      el.toLowerCase().indexOf(letters.toLowerCase()) < letters.length;
  })
}

function matchName (collection, searcher) {
  const newCollection = [];

  for (const user of collection) {
    if (user.name == searcher) {
      newCollection.push(user);
    }
  }

  return newCollection;
}
