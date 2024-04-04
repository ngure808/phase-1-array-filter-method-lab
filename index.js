// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, string){
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
} 
console.log(findMatching(drivers, "bobby"))

function fuzzyMatch(drivers, character){
    return drivers.filter(word => word.charAt(0).toLowerCase() === character.charAt(0).toLowerCase())
}
console.log(fuzzyMatch (drivers, "S"))

function matchName(drivers, driverName){
    return drivers.filter(driver => driver.name.toLowerCase()[0] === driverName.toLowerCase()[0])
}