/*
ToDo List CLI Project!

Write a program that allows a user to add different tasks to a list.
The tasks added are going to have an attached status to signify if the task has been completed or not
The user should also be able to indicate when a task is completed

The user should be able to exit the program from the main menu

As best as we can for the time being, we want to make it so this code doesn't break based on the user input.
-prevent user from adding blank tasks

We want to write our code so that it's modular! We should use functions when possible trying our best to make it so all repetive/tedious tasks are kept in their own functions

Showcase the list whenever we are in the main menu OR if the list is empty

//Example
Welcome to the To-Do List Manager Application!

==============================================

Your to-do list is empty.

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
> 1

~ Creating a new to-do item ~
What is this to-do item called?
> Go to the dentist

==============================================

You have 1 to-do item(s).
1. [incomplete] Go to the dentist

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
> 1

~ Creating a new to-do item ~
What is this to-do item called?
> Buy groceries

==============================================

You have 2 to-do item(s).
1. [incomplete] Go to the dentist
2. [incomplete] Buy groceries

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
> 2

~ Completing a to-do item ~
Which to-do item would you like to complete?
> 2

==============================================

You have 2 to-do item(s).
1. [incomplete] Go to the dentist
2. [complete]   Buy groceries

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the program
>

*/

const prompt = require("prompt-sync")({ sigint: true });

const prompt = require('prompt-sync')({ sigint: true })

const todoList = []

let selection = 0

while (selection !== 3) {
  displayList()

  console.log('\n===========================================')
  console.log('\n-Select an action-')
  console.log('1. Create a to-do item')
  console.log('2. Complete a to-do item')
  console.log('3. Exit')

  selection = Number(prompt('> '))

  if (selection === 1) {
    createTask()
  } else if (selection === 2) {
    completeTask()
  } else if (selection === 3) {
    console.log('Exit')
  } else {
    console.log('Invalid! Try another selection.')
  }
}

function createTask () {
  // Create todo
  console.log('\n- Creating a new todo item -')

  /*
    todo = {
        //key: value
        task: string
        status: boolean
    }
    */
  // prompt user for the task
  // .trim() gets rid of leading and trailing whitespace
  let newTask = prompt('> ').trim();

  // prevent task entered from being blank
  while(newTask === ""){
    console.log("\n- Task cannot be blank -");
    console.log('\n- Creating a new todo item -')
    newTask = prompt('> ').trim();
  }

  let todo = {
    task: newTask,
    status: false
  }

  todoList.push(todo)

  // console.log(todoList);
}

function completeTask () {
  // Complete todo
  console.log('\n- Complete a todo item -')
  // false to true

  console.log('Which to-do item would you like to complete?')
  let itemNumber = Number(prompt('> '))

  // check if itemNumber is in range
  // keep prompting the user until we get valid input
  while (isNaN(itemNumber) || itemNumber < 1 || itemNumber > todoList.length) {
    console.log('Invalid item.')

    console.log('\nWhich to-do item would you like to complete?')
    itemNumber = Number(prompt('> '))
    // return;
  }

  // how do we access the correct todo object?
  // todoList[itemNumber-1]
  // how do we change the status from false to true?
  todoList[itemNumber - 1].status = true
}

function displayList () {
  for (let i = 0; i < todoList.length; i++) {
    // todoList[i] - this is our todo object!

    // complete or incomplete
    let statusString = ''

    if (todoList[i].status === true) {
      statusString = 'complete'
    } else {
      statusString = 'incomplete'
    }

    // i + 1 - temporary change.  all we are doing is displaying our i index + 1 more than it currently is for user readibility
    console.log(`${i + 1} : [${statusString}] ${todoList[i].task}`)
    // console.log(todoList[i].task);
  }
}
