// highValueOrdersTotal([
//   { id: 1, customer: "Maya", total: 120 },
//   { id: 2, customer: "John", total: 35 },
//   { id: 3, customer: "Sara", total: 75 },
//   { id: 4, customer: "Leo", total: 50 }
// ]) => 245

// let highValueOrdersTotal [
//   { id: 1, customer: "Maya", total: 120 },
//   { id: 2, customer: "John", total: 35 },
//   { id: 3, customer: "Sara", total: 75 },
//   { id: 4, customer: "Leo", total: 50 }
// ];

function highValueOrdersTotal(orders) { //1
  const initialValue = 0;
    return orders.reduce
(function(accumulator, currentValue) { //2
    if (currentValue.total >= 50) { //3
      return accumulator + currentValue.total;} else { //3
      return accumulator;} }, initialValue);};

const highValueOrdersTotal = (orders) => {
let initialValue = 0;
  return orders.reduce((accumulator, currentVal) =>
    currentVal.total >= 50 ? 
  accumulator + currentVal.total : 
  accumulator,
  initialValue);
};