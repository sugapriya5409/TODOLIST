let taskbox=document.getElementById("taskbox");
let ul=document.getElementById("taskholder");

let edit=`<button onclick="editTask(event)" id="editbtn">edit</button>`;
let done=`<button onclick="doneTask(event)" id="donebtn">Done</button>`;
let remove=`<button onclick="deleteTask(event)" id="removebtn">x</button>`;

let donebtn=document.getElementById("donebtn");


function createTask(){
    if(taskbox.value!=null && taskbox.value.trim()){
    let li=document.createElement("li");
    li.innerHTML=` <span>${taskbox.value}</span> ${done}  ${edit} ${remove}`;
    ul.appendChild(li);
    taskbox.value="";

    
}
}



function editTask(event){
    let li=event.target.parentNode;
    let txtspan=li.querySelector("span");
    let edit=prompt("enter the task",txtspan.textContent.trim());
    txtspan.textContent=edit;
    txtspan.style.textDecoration="none";

}
function doneTask(event){
    let li=event.target.parentElement;
    li.querySelector("span").style.textDecoration = "line-through";
  
}

function deleteTask(event){
    event.target.parentElement.remove();
}


