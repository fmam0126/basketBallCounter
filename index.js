let scoreHome = 0;
let scoreAway = 0;
let counterHomeEl = document.getElementById("counter-home-el");
let counterAwayEl = document.getElementById("counter-away-el");

// checks team and then checks if it should concatinate 0 to the front to have double digits in the score.
// then updates the screen to the teams score
function updatescore(team) {
  if (team === "home") {
    if (scoreHome < 10) {
      counterHomeEl.textContent = "0" + scoreHome;
    } else {
      counterHomeEl.textContent = scoreHome;
    }
  } else if (team === "away") {
    if (scoreAway < 10) {
      counterAwayEl.textContent = "0" + scoreAway;
    } else {
      counterAwayEl.textContent = scoreAway;
    }
  }
  highlightLeader();
}

function highlightLeader() {
  if (scoreHome > scoreAway) {
    counterHomeEl.style.color = "orange";
    counterAwayEl.style.color = "red";
  } else if (scoreAway > scoreHome) {
    counterAwayEl.style.color = "orange";
    counterHomeEl.style.color = "red";
  } else {
    counterAwayEl.style.color = "red";
    counterHomeEl.style.color = "red";
  }
}
// checks team and adds points to their respective scores
// and checks if it is more than 99 and sets it back to 99 before updating the screen
function addscore(team, points) {
  if (team === "home") {
    scoreHome += points;
    if (scoreHome > 99) scoreHome = 99;
  } else if (team === "away") {
    scoreAway += points;
    if (scoreAway > 99) scoreAway = 99;
  }
  updatescore(team);
}
// function addscore(e){
//     if(e.target.parentElement.id === "home"){
//         console.log("home")
//     }
// }
// function resetScores(){
//     scoreHome = 0
//     scoreAway = 0
//     updatescore("home")
//     updatescore("away")
// }

// add +1 to home score
function addHomeScore1() {
  addscore("home", 1);
  // console.log(e)
}
// add +2 to home score
function addHomeScore2() {
  addscore("home", 2);
}
// add +3 to home score
function addHomeScore3() {
  addscore("home", 3);
}
// add +1 to away score
function addAwayScore1() {
  addscore("away", 1);
}
//add +2 to away score
function addAwayScore2() {
  addscore("away", 2);
}
function addAwayScore3() {
  addscore("away", 3);
}
