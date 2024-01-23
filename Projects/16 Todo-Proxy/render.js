import store from './store.js';
// since using export default u can give any name, also {storeProxy as store} is for named exports

function render() {
  const todos = document.querySelector('.todos');

  const todoElements = store.todos
    .map((todo) => {
      return `<li class="todo" data-id=${todo.id}>
  <span class="todo-title ${todo.completed ? 'completed' : ''}">${todo.title}</span>
  <div class="toggle-delete">
    <input type="checkbox" name="completed" ${
      todo.completed ? 'checked' : ''
    } class="todo-checkbox" />
    <button class="delete-todo-button">X</button>
  </div>
  </li>`;
    })
    .join('');

  todos.innerHTML = todoElements;
}

export default render;
