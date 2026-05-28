/* Accepts two parameters, an object and a key in that object
// Returns the data type of the value at that key in the object (remember, typeof!)
const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: false
};

getDataType(car, 'make') => 'string'

getDataType(car, 'model') => 'string'

getDataType(car, 'year') => 'number'

getDataType(car, 'needsMaintenance') => 'boolean'

*/

function getDataType(object, key){
    // let str = "test"
    // typeof str -> string
    return typeof object[key]
    // typeof car["make"] => string
    // typeof car["year"] => number
}
car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: false
};

console.log(getDataType(car,"year"))