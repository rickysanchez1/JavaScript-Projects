/* This function gets the task from the input */
function get_todos() {
    /* This creates an array of tasks that are inputed */
    var todos = new Array;
    /* This pulls the task the was saved in the web browser memory */
    var todos_str = localStorage.getItem('todo');
    /* If the input is not null then JSON.parse will
    communicate with the web browser to make the task a JavaScript object */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/* This function adds the inputed task to get_todos function array */
function add() {
    /* This takes the inputed task and creates a variable of it */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /* This adds a new task at the end of the array */
    todos.push(task);
    /* This converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/* This function keeps the task permanently displayed on the screen */
function show() {
    /* This sets the task that was retrieved as a variable */
    var todos = get_todos();

    /* This sets up each task as an unorderd list */
    var html = '<ul>';
    /* This will allow to remove a specific item in the array */
    var buttons = document.getElementsByClassName('remove');
    /* This displays a task to the list in the order that it is inputed */
    for (var i = 0; i < todos.length; i++) {
        /* This also displays the task as a list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>';
    };
    html += '</ul>';
    
    /* This displays the task as a list */
    document.getElementById('todos').innerHTML = html;
    /* This will allow you to remove an item by clicking the X button */
    for (var i = 0; i < todos.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

/* This displays the inputed task when the 'Add Item' button is clicked */
document.getElementById('add').addEventListener('click', add);
/* This will keep the inputs displayed permamently on the screen */
show();

/* This will remove an item from the array */
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

function red() {
    document.getElementById('red').style.color= "red";
}