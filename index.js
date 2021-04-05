//drivers is assigned an initial value of ["Milo", "Otis", "Garfield"]
const drivers = ["Milo", "Otis", "Garfield"]

//destructivelyAppendDriver(name) appends a driver to the end of the drivers array
function destructivelyAppendDriver(name){
    drivers.push(name);
}

//destructivelyPrependDriver(name) prepends a driver to the beginning of the drivers array
function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

//destructivelyRemoveLastDriver removes the last driver from the drivers array
function destructivelyRemoveLastDriver(name){
    drivers.pop(name);
}

//destructivelyRemoveFirstDriver removes the First driver from the drivers array
function destructivelyRemoveFirstDriver(name){
    drivers.shift(name);
}

//appendDriver appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function appendDriver(name){
    return [...drivers, name];
}

//prependDriver prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function prependDriver(name){
    return [name, ...drivers];
}

//removeFirstDriver removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
function removeFirstDriver(name){
    return drivers.slice(1);
}

//removeLastDriver removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
function removeLastDriver(name){
    return drivers.slice(0, drivers.length -1);
}

