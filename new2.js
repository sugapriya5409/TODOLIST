
document.getElementById("addbtn").addEventListener('click',function(){
    let taskbox=document.getElementById("taskbox");
    let li=document.createElement('li');
    let done=document.createElement('button');
    done.innerText="Done";
    done.setAttribute("id","donebtn")
    let edit=document.createElement('button');
    edit.setAttribute("id","editbtn")
    edit.innerText="Edit";
    let remove=document.createElement('button');
    remove.innerText="x";
    remove.setAttribute("id","removebtn");
    li.innerText=taskbox.value;
    let ul=document.getElementById("taskholder");
    ul.appendChild(li);
     li.appendChild(done);
    li.appendChild(edit);
    li.appendChild(remove);
    done.addEventListener('click',function(){
        ul.style.textDecoration="line-through";
    })
    edit.addEventListener('click',function(){
        let newTask=prompt('Enter the new task',li.firstChild.innerText);
        li.firstChild.textContent=newTask;
    })
    remove.addEventListener('click',function(){
        li.remove();
    })
 
     
})
