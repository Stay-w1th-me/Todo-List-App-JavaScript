const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function (){
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.addEventListener('click',function (){
        listItem.classList.toggle("completed")
    })

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить"

    deleteButton.addEventListener("click", function (){
         listItem.remove();
    });
    
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    
    taskList.appendChild(listItem);
}); 