const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector(' .list-group');
const clearBtn = document.querySelector('#clear-task');


loadEventListeners();
function loadEventListeners() {
    form.addEventListener('submit', addTask);
}
function addTask(e) {
    if (taskInput.value===''){
        alert('برای افزودن تسک ابتدا تعسک را وارد کنید');
    }
    else {
        const li = document.createElement('li');
        li.className = 'list-group-item'
        li.appendChild(document.createTextNode(taskInput.value));
        const i = document.createElement('i');
        i.className ='fas fa-itemes';
        li.appendChild('i');
        taskList.appendChild('li');
        taskInput.value = '';
        e.preventDefault();
    }

}