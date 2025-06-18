// 🌟 DOM Elements
const inputField = document.querySelector('#userInput');
const addButton = document.querySelector('#btnAdd');
const fruitList = document.querySelector('#fruitList');

// 🌟 Handle Add Fruit
function addFruit() {
  const fruitName = inputField.value.trim();

  if (fruitName === '') {
    alert('Please write something!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = fruitName;
  fruitList.appendChild(li);

  inputField.value = '';
}

// 🌟 Event Listeners
addButton.addEventListener('click', addFruit);

// Optional: Press "Enter" to add
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addFruit();
  }
});
