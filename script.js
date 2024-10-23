'use strict';

let score = 10;
let highScore = 0;
let guess;
let numb = Math.trunc(Math.random() * 20) + 1;
let gameOver = false;
let stopit = 0;
let easteregg = 0;

document.querySelector('.between').addEventListener('dblclick', function () {
  if (easteregg <= 50) {
    document.querySelector('.between').textContent = '😉 (Between 1 and 20)';
  } else {
    document.querySelector('.between').textContent = '😉 (Between 1 and 100)';
  }
});

document.querySelector('#made').addEventListener('mouseover', function () {
  document.querySelector('#made').textContent = 'Hello 👀';
});

document.querySelector('#made').addEventListener('mouseout', function () {
  document.querySelector('#made').textContent = 'Made by Pepe';
});

document.querySelector('.again').addEventListener('click', function () {
  gameOver = false;
  stopit = 0;
  ++easteregg;
  document.querySelector('.score').textContent = score = 10;

  if (easteregg <= 50) {
    numb = Math.trunc(Math.random() * 20) + 1;
    console.log(numb);
    document.querySelector('.message').textContent = 'New Round';
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  } else {
    document.querySelector('body').style.backgroundColor = '#00A';
    document.querySelector('.message').textContent =
      'You found the secret Easter Egg!! Hello World!';
    document.querySelector('.number').textContent = '☠';

    document.querySelector('.between').textContent = '(Between 1 and 100)';
    document.querySelector('h1').textContent =
      'Guess My Number! Hardcore Edition';
    numb = Math.trunc(Math.random() * 100) + 1;
    console.log(numb);
    document.querySelector('.guess').setAttribute('max', '100');
  }
});

//Nessas linhas verificamos a conexão com o servidor
if (navigator.onLine) {
  this.document.querySelector('#www').textContent = '🟢 Connected';
} else {
  this.document.querySelector('#www').textContent = '🔴 Disconnected';
}

window.addEventListener('online', function () {
  this.document.querySelector('#www').textContent = '🟢 Connected';
});

window.addEventListener('offline', function () {
  this.document.querySelector('#www').textContent = '🔴 Disconnected';
});

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);

  if (!gameOver && score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent =
        'Insert a damn number >.<';
    } else if (guess !== numb) {
      document.querySelector('.message').textContent =
        guess < numb ? 'Too low! :o' : 'Too high! :o';
      score--;
    } else if (guess === numb) {
      document.querySelector('.message').textContent = 'You got it!! :D';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.guess').value = '';

      gameOver = true;

      document.querySelector('.number').textContent = numb;

      if (highScore < score) {
        highScore = document.querySelector('.highscore').textContent = score;
      }
    }

    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Start a new game :V';
    ++stopit;
    if (score == 1) {
      score = document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#800';
    }
    if (stopit >= 10) {
      document.querySelector('.message').textContent =
        'What are you doing? Click the button Again!';
    }
  }
});

console.log(numb);
