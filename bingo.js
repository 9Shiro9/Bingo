let r1 = [0, 0, 0, 0];
let r2 = [0, 0, 0, 0];
let r3 = [0, 0, 0, 0];
let r4 = [0, 0, 0, 0];

var first = 1;
var second = 2;

var current = first;
var finished = false;

var autoClicks = document.getElementsByClassName("autoclick");

var winnerBox = document.getElementById("winnerbox");
var winner = document.getElementById("winner");

function flip(e) {
  if (!finished) {
    var valid = true;
    let tmp = e.id.split(",");
    let clickRow = Number(tmp[0]);
    let clickColumn = Number(tmp[1] - 1);

    e.className = "circle";

    switch (clickRow) {
      case 1:
        if (r1[clickColumn] != 0) {
          valid = false;
          break;
        }
        r1[clickColumn] = current;
        break;
      case 2:
        if (r2[clickColumn] != 0) {
          valid = false;
          break;
        }
        r2[clickColumn] = current;
        break;
      case 3:
        if (r3[clickColumn] != 0) {
          valid = false;
          break;
        }
        r3[clickColumn] = current;
        break;
      case 4:
        if (r4[clickColumn] != 0) {
          valid = false;
          break;
        }
        r4[clickColumn] = current;
        break;
    }

    if (valid) {
      e.style.transform = "scaleY(-1)";

      if (current == first) {
        e.style.border = "none";
        e.style.background = "tomato";
      } else {
        e.style.border = "none";
        e.style.background = "teal";
      }

      if (current == first) {
        current = second;
        document.getElementById("turn").innerHTML = "Player 2 Turn";
      } else {
        current = first;
        document.getElementById("turn").innerHTML = "Player 1 Turn";
      }
      checkWhoWin();
    }
  }
}

function checkWhoWin() {
  // using vertical
  if (vertical(first)) {
    finished = true;
    winnerBox.style.display = "block";
    winner.innerHTML = "Player 1 Win";
  } else if (vertical(second)) {
    finished = true;
    winnerBox.style.display = "block";
    winner.innerHTML = "Player 2 Win";

    // using horizontal
  } else if (horizontal(first)) {
    finished = true;
    winnerBox.style.display = "block";
    winner.innerHTML = "Player 1 Win";
  } else if (horizontal(second)) {
    finished = true;
    winnerBox.style.display = "block";
    winner.innerHTML = "Player 2 Win";

    // using diagonal
  } else if (diagonal(first)) {
    finished = true;
    winnerBox.style.display = "block";
    winner.innerHTML = "Player 1 Win";
  } else if (diagonal(second)) {
    finished = true;
    winnerBox.style.display = "block";
    winner.innerHTML = "Player 2 Win";

    // using draw
  } else {
    draw();
  }
}

// for vertical
function vertical(player) {
  for (let i = 0; i < 4; i++) {
    if (
      r1[i] == player &&
      r2[i] == player &&
      r3[i] == player &&
      r4[i] == player
    ) {
      return true;
    }
  }
  return false;
}

// for horizontal
function horizontal(player) {
  if (
    (r1[0] == player &&
      r1[1] == player &&
      r1[2] == player &&
      r1[3] == player) ||
    (r2[0] == player &&
      r2[1] == player &&
      r2[2] == player &&
      r2[3] == player) ||
    (r3[0] == player &&
      r3[1] == player &&
      r3[2] == player &&
      r3[3] == player) ||
    (r4[0] == player && r4[1] == player && r4[2] == player && r4[3] == player)
  ) {
    return true;
  }
  return false;
}
