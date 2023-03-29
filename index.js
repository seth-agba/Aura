// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const Letters = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const lettersSplit = Letters;
const x = lettersSplit.shift(1, 3);
console.log(x);
