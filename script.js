let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  
  let clickable = true;
  let currentPlayer = 'cross';
  
  function init() {
    render();
  }
  
  function render() {
    let content = document.getElementById('content');
    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) {
      tableHTML += '<tr>';
      for (let j = 0; j < 3; j++) {
        let fieldIndex = 3 * i + j;
        let symbol = '';
        if (fields[fieldIndex] === 'circle') {
          symbol = generateCircleSVG();
        }
        if (fields[fieldIndex] === 'cross') {
          symbol = generateCrossSVG();
        }
        tableHTML += `<td onclick="handleClick(${fieldIndex})">${symbol}</td>`;
      }
      tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    content.innerHTML = tableHTML;
  }
  
  function handleClick(fieldIndex) {
    if (!clickable || fields[fieldIndex] !== null) {
      return;
    }
    fields[fieldIndex] = currentPlayer;
    currentPlayer = (currentPlayer === 'circle') ? 'cross' : 'circle';
  
    render();
    checkWinner();

    clickable = true;
  }
  
  function checkWinner() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c] && fields[a]) {
        let winner = fields[a];
        let winnerSign = (winner === 'circle') ? 'Circle' : 'Cross';              
        setTimeout(() => {
            alert(`Congratulations! ${winnerSign} is the winner.`);
          }, 1000);
        clickable = false;
        return;
      }
    }
  }
  
  function generateCircleSVG() {
    let color = "#00B0EF";
    let width = 40;
    let height = 40;
    let animationDuration = "1.5s";
    
    const svgHtml = `
      <svg width="${width}" height="${height}">
        <circle cx="${width / 2}" cy="${height / 2}" r="0" fill="${color}" stroke="none">
          <animate attributeName="r" from="0" to="${width / 2 - 2}" dur="${animationDuration}" fill="freeze" />
        </circle>
      </svg>
    `;
        
    return svgHtml;
  }
  
  function generateCrossSVG() {
    let color = "#FFC000";
    let width = 70;
    let height = 70;
    let animationDuration = "1s";
  
    const lineLength = Math.min(width, height) / 3;
  
    const svgHtml = `
    <svg width="${width}" height="${height}">
      <line x1="${width / 2 - lineLength / 2}" y1="${height / 2 - lineLength / 2}" x2="${width / 2 + lineLength / 2}" y2="${height / 2 + lineLength / 2}" stroke="${color}" stroke-width="2">
        <animate attributeName="x2" from="${width / 2 - lineLength / 2}" to="${width / 2 + lineLength / 2}" dur="${animationDuration}" fill="freeze" />
        <animate attributeName="y2" from="${height / 2 - lineLength / 2}" to="${height / 2 + lineLength / 2}" dur="${animationDuration}" fill="freeze" />
      </line>
      <line x1="${width / 2 - lineLength / 2}" y1="${height / 2 + lineLength / 2}" x2="${width / 2 + lineLength / 2}" y2="${height / 2 - lineLength / 2}" stroke="${color}" stroke-width="2">
        <animate attributeName="x2" from="${width / 2 - lineLength / 2}" to="${width / 2 + lineLength / 2}" dur="${animationDuration}" fill="freeze" />
        <animate attributeName="y2" from="${height / 2 + lineLength / 2}" to="${height / 2 - lineLength / 2}" dur="${animationDuration}" fill="freeze" />
      </line>
    </svg>
  `;

  return svgHtml;
  init();
}


