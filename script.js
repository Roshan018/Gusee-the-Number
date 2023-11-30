let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener(
  'click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number';
      // When player wins
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct number! You won!';

      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30 rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      // When guess is Wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high! Try again.' : '📉 Too low! Try again.');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage("💔 You lost the game! Try again.")
        document.querySelector('.score').textContent = 0;
      }
    }
  });

  document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15 rem'
  });







  // document.addEventListener('DOMContentLoaded', function () {
//   // Selecting elements
//   let secretNumber = Math.trunc(Math.random() * 20) + 1;
//   let score = 20;
//   let highscore = 0;

//   const displayMessage = function (message) {
//     document.querySelector('.message').textContent = message;
//   };

//   const updateScore = function () {
//     document.querySelector('.score').textContent = score;
//   };

//   const updateHighscore = function () {
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   };

//   // Event listener for the Check button
//   document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);

//     // When there's no input or an invalid input
//     if (!guess || guess < 1 || guess > 20) {
//       displayMessage('⛔️ Invalid input! Enter a number between 1 and 20');
//     } else if (guess === secretNumber) {
//       // When the guess is correct
//       displayMessage('🎉 Correct number! You won!');
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('body').style.backgroundColor = '#60b347';
//       updateHighscore();
//     } else {
//       // When the guess is incorrect
//       displayMessage(guess > secretNumber ? '📈 Too high! Try again.' : '📉 Too low! Try again.');
//       score--;
//       updateScore();

//       if (score === 0) {
//         // When the player loses the game
//         displayMessage('💔 You lost the game! Try again.');
//         document.querySelector('body').style.backgroundColor = '#ff3333';
//       }
//     }
//   });

//   // Event listener for the Again button
//   document.querySelector('.again').addEventListener('click', function () {
//     // Reset game variables
//     secretNumber = Math.floor(Math.random() * 20) + 1;
//     score = 20;

//     // Reset UI
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
//     displayMessage('Start guessing...');
//     updateScore();

//     document.querySelector('body').style.backgroundColor = '#222';
//   });
// });