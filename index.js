// Code your solution in this file
function findMatching(thing, name){
  const newThing = [];
  return thing.filter(function (newThing) {
    return newThing.toLowerCase() === name.toLowerCase();
   });
  }


function fuzzyMatch(thing, letters){
  const thing2 = [];
  let nameLetters = letters.length;
  return thing.filter(function (thing2){
    return thing2.slice(0, nameLetters) === letters;
  })

}
function matchName(thing, name){
  const thing3 = [];
  return thing.filter(function (thing3) {
    return thing3.name.toLowerCase() === name.toLowerCase();
   });
}

/*This function takes an array of drivers and a string as arguments.
In this function, each element of the drivers array is a JavaScript
object that has a property of name. The function should return each
element whose name property matches the provided string argument.*/
