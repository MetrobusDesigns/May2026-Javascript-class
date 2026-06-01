//EXAMPLE TEXT
let tasks = [
    { text: "Buy groceries", completed: false },
    { text: "Walk the dog", completed: false }
];

// RENDERS TASKS 
function renderTasks() {
    let ul = document.getElementById("task-list");
    ul.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.className = "task-item";
        li.textContent = tasks[i].text;
        if (tasks[i].completed) {
li.style.textDecoration = "line-through";
li.style.opacity = "0.7";
        }
//COMPLETE BUTTON
        let completeBtn = document.createElement("button");
 completeBtn.textContent = tasks[i].completed ? "Undo" : "Complete";
     completeBtn.className = "complete-btn";
     completeBtn.setAttribute("data-index", i);
     completeBtn.onclick = completeTask;

     //DELETE BUTTON
 let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
 deleteBtn.className = "delete-btn";
   deleteBtn.setAttribute("data-index", i);
 deleteBtn.onclick = deleteTask;
// ADDS A LINE ITEM TO THE END OF CHILDREN WITHIN THE PARENT NODE 
li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
     ul.appendChild(li);
    }
}

//ADD TASK FUNCTION
function addTask() {
    let input = document.getElementById("todo-input");
    let text = input.value.trim();
// IF 
    if (text !== "") {
        tasks.push({ text: text, completed: false });
        input.value = "";
        renderTasks();
    }
}
//DELETES TASK FUNCITON
function deleteTask(event) {
    let index = parseInt(event.target.getAttribute("data-index"));
    let newTasks = [];
    let i = 0;

    while (i < tasks.length) {
        if (i !== index) {
            newTasks.push(tasks[i]);
        }
        i++;
    }

    tasks = newTasks;
    renderTasks();
}
//EVENT TASK to RENDER TASKS OPTION
function completeTask(event) {
  let index = parseInt(event.target.getAttribute("data-index"));
 if (tasks[index].completed) {
        tasks[index].completed = false;
    } else {
  tasks[index].completed = true;
    }
    renderTasks();
}
//ADDS TASK ON CLICK
document.getElementById("add-btn").onclick = addTask;
renderTasks();
