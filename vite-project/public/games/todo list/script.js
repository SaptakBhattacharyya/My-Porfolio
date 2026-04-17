var todoList = [];
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var deleteAllButton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("delete-selected");

if (localStorage.getItem('savedTasks')) {
    todoList = JSON.parse(localStorage.getItem('savedTasks'));
    updateList();
    appendTask(todoList);
}

addButton.addEventListener("click", add);
deleteAllButton.addEventListener("click", deleteAll);
deleteSButton.addEventListener("click", deleteS);

todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        add();
    }
});

function updateList() {
    comdoList = todoList.filter((data) => {
        return data.complete == true;
    });

    remList = todoList.filter((data) => {
        return data.complete == false;
    });

    if(document.querySelector("#r-count")) 
        document.querySelector("#r-count").textContent = remList.length;
    if(document.querySelector("#c-count")) 
        document.querySelector('#c-count').textContent = comdoList.length;

    localStorage.setItem('savedTasks', JSON.stringify(remList));
}

function add() {
    var text = todoInput.value;
    if (text == "") {
        alert('No content is added, please add the content');
        return;
    }

    todoList.push({
        content: text,
        id: Date.now().toString(),
        complete: false
    });

    todoInput.value = "";
    updateList();
    appendTask(todoList);
}

function appendTask(listToRender) {
    allTodos.innerHTML = "";

    listToRender.forEach((element) => {
        var x = `
        <li id="${element.id}" class="todo-item">
            <p id="task"> 
                ${element.complete ? `<strike>${element.content}</strike>` : element.content} 
            </p>
            <div class="todo-actions">
                <button class="complete btn btn-success">
                    <i class="ci bx bx-check bx-sm"></i>
                </button>
                <button class="delete btn btn-error">
                    <i class="di bx bx-trash bx-sm"></i>
                </button>
            </div>
        </li>`;
        allTodos.innerHTML += x;
    });
}

function deleteAll() {
    todoList = [];
    updateList();
    appendTask(todoList);
}

function deleteS() {
    todoList = todoList.filter((data) => {
        return data.complete === false;
    });

    updateList();
    appendTask(todoList);
}

function deleteSpecific(event) {
    var item = event.target.closest('.todo-item');
    var id = item.getAttribute('id');

    todoList = todoList.filter((data) => {
        return data.id != id;
    });

    updateList();
    appendTask(todoList);
}

function completeTask(event) {
    var item = event.target.closest('.todo-item');
    var id = item.getAttribute('id');

    todoList.forEach((data) => {
        if (data.id == id) {
            data.complete = !data.complete;
        }
    });
    
    updateList();
    appendTask(todoList);
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete') || event.target.classList.contains('di')) {
        deleteSpecific(event);
    }
    
    if (event.target.classList.contains('complete') || event.target.classList.contains('ci')) {
        completeTask(event);
    }

    if (event.target.classList.contains('all')) {
        updateList();
        appendTask(todoList);
    }
    
    if (event.target.classList.contains('com')) {
        updateList();
        appendTask(comdoList);
    }
});