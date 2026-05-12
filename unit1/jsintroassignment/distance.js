x1 = 2
y1 = 6

x2 = 4
y2 = 8

//  Distance Formula: d = √((x2 - x1)² + (y2 - y1)²) 

let xDifference = x2 - y1; //ER: 2
let yDifference = y2 - y1; //ER: 2

let xDiffSquared = Math.pow(xDifference, 2); // ER: 4
console.log (xDiffSquared) // ER: 4

let yDiffSquared = Math.pow(yDifference, 2); // ER: 4
console.log (yDifference); // ER: 4

let distance = Math.sqrt(xDiffSquared+ yDiffSquared);
console.log (distance); // ER - 2.8284