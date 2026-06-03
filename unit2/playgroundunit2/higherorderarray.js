const companies = [
    {name: "Company One" , category: "Finance", 
        start: 1981, 
        end: 2003
    },

    {name: "Company Two" , category: "Retail", 
        start: 1985, 
        end: 2003
    },
    
    {name: "Company Three" , category: "Auto", 
        start: 1999, 
        end: 2007
    },
    
    {name: "Company Four" , category: "Retail", 
        start: 1978, 
        end: 2025
    },
    
];

const ages = [ 22, 25, 1, 6, 89, 45, 34, 8, 17, 20, 22];

// this sets a basic loop to view the companies in the array
// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }
// //foreach (callback function: (value {string - name - category - etc.} note the function needs to be contained in the ()
// companies.forEach(function(Company, index){
// console.log(Company.name, Company.start, index); // note- you can list out your array properties with Company.property
// })
// let canDrink = [];
// for (let i = 0; i < ages.length; i++){
// if (ages[i] >= 21){
//     canDrink.push(ages[i])
//     };
// }

// console.log(canDrink);
//OR you can set the method to .filter

// let canDrinks = ages.filter(ages[i] >= 21);
// console.log(canDrinks);
// ES6 way to do functions. WAAAAY easier
// const canDrink = ages.filter(age => age >=21)
// console.log(canDrink);

// let retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

let eightiesCompanies = companies.filter(companies => (companies.start >= 1980 && companies.start < 1990));

console.log(eightiesCompanies);
let z;
ages.push(69, 67);
ages.pop();
ages.unshift(99);
// ages.reverse();
console.log(ages);
//z = ages.includes(58); // false
z = ages.indexOf(34); // 7 - will give -1 if not in the array

y = ages.slice (3, 7).reverse().toString(); //Doesn't change the array
// y = ages.splice (5, 6) WILL change the array
console.log(z, y);;