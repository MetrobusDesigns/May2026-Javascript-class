/*
getHardestHomework
Write a function, getHardestHomework that takes in an array of homework objects and returns the name of the hardest homework assignment. The hardest homework will be the one that has the lowest average score. If the array contains no homeworks, return an empty string.

Examples

getHardestHomework([])
=> ''

getHardestHomework([
    { name: 'homework 1', averageScore: 99 },
    { name: 'homework 2', averageScore: 1 }
])
=> 'homework 2'

getHardestHomework([
    { name: 'array-assignment', averageScore: 12 },
    { name: 'object-assignment', averageScore: 100 },
    { name: 'function-assignment', averageScore: 25 }
])
=> 'array-assignment'

parameters: array of objects [hw-objects]
hw-objects:
{
name: string,
averageScore: number
}

returning -> string

hint:
lowestScore: 10
// let scores = [12,100,25,10,50]

for -> go through each score

// how would i find the lowest score in this array
*/

function lowestGrade (grades) {
  // use the first item in the array
  // using something like 0 doesn't make sense!  if there's no 0 score in our array, we'll still return 0 since it is less than all of the numbers that actually are in the array
  let lowestScore = grades[0]

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < lowestScore) {
      // we found a new lowest score!!
      lowestScore = grades[i]
    }
  }
  return lowestScore
}

console.log(lowestGrade([12, 100, 25, 50, 1]))

let hwobjects = [
  { name: 'array-assignment', averageScore: 12 },
  { name: 'object-assignment', averageScore: 100 },
  { name: 'function-assignment', averageScore: 25 }
]

function getHardestHomework (homework) {
  if (homework.length === 0) {
    return ''
  }

  // set our variable equal to the first hw object in our list
  let hardest = homework[0]

  for (let i = 0; i < homework.length; i++) {
    if (homework[i].averageScore < hardest.averageScore) {
      hardest = homework[i]
    }
  }

  return hardest.name
}

console.log(getHardestHomework([]))
console.log(
  getHardestHomework([
    { name: 'array-assignment', averageScore: 12 },
    { name: 'object-assignment', averageScore: 100 },
    { name: 'function-assignment', averageScore: 25 },
    { name: 'function-assignment2', averageScore: 5 }
  ])
)