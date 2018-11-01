function findMatching(name_arr, name){
	return name_arr.filter(driver_name => driver_name.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(name_arr, name){
	let name_length = name.length
	return name_arr.filter(driver_name => driver_name.slice(0, name_length) === name)
};

function matchName(name_arr, name){
	return name_arr.filter(driver=>driver.name.toLowerCase()===name.toLowerCase())
}

// function findMatching(drivers, string){ 
// 	let matched = drivers.filter(function(string){
// 		return drivers.indexOf('string')
// 	})
// 	return matched
// };

// function fuzzyMatch(drivers, string){
// 	let first_matched = drivers.filter((string)=>string.startsWith(string[0].toLowerCase)
// 		// function(string){
// 		// return string[0].toLowerCase() === drivers //iterate objects in drivers array, compare the first latter
// 	)
// 	return first_matched
// };

// function matchName(drivers, string){
// 	drivers.map(name_key => drivers.name_key) //add name key

// };