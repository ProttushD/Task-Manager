const inp = document.querySelector("input");
const select = document.querySelector("select");
const btn = document.querySelector("#task"); 

const taskB = document.querySelector(".task-apear")


btn.addEventListener('click' , () => {
 const value = inp.value;
 const choice = select.value;


 if(value.trim() === ""){
    alert("Please Add the Task first")
    return;
 }

 taskB.innerHTML += `

 <div class="task-box">
                <div class="text">
                    <h5>${value}</h5>
                </div>
                <div class="btns">
                    <div class="type">${choice}</div>
                    <button class="btn btn-1">Edit</button>
                    <button class="btn btn-2">Complete</button>
                    <button class="btn btn-3">Delete</button>
                </div>
            </div>
 `


 inp.value="";
}) 

