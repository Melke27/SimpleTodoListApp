// Simple Todo List App
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTask();
}); 