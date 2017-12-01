
function findMatching(drivers, index, name){
  let newDrivers = drivers.filter(function(drivers, index, name){
    return index === name.indexOf(drivers);
  });
}
