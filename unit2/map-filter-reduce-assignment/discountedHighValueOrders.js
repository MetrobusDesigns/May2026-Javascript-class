const orders = [
  { id: 1, customer: "Maya", total: 120 },
  { id: 2, customer: "John", total: 40 }, // REMOVED
  { id: 3, customer: "Sara", total: 200 },
  { id: 4, customer: "Leo", total: 90 } //REMOVED
] // ER 320* .10 =32 //288


//ARROW FUNCTION WITH ACCUMULATOR
const discountedHighValueOrders = (orders) => orders //CHAIN FILTER / REDUCE
.filter(order => order.total >= 100)
.reduce((accumulator, currentValue) => 
accumulator + currentValue.total * 0.9, 0);  //APPLIES DISCOUNT


console.log(discountedHighValueOrders(orders));