// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, string) {
  return drivers.filter(function(drivers) {
      return drivers.toLowerCase().indexOf(string.toLowerCase()) > -1;
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(el) {
      var fThree = string.substring(0,2);
      if (fThree == el.substring(0,2) ) {
        return true;
      } else {
        return false;
      }
  })
}

// filter (value, index, array)
//scope within nested vs outside
function matchName(collection, string) {
  var d2 = collection.filter(function(other) {
    debugger;
    if (other.name === string) {
      return true;
    } else {
      return false;
    }
  } ) ;
  return d2;
}

/* function callMe (collection, string) {
  debugger;
    if (collection.name === string) {
      return true;
    } else {
      return false;
    }
}
*/
