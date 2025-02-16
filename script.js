
const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add a new task
addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.className = 'todo-item';
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  todoList.appendChild(li);
  todoInput.value = '';

  // Mark task as complete
  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete task
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });
});

// Enable adding task with Enter key
todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addBtn.click();
  }
});
