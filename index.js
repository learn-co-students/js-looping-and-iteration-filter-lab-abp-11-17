// Code your solution in this file


function findMatching(drivers, string) {

  for (var i = 0; i < drivers.length; i++) {
    let matchedDrivers = [];
    if (drivers[i]==string) {

      matchedDrivers.push(drivers[i]);
    }
    return matchedDrivers;
  }
  /*return drivers.filter(function (){

  });*/
}

function fuzzyMatch(drivers, string) {


}


function matchName(drivers, string) {

}
