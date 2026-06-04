// https://github.com/glf30/map-filter-reduce-assignment/tree/main
// do the first 4 problems

let names2 = ["Maya", "Christopher", "Jordanson", "Zoe", "Bob", "William"];

const shortNamesOnly = (arr) => {
    // filter
    return arr.filter((name) => name.length < 7)
}

console.log(shortNamesOnly(names2))

function isDName(isD) {
    return isD[0].toUpperCase() ==="D"? true : false;
}

console.log(isDName("Tyler"));

