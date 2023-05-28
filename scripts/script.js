let fields = [null, null, null, null, null, null, null, null, null];

let clickable = true;
let currentPlayer = "cross";

const existingWinLines = document.querySelectorAll(".win-line");
existingWinLines.forEach((line) => line.remove());

const gameCells = Array.from(document.querySelectorAll(".game-cell"));

let winConditions = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/* --------------------FUNCTIONS ---------------------*/

function init() {
  render();
}

function render() {
  let content = document.getElementById("content");
  let tableHTML = "<table>";
  for (let i = 0; i < 3; i++) {
    tableHTML += "<tr>";
    for (let j = 0; j < 3; j++) {
      let fieldIndex = 3 * i + j;
      let symbol = "";

      if (fields[fieldIndex] === "circle") {
        symbol = generateCircleSVG();
      } else if (fields[fieldIndex] === "cross") {
        symbol = generateCrossSVG();
      }

      if (!fields[fieldIndex]) { // wenn field gesetzt ist
        tableHTML += `<td onclick="handleClick(${fieldIndex})">${symbol}</td>`;
      } else {
        tableHTML += `<td>${symbol}</td>`;
      }
    }
    tableHTML += "</tr>";
  }
  // Adding lines over the 9 fields (default: unset)
  tableHTML += htmlLines();
  tableHTML += "</table>";
  content.innerHTML = tableHTML;
  // Überprüfung, ob fields kein null mehr enthält
  if (!fields.includes(null)) {
    htmlEndTxt2();
  }
}


function handleClick(fieldIndex) {
  if (!clickable || fields[fieldIndex] !== null) {
    return;
  }
  fields[fieldIndex] = currentPlayer;
  currentPlayer = currentPlayer === "circle" ? "cross" : "circle";

  render();
  checkWinner();

  clickable = true;
}

function checkWinner() {  
  let winCombi = null; // Setzt den Anfangswert von winCombi auf null
  
    for (let index in winConditions) {
      const condition = winConditions[index];
      const [a, b, c] = condition;
      
      if (
        fields[a] &&
        fields[a] === fields[b] &&
        fields[a] === fields[c] &&
        fields[a]
      ) {
        winCombi = index; // Weist winCombi den Indexwert zu, wenn die Bedingung erfüllt ist
         
        htmlEndTxt1();
       /* setTimeout(() => {htmlEndTxt1()}, 1000);*/

        document.getElementById('lineFrameID').style = 'display: block;';
        document.getElementById(`line${winCombi}`).style ='display: block;';
  
        showWinLine(a, b, c);
  
        clickable = false;
        return;
      }
    }
  }

window.addEventListener("load", function () {
  showWinLine();
});


function showWinLine() {

  // Überprüfung, ob die gameCells vorhanden sind und mindestens eine Zelle existiert
  if (gameCells.length === 0) {
    console.log("No game cells found.");
    return;
  }
// kurze Zeitspanne, um sicherzustellen, dass die Zellen vollständig gerendert sind
  setTimeout(function () {
    buildWinLine();
  }, 100);  
}
  
function buildWinLine() {
  const cellWidth = gameCells[0].offsetWidth;
  const cellHeight = gameCells[0].offsetHeight;

  for (const condition of winConditions) {
    const [a, b, c] = condition;

    const startX = gameCells[a].offsetLeft + cellWidth / 2;
    const startY = gameCells[a].offsetTop + cellHeight / 2;
    const endX = gameCells[c].offsetLeft + cellWidth / 2;
    const endY = gameCells[c].offsetTop + cellHeight / 2;

    const length = Math.sqrt(
      Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
    );
    const angle = (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI;

    const winLine = document.createElement("div");
    winLine.classList.add("win-line");
    winLine.style.width = length + "px";
    winLine.style.top = startY + "px";
    winLine.style.left = startX + "px";
    winLine.style.transform = `rotate(${angle}deg)`;
    document.getElementById("content").appendChild(winLine);
  }
}
