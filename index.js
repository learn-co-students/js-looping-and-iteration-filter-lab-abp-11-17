function findMatching(drivers, name){
  return drivers.filter(elem => elem.toLowerCase() == name.toLowerCase() )
 }

function fuzzyMatch(drivers, search){
 return drivers.filter(elem => elem.indexOf(search) === 0 )
}

function matchName(drivers, name){
return drivers.filter(elem=> elem.name != undefined && elem.name == name)
}
