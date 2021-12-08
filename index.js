var todos = [];

var addTodoForm = document.querySelector("#addTodoForm");
var button = document.querySelector("button");

var listGroup = document.querySelector(".list-group");

function createListItem(todoValue, index) {
  var li = document.createElement("li");
  li.setAttribute("class", "list-group-item d-flex justify-content-between");

  if (todos[index].completed) {
    li.classList.add("bg-secondary");
  }

  li.addEventListener("click", () => {
    if (todos[index].completed) {
      li.classList.remove("bg-secondary");
      todos[index].completed = false;
    } else {
      li.classList.add("bg-secondary");
      todos[index].completed = true;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  // create span
  var span = document.createElement("span");
  span.innerHTML = todoValue;

  var editIcon = document.createElement("i");
  editIcon.setAttribute("class", "far fa-edit");
  editIcon.setAttribute("style", "color: green");

  var icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-trash-alt");
  icon.setAttribute("style", "color: red");

  editIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    var res = (addTodoForm.todo.value = todoValue);
    button.innerHTML = "Update";
    Pak(res);
  });

  icon.addEventListener("click", (e) => {
    e.stopPropagation();
    e.target.parentElement.remove();
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  li.appendChild(span);
  li.appendChild(editIcon);
  li.appendChild(icon);

  return li;
}

function renderTodos(todos) {
  todos.forEach((todo, index) => {
    var li = createListItem(todo.value, index);
    listGroup.appendChild(li);
  });
}

var storeTodos = localStorage.getItem("todos");
if (storeTodos) {
  var parsedStoredTodos = JSON.parse(storeTodos);
  todos = parsedStoredTodos;
  renderTodos(todos);
}

if (button.innerHTML === "Add Todo") {
  addTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (button.innerHTML === "Add Todo") {
      var inputVal = addTodoForm.todo.value;
      if (addTodoForm.todo.value !== "") {
        todos.push({ value: inputVal, completed: false });
        addTodoForm.todo.value = "";
        localStorage.setItem("todos", JSON.stringify(todos));

        var li = createListItem(inputVal, todos.length - 1);
        listGroup.appendChild(li);
      }
      // create li
      // set innerHTML value
      // set list-group-item
    }
  });
}
function Pak(d) {
  addTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    todos.filter((res) => {
      console.log(res.value);
    });
    // localStorage.setItem("todos", JSON.stringify(todos));
  });
}
