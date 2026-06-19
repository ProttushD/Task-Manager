const inp = document.querySelector("input");
const select = document.querySelector("select");
const btn = document.querySelector("#task");
const taskB = document.querySelector(".task-apear");


const totalTask = document.querySelector(".r");
const compeleteTask = document.querySelector(".g");
const pendingTask = document.querySelector(".b")

let total = 0;
let cTask  = 0;
let pTask = 0;


// above we have selected all the elements we are going to use till now 


// taskBox.textContent = inp.value;

btn.addEventListener("click", () => {
    // console.log(inp.value);
    // console.log(select.value);

    const check = inp.value;

    if (check.trim() === "") {
        alert("Please Add the Task First !!");
        return;
    }


    total++; // this will add by 1 when the button is clicked 

    pTask++; // this will add by 1 when the button is clicked it will increase with the total task and will be -1 when compeleted 


    totalTask.textContent = total;

    compeleteTask.textContent = cTask;

    pendingTask.textContent = pTask;



    

    


    const taskBox = document.createElement("div"); // with this we are creating the html structure div
    taskBox.className = "task-box"; // with this we are asigning the class name to div 

    const textDiv = document.createElement("div");
    textDiv.className = "text";

    const btns = document.createElement("div");
    btns.className = "btns";

    const heading = document.createElement("h5");
    heading.textContent = inp.value;

    const category = document.createElement("div");
    category.className = "type"
    category.textContent = select.value

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-1";
    editBtn.textContent = "Edit";

    const completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-2";
    completeBtn.textContent = "Complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-3";
    deleteBtn.textContent = "Delete";

    // here we have declared the things first 

    textDiv.append(heading);
    btns.append(category);
    btns.append(editBtn);
    btns.append(completeBtn);
    btns.append(deleteBtn);
    taskBox.append(textDiv);
    taskBox.append(btns);
    taskB.append(taskBox);

    // here we have append the things ! whcih dynamically add things up 

    inp.value = "";

});

// here the button is created though which we are going to add task 

taskB.addEventListener("click", (event) => {

    if (event.target.classList.contains("btn-1")) {

        // console.log(event.target);

        const taskBox = event.target.closest(".task-box");

        const heading = taskBox.querySelector("h5");

        const newTask = prompt("Edit your task", heading.textContent);

        if (newTask === null) {
            return;
        }

        heading.textContent = newTask;

        // Step 6: Update the task
    }

    if(event.target.classList.contains("btn-2")){

        const taskBox = event.target.closest(".task-box");

        if (taskBox.classList.contains("completed")) {
            alert("Task is already completed!");
            return;
        }

        const heading = taskBox.querySelector("h5");

        cTask++;
        pTask--;

        compeleteTask.textContent = cTask;
        pendingTask.textContent = pTask;

        taskBox.classList.add("completed");

       

    }

    if(event.target.classList.contains("btn-3")) {

        const taskBox = event.target.closest(".task-box");

        if (taskBox.classList.contains("completed")) {
            cTask --;
        }
        else{
            pTask--;
        }

        total--;
        
        totalTask.textContent = total;
        compeleteTask.textContent = cTask;
        pendingTask.textContent = pTask;

        taskBox.remove();

       

    }

});
