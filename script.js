const inp = document.querySelector("input");
const select = document.querySelector("select");
const btn = document.querySelector("#task");
const taskB = document.querySelector(".task-apear");

// above we have selected all the elements we are going to use till now 




// taskBox.textContent = inp.value;

btn.addEventListener("click", () => {
    // console.log(inp.value);
    // console.log(select.value);


    if (inp.value.trim() === "") {
        alert("Please Add the Task First !!");
        return;
    }


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


    textDiv.append(heading);
    btns.append(category);
    btns.append(editBtn);
    btns.append(completeBtn);
    btns.append(deleteBtn);
    taskBox.append(textDiv);
    taskBox.append(btns);
    taskB.append(taskBox);






    inp.value = "";

});

// here the button is created though which we are going to add task 
