document.addEventListener('DOMContentLoaded', function () {
  // Selecting elements
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  let highscore = 0;

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  const updateScore = function () {
    document.querySelector('.score').textContent = score;
  };

  const updateHighscore = function () {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  };

  // Event listener for the Check button
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there's no input or an invalid input
    if (!guess || guess < 1 || guess > 20) {
      displayMessage('⛔️ Invalid input! Enter a number between 1 and 20');
    } else if (guess === secretNumber) {
      // When the guess is correct
      displayMessage('🎉 Correct number! You won!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      updateHighscore();
    } else {
      // When the guess is incorrect
      displayMessage(guess > secretNumber ? '📈 Too high! Try again.' : '📉 Too low! Try again.');
      score--;
      updateScore();

      if (score === 0) {
        // When the player loses the game
        displayMessage('💔 You lost the game! Try again.');
        document.querySelector('body').style.backgroundColor = '#ff3333';
      }
    }
  });

  // Event listener for the Again button
  document.querySelector('.again').addEventListener('click', function () {
    // Reset game variables
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;

    // Reset UI
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    updateScore();

    document.querySelector('body').style.backgroundColor = '#222';
  });
});
