import render from './render.js';
import { addTodo, deleteTodo, toggleCompleted } from './store.js';
import store from './store.js';
import theme from './theme-change.js';

// change theme color
theme();

window.addEventListener('todoschange', () => render());

// get store from localStorage
const storeFromLocalStorage = JSON.parse(localStorage.getItem('store'));
if (storeFromLocalStorage?.todos.length > 0) {
  store.todos = storeFromLocalStorage.todos;
}

//! note: todos -> [] is reference type and its value will only change if you reassign it with todos = []  or todos = [...todos]

const form = document.querySelector('#form');
const todoTitleInput = document.querySelector('.todo-title-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todoTitle = todoTitleInput.value;
  const newTodo = { id: crypto.randomUUID(), title: todoTitle, completed: false };
  if (todoTitle) {
    addTodo(newTodo);
  } else {
    alert('Add Todo!');
  }
});

const todos = document.querySelector('.todos');

todos.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('delete-todo-button')) {
    const id = target.closest('.todo').dataset.id;
    deleteTodo(id);
  }
});

todos.addEventListener('change', (e) => {
  e.preventDefault();

  const target = e.target;
  if (target.classList.contains('todo-checkbox')) {
    const id = target.closest('.todo').dataset.id;
    const completed = target.checked;
    toggleCompleted(id, completed);
  }
});
