const diceFaces = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
  };
  
  function createDots(diceElement) {
    diceElement.innerHTML = "";
    for (let i = 0; i < 9; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      diceElement.appendChild(dot);
    }
  }
  
  function showFace(diceElement, number) {
    const dots = diceElement.querySelectorAll(".dot");
    dots.forEach(dot => dot.style.visibility = "hidden");
  
    diceFaces[number].forEach(index => {
      dots[index].style.visibility = "visible";
    });
  }
  
  function getRandomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function rollDice() {
    const dice1 = getRandomDice();
    const dice2 = getRandomDice();
  
    const dice1Element = document.getElementById("dice1");
    const dice2Element = document.getElementById("dice2");
  
    showFace(dice1Element, dice1);
    showFace(dice2Element, dice2);
  
    let result = "";
    let p1Wins = parseInt(localStorage.getItem("p1Wins")) || 0;
    let p2Wins = parseInt(localStorage.getItem("p2Wins")) || 0;
    let games = parseInt(localStorage.getItem("gamesPlayed")) || 0;
  
    games++;
  
    if (dice1 > dice2) {
      result = "Joueur 1 gagne !";
      p1Wins++;
    } else if (dice2 > dice1) {
      result = "Joueur 2 gagne !";
      p2Wins++;
    } else {
      result = "Égalité !";
    }
  
    localStorage.setItem("p1Wins", p1Wins);
    localStorage.setItem("p2Wins", p2Wins);
    localStorage.setItem("gamesPlayed", games);
  
    document.getElementById("result").textContent = result;
    updateScoreDisplay();
  }
  
  function updateScoreDisplay() {
    document.getElementById("p1Wins").textContent = localStorage.getItem("p1Wins") || 0;
    document.getElementById("p2Wins").textContent = localStorage.getItem("p2Wins") || 0;
    document.getElementById("gamesPlayed").textContent = localStorage.getItem("gamesPlayed") || 0;
  }
  
  function resetScores() {
    localStorage.clear();
    updateScoreDisplay();
    document.getElementById("result").textContent = "Scores réinitialisés.";
  }
  
  window.onload = () => {
    createDots(document.getElementById("dice1"));
    createDots(document.getElementById("dice2"));
    updateScoreDisplay();
  };
  
