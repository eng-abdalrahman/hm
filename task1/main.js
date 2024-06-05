let randomNumber;
let trialsLeft = 10;

document.getElementById('startBtn').addEventListener('click', function() {
    startGame();
});

document.getElementById('guessBtn').addEventListener('click', function() {
    guessNumber();
});

document.getElementById('refreshBtn').addEventListener('click', function() {
    refreshPage();
});

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    trialsLeft = 10;
    document.getElementById('txt').innerHTML = "Guess a number from 1 to 100 and you only have 10 trials" ;
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('trials').innerHTML = 'Trials left: ' + trialsLeft;
    document.getElementById('trials').style.display = 'block';
    document.getElementById('game').style.display = 'block';
    document.getElementById('message').innerHTML = '';
    document.getElementById('refreshBtn').style.display = 'none';
    document.getElementById('guessBtn').disabled = false;
}

function guessNumber() {
    const userInput = parseInt(document.getElementById('userInput').value, 10);
    let message = '';

    if (userInput > 100) {
        message = "The input value must not exceed 100";
   } else if (userInput < 1) {
       message = "The input value must not be less than 1";
   } else if (randomNumber=== userInput) {
       message = "<h1>You win :)</h1>";
       document.getElementById('game').style.display = 'none';
       document.getElementById('refreshBtn').style.display = 'block';
       document.getElementById('txt').style.display = 'none';
       document.getElementById('trials').style.display = 'none';
   } else if (randomNumber < userInput) {
       message = "Try a smaller number";
   } else if (randomNumber > userInput) {
       message = "Try a larger number";
   } else {
       message = randomNumber;
   }

   trialsLeft -= 1;
   document.getElementById('trials').innerHTML = 'Trials left: ' + trialsLeft;

   if (trialsLeft == 0 && userInput !== randomNumber) {
       message = "<h1>GAME OVER</h1>";
       document.getElementById('game').style.display = 'none';
       document.getElementById('refreshBtn').style.display = 'block';
       document.getElementById('txt').style.display = 'none';
       document.getElementById('trials').style.display = 'none';
   }
   if (trialsLeft <= 0) {
    document.getElementById('guessBtn').disabled = true; 
}

    document.getElementById('message').innerHTML= message;

}
function refreshPage() {
    location.reload(); 
}

