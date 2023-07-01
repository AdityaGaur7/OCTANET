
function f1() {
let input = document.querySelector('#kaam');
let tasks = document.querySelector('#work');
if (input.value == "") {
alert("Type a task first,input field should not be emptied");
return;
}

let task = document.createElement("li");
task.classList.add("task");

let chk = document.createElement('input');
chk.setAttribute("type", "checkbox");
chk.classList.add('tick');

let text = document.createElement("span");
text.innerText = input.value;

let del = document.createElement("button");
del.innerText = "delete";
del.classList.add('delta');

del.addEventListener('click', function () {
task.remove();
//    let check = document.querySelector('.tick').checked;
//     if (check == true) {
//     } 
});
// task.appendChild(chk);
task.appendChild(text);
task.appendChild(del);
tasks.appendChild(task);
input.value = "";

}
var addbtn = document.querySelector('#btn');
addbtn.addEventListener('click', f1);



let a = document.querySelector('#work');
a.addEventListener('keydown', function (e) {
if (e.keyCode === 13) {
addTask();
}
})

function show(){
  let box = document.querySelector('.box');
  let start = document.querySelector('.start');
  box.style.display="block";
 start.style.display="none";
//  alert('ok')
}
 
let open = document.querySelector('#btn1');
open.addEventListener('click',show);

