/*var tickButtons = document.querySelectorAll(".done::after").length;
for (var i = 0; i< tickButtons; i++) {
    document.querySelectorAll(".done::after")[i].addEventListener("click", strikeThrough);
}

function strikeThrough() {
    document.querySelector(".done").classList.add("strikeThrough")
  //  console.log(this.getClassList)
    //this.
}
*//*
//func
function openForm() {
  document.getElementById("bring-form").classList.remove("hidden")
}
function closeForm(){
  document.getElementById("bring-form").classList.add("hidden")
}
function addNewTask(TaskTitle, Message){
  const newTaskTitle = document.createElement("h4");
  const newTaskMessage = document.createElement("div");
  newTaskTitle.textContent = TaskTitle;
  newTaskMessage.textContent = Message;
  document.getElementById("to-do-tasks").appendChild(newTaskTitle)
}//event listener
document.getElementById("add-job").addEventListener("click", openForm);
//document.getElementById("addNewTask-done").addEventListener("click", closeForm);
document.getElementById("close-job").addEventListener("click", closeForm);

document.getElementById("addNewTask-done").addEventListener("click", () => {
  const TaskTitle = document.getElementById("InputTitle1").value;
  const Message = document.getElementById("Message").value;
  addNewTask(TaskTitle)
})
let submitBtn = document.querySelector("#addNewTask-done");
let input = document.querySelector('#InputTitle1');
let container = document.querySelector('#to-do-tasks');

submitBtn.addEventListener('click',()=>{
  let list = document.createElement('div');
 // const TaskTitle = document.getElementById("InputTitle1").value;
  //const Message = document.getElementById("Message").value;
    //list.className = "list";
    let newTaskTitle = document.createElement("h3");
    
    //let text = document.createElement('h2');
    //text.textContent = input.value;
    //text.className = 'text'
    //const newTaskMessage = document.createElement("div");
    newTaskTitle.textContent = input.value;
    console.log(newTaskTitle);
    //newTaskMessage.textContent = Message;
    list.appendChild(text);

    container.appendChild(list)

    
    input.value = '';
})
*/
function openForm() {
  document.getElementById("bring-form").classList.remove("hidden")
}
function closeForm(){
  document.getElementById("bring-form").classList.add("hidden")
}
document.getElementById("add-job").addEventListener("click", openForm);
document.getElementById("close-job").addEventListener("click", closeForm);

let doneBtn = document.getElementById('addNewTask-done');
let inputTitle = document.getElementById('InputTitle1');
let inputMessage = document.getElementById('Message');
let cont = document.getElementById('to-do-tasks');

doneBtn.addEventListener('click', ()=>{
  let list = document.createElement('div');
  list.className = "list";
    
  let text = document.createElement('h2');
  let desc = document.createElement('p');
  text.textContent = inputTitle.value;
  desc.textContent = inputMessage.value;
  
  desc.className = 'text';
  list.appendChild(text);
  list.appendChild(desc);

  cont.appendChild(list);
  inputTitle.value = '';
  inputMessage.value = '';
  
  document.getElementById("bring-form").classList.add("hidden");

  let icon = document.createElement('i');
    icon.className = 'icon'
    icon.innerHTML = '<i class="fa-solid fa-trash"></i>';
    list.appendChild(icon)
    icon.style.cursor = 'pointer';

    icon.addEventListener('click',() =>{
        list.remove()
    })
})

//to get  current date and time
const timeNowEl = document.querySelector('.time-now');
const dateNowEl = document.querySelector('.date-now');

const date = new Date();
const day = date.getDay();
const currentHours = date.getHours();
const currentMins = date.getMinutes();

const getCurrentTime = currentHours >= 12 ? `${currentHours} : ${currentMins} PM` : `${currentHours} : ${currentMins} AM`;

timeNowEl.innerHTML = getCurrentTime;

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

for (let i = 0; i <= days.length; i++) {
  if (day === i) {
    // console.log(days[i]);
    dateNowEl.innerHTML = `Today is: ${days[i]}`;
  }
}

//change css file
function lightTheme() {
  document.getElementById("stylesheet").href="./To-do-list.css";
  document.getElementById("LightMode").style.display="none";
  document.getElementById("DarkMode").style.display="inline-block";
  //document.getElementById("stylesheet").setAttribute("href", "./Movie Site2.css")
}
function darkTheme() {
  document.getElementById("stylesheet").href="./To-do-list-DarkMode.css";
  document.getElementById("DarkMode").style.display="none";
  document.getElementById("LightMode").style.display="inline-block";
  //document.getElementById("stylesheet").setAttribute("href", "./Movie Site2.css")
}

document.getElementById("DarkMode").addEventListener("click", darkTheme);
document.getElementById("LightMode").addEventListener("click", lightTheme);

/*

//let submitBtn = document.querySelector('.submit');
//let input = document.querySelector('.input');
//let container = document.querySelector('.output');


submitBtn.addEventListener('click',()=>{
    let list = document.createElement('div');
    list.className = "list";
    
    let text = document.createElement('h2');
    text.textContent = input.value;
    text.className = 'text'
    list.appendChild(text);

    let icon = document.createElement('i');
    icon.className = 'icon'
    icon.innerHTML = '<i class="fa-solid fa-trash"></i>';
    list.appendChild(icon)
    icon.style.cursor = 'pointer';
    
    
    container.appendChild(list)

    
    input.value = '';
    icon.addEventListener('click',() =>{
        list.remove()
    })
})*/