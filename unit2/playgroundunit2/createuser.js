/*
createUser
Accepts two parameters, a user's first name and last name
Returns a user object
Example:

createUser('Jerron', 'Smith') =>
{
  firstName: 'Jerron',
  lastName: 'Smith'
}

parameters:
firstName, lastName - strings

return
{
    firstName: string,
    lastName: string
}
*/

console.log("Create User");

function createUser(firstName, lastName) {
  //   return {
  //       firstName: firstName,
  //       lastName: lastName
  //   }

  // if key name and variable name for value are the same:
  return {
    firstName, // firstName: firstName
    lastName, // lastName: lastName
  };

  //   let newPerson = {
  //     firstName: firstName,
  //     lastName: lastName,
  //   }

  // //   return newPerson;
}

console.log(createUser("Jerron", "Smith"));
console.log(createUser("New", "Person"));