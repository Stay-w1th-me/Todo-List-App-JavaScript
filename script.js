const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function saveTasks() {
    const tasks =[];

    document.querySelectorAll("#taskList li").forEach(function (listItem) {
        tasks.push({
            text: listItem.querySelector("span").textContent,
            completed: listItem.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks =JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(function (task) {
        const listItem = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = task.text;

        if (task.completed) {
            listItem.classList.add("completed");
        }

        taskSpan.addEventListener("click", function () {
            listItem.classList.toggle("completed");
            saveTasks();
        });
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";

        deleteButton.addEventListener("click", function () {
            listItem.remove();
            saveTasks();
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        
        taskList.appendChild(listItem);
    });
}

loadTasks();

addTaskButton.addEventListener("click", function (){
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.addEventListener('click',function (){
        listItem.classList.toggle("completed");
        saveTasks();
    })

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить"

    deleteButton.addEventListener("click", function (){
         listItem.remove();
         saveTasks();
    });
    
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    
    taskList.appendChild(listItem);

    saveTasks();

    taskInput.value = "";
}); 



