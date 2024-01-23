const store = {
  todos: [],
};

const storeHandler = {
  get(target, property) {
    return target[property];
  },
  set(target, property, value) {
    target[property] = value;
    if (property === 'todos') {
      window.dispatchEvent(new Event('todoschange'));
    }
    localStorage.setItem('store', JSON.stringify(store));
    return true;
  },
};

const storeProxy = new Proxy(store, storeHandler);

function addTodo(newTodo) {
  storeProxy.todos = [...storeProxy.todos, newTodo];
  const todoTitleInput = document.querySelector('.todo-title-input');
  todoTitleInput.value = '';
}

function deleteTodo(id) {
  storeProxy.todos = storeProxy.todos.filter((todo) => todo.id !== id);
}

function toggleCompleted(id, completed) {
  storeProxy.todos = storeProxy.todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: completed };
    } else {
      return todo;
    }
  });
}

export { addTodo, deleteTodo, toggleCompleted };
export default storeProxy;
