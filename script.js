const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const field = document.querySelector(".field");
const noTodoMessage = document.querySelector(".noTodo");
const search = document.querySelector(".search input");
// Generate HTML Template Arrow Function
const generateListItem = (todo) => {
  const html = `<li class="list-group-item d-flex my-2 justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;

  list.innerHTML += html;
  field.value = "";
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  console.log(todo);

  if (todo == "") {
    alert("Please Enter a Task. Empty tasks are not allowed, bud.");
    field = "";
  } else {
    generateListItem(todo);
  }
});

// Delete Todos Arrow Function

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// Searching For Todos Arrow Function

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("hidden"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("hidden"));
};

search.addEventListener("keyup", (e) => {
  const term = e.target.value.trim();
  filterTodos(term);
});
