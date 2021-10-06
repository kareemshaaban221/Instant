let closeBtn = document.querySelectorAll(".popup .closeBtn");
let popup = document.querySelector(".popup");

for(let item of closeBtn){
    item.param = popup; // adding object field to the variable
    item.onclick = close;
}

let openBtn = document.querySelector('.openBtn');
openBtn.param = popup; // adding object field to the variable
openBtn.onclick = open;

let addTaskBtn = document.querySelector('.addTaskBtn');
let textBox = document.getElementById('inputTask');
addTaskBtn.onclick = addTask;

// let noData = document.querySelector('.noData'); //Note: Not worked in functions
let tasksBlock = document.querySelector('.tasks');
let cnt = 0;

/* pop up functions */
function close(){
    this.param.classList.add('closed');
}
function exit(elem){
    elem.classList.add('closed');
}
function open(){
    this.param.classList.remove('closed');
}
function start(elem){
    elem.classList.remove('closed');
}

/* add task btn functions */
function addTask(){
    /* validation */
    let input = textBox.value;
    if(input == ''){
        myAlert = document.querySelector('.invalidInput');
        start(myAlert);
        setTimeout(function (){
            exit(myAlert);
        }, 1500);
    }
    else{
        exit(popup);
        let noData = document.querySelector('.noData');
        if(!noData.classList.contains("disNone")){
            noData.classList.add("disNone");
        }
        tasksBlock.innerHTML += '<div class="alert alert-success m-1 p-1 col-12" role="alert">' + input + '<button type="button" class="close closeBtn" onclick="distroyAlert(this);" aria-label="Close">' + '<span aria-hidden="true">&times;</span>' + '</button>'
        + '</div>';
        cnt++;
    }
    textBox.value = '';
}

/* alert close btn functions */
function distroyAlert(elem){
    let noData = document.querySelector('.noData'); //
    elem.parentElement.remove();
    cnt--;
    if(cnt == 0){
        noData.classList.remove("disNone");
    }
}

// Note & questions :
// - I can't use the function close and open without events existance
// - Is function overloaded valid in javascript??! i try it to solve the 
//   above problem but in vain, i am forced to use another funciton name
// - input variable in addTask function and noData variable don't worked