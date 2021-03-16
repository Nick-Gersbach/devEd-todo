//Selectors
const newTaskInputField = document.querySelector('.todo-input');
const addTaskBtn = document.querySelector('.add-todo-btn');
const ulToDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');



//Event Listeners
addTaskBtn.addEventListener('click', addToDoTask);
ulToDoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);


//Functions
function addToDoTask(e) {


    //Prevent form from submitting
    e.preventDefault();
    //Create todo div
    const todoDiv = document.createElement('div');
    //Add class of todo to the new div
    todoDiv.classList.add("todo");
    //Create the li
    const newTodo = document.createElement('li');
    newTodo.innerText = newTaskInputField.value;
    newTodo.classList.add('todo-item');
    //Add our li to the newTodo div
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn")
    todoDiv.appendChild(completeButton);

    //Delete (trash) Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton);


    //Append todo div to the ul list
    ulToDoList.appendChild(todoDiv);

    //Clear todo input value after we enter it
    newTaskInputField.value = "";
}


function deleteCheck(e) {
    const item = e.target;
    //Delete Todo task
    if (item.classList[0] === "trash-btn") {
   const todo = item.parentElement;
   //Animation
   todo.classList.add('fall');
   todo.addEventListener('transitionend', function () {
       todo.remove();
   });

    }

    //Check Mark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

//Filter todos
function filterToDo (e) {
    const todos = ulToDoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value) {
            case "all"
        }
    }); 

}