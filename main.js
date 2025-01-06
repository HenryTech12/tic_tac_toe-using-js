let btns = document.querySelectorAll('.buttons');

btns.forEach((result) => {
  result.addEventListener('click', () => {
    playGame(result);
  });
});
let startGame = true;
let index = 0;
let turn = document.getElementById('turn');
let clickAudio = new Audio('/music-[AudioTrimmer.com].mp3')

function playGame(res) {
 clickAudio.play();
 if(startGame === true) {
  if(index%2 == 0) {
    if(res.innerText !== "O") {
      res.style.color = "#1DC9C7";
      res.innerText="X";
      turn.innerText = "O Turn";
      index++;
    }
  }
  if(index%2 !== 0) {
    if(res.innerText !== "X") {
      res.style.color = "#EAAD35";
      res.innerText = "O";
      turn.innerText = "X Turn";
      index++;
    }
  }
 }
 checkForDraw();
}


let scoreX = 0;
let scoreO = 0;
let tie = 0;
let myTie = document.getElementById('tie');
let score1 = document.getElementById('score1');

btns.forEach((res) => {
  res.addEventListener('click', () => {
   if(startGame === true) {
    //horizontal wins
     for(let i = 0; i <= 6; i+=3) {
        if (btns[i].innerText === "X" && btns[i + 1].innerText === "X" && btns[i + 2].innerText === "X") { console.log('X wins');
            scoreX+= 1;
             score1.innerText = scoreX;
             startGame = false;
             currentWinner = 'X';
            }
         if (btns[i].innerText === "O" && btns[i + 1].innerText === "O" && btns[i + 2].innerText === "O") {console.log('O wins');
              scoreO += 1;
              score2.innerText = scoreO;
              startGame = false;
              currentWinner = 'O';
           }
        }  
   //vertical wins
    for(let i = 0; i <= 2; i++) {
        if (btns[i].innerText === "X" && btns[i + 3].innerText === "X" && btns[i + 6].innerText === "X") {console.log('X wins');
              scoreX += 1;
              score1.innerText = scoreX;
              startGame = false;
              currentWinner = 'X';
         }
         if (btns[i].innerText === "O" && btns[i + 3].innerText === "O" && btns[i + 6].innerText === "O") {console.log('O wins');
               scoreO += 1;
               score2.innerText = scoreO;
               startGame = false;
               currentWinner = 'O';
          }
      } 
    let i = 0;
     //diagonal wins
     if (btns[i].innerText === "X" && btns[i + 4].innerText === "X" && btns[i + 8].innerText === "X") {console.log('X wins');
        scoreX += 1;
        score1.innerText = scoreX;
        startGame = false;
        currentWinner = 'X';
     }
     if (btns[i+2].innerText === "X" && btns[i + 4].innerText === "X" && btns[i + 6].innerText === "X") { console.log('X wins');
         scoreX += 1;
         score1.innerText = scoreX;
         startGame = false;
         currentWinner = 'X';
     }
     if (btns[i].innerText === "O" && btns[i + 4].innerText === "O" && btns[i + 8].innerText === "O") {console.log('O wins');
         scoreO += 1;
         score2.innerText = scoreX;
         startGame = false;
         currentWinner = 'O';
    }
    if (btns[i + 2].innerText === "O" && btns[i + 4].innerText === "O" && btns[i + 6].innerText === "O") { console.log('O wins');
        scoreO += 1;
        score2.innerText = scoreX;
        startGame = false;
        currentWinner = 'O';
       }
     }
   });
});

let currentPlayerWinner = document.getElementById('winner');
let popup = document.getElementById('popup');
let won = false;
let isTie = false;
function displayWinBoard() {
  if((scoreO > scoreX) && startGame === false && isTie === false) {
     currentPlayerWinner.innerText = "O takes the round";
     displayPopup();
  }
  if((scoreX > scoreO) && startGame === false && isTie === false) {
    currentPlayerWinner.innerText = "X takes the round";
    displayPopup();
  }
  if((scoreX === scoreO) && startGame == false) {
    if(currentWinner === 'X') {
       if(isTie === false) {
        currentPlayerWinner.innerText = 'X takes the round';
        displayPopup();
       }
    }
     else {
       if(isTie === false) {
        console.log('cWinner')
        currentPlayerWinner.innerText = 'O takes the round';
        displayPopup();
       }
  }
  score1.innerText = scoreX;
  score2.innerText = scoreO;
  }
}

function displayPopup() {
  popup.style.display = "flex";
  clickAudio.duration = "0";
  clickAudio.pause();
  won = true;
}

let intervalId = setInterval(() => {
    displayWinBoard();
},1);


let winL = document.getElementById('winl');
function checkForDraw() {
       if(btns[0].innerText !== "" && btns[1].innerText !== "" && btns[2].innerText !== "" && btns[3].innerText !== "" && btns[4].innerText !== "" && btns[5].innerText !== "" && btns[6].innerText !== "" && btns[7].innerText !== "" && btns[8].innerText !== "") {
          if(startGame !== false ) {
             console.log('game ends in tie');
             winL.innerText = "No one Wins";
             currentPlayerWinner.innerText = "Game ends in a tie";
             tie += 1;
             myTie.innerText = tie;
             startGame = false;
             displayPopup();
             won = false;
             isTie = true;
             console.log("Tie: ",isTie);
           }
        }
      if(startGame == false) {
         
    }
}

function resetButtons() {
  btns.forEach((result) => {
    result.innerText = "";
});
 startGame = true;
 winL.innerText = "You Won";
 won = false;
 isTie = false;
 popup.style.display = "none";
}

function resetAll() {
  resetButtons();
  scoreX = 0;
  scoreO = 0;
  clickAudio.duration = "0";
  clickAudio.pause();
  tie = 0;
  myTie.innerText = tie;
  score1.innerText = scoreX;
  score2.innerText = scoreO;
}
