const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoSelect = document.querySelector('.todo-select');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', createTodo);
todoList.addEventListener('click', checkTodo);
todoSelect.addEventListener('change', filter);

function createTodo(event) {

   event.preventDefault();

   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');

   const span1 = document.createElement('span');
   span1.classList.add('todo-text');
   span1.innerText = todoInput.value;

   const span2 = document.createElement('span');
   span2.innerHTML = '<i class="fa-solid fa-check"></i>';
   span2.innerHTML += '<i class="fa-solid fa-trash"></i>';

   todoDiv.appendChild(span1);
   todoDiv.appendChild(span2);

   todoList.appendChild(todoDiv);

   todoInput.value = '';

}

function checkTodo(event) {
    const todo = event.target.parentElement.parentElement;

    if (event.target.classList[1] == 'fa-trash') {
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
        
        
    }

    if (event.target.classList[1] == 'fa-check') {
        todo.classList.toggle('done');
    }
}


function filter(event) {
    const todos = document.querySelector('.todo'); 
        if (event.target.value == 'all') {
            todos.forEach(todo => {
                todo.getElementsByClassName.display = 'flex';
            });
        } else if (event.target.value == 'completed') {

        }
        else if (event.target.value == 'uncompleted') {
            
        }

    
}