// Write a function called totalAdultAges that takes an array of ages and returns the sum of all ages that are 18 or older.

// totalAdultAges([12, 25, 17, 30, 16, 21]) => 76

let totalAdultAges([12, 25, 17, 30, 16, 21]);

const totalAdultAges = (arr) => {
  // .filter and .reduce
    return arr.filter((age) => age >= 18).reduce((total, age) => total + age, 0);
  //   return arr
  //   .filter((age) => age >= 18)
  //   .reduce((total, age) => total + age, 0);

//   let over18 = arr.filter((age) => age >= 18);
//   return over18.reduce((total, age) => total + age, 0);

    // return arr.reduce((total,age) => {
    //     if(age >= 18){
    //         return total + age;
    //     }
    //     return total;
    // },0)

};

console.log(totalAdultAges([12, 25, 17, 30, 16, 21]));

console.log(totalAdultAges([12, 25, 17, 30, 16, 21]));