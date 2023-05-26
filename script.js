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

function render(){
    let content = document.getElementById('content');
    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) { 
        tableHTML += '<tr>'; //3 Reihen werden generiert
        for (let j = 0; j < 3; j++) { 
            let fieldIndex = 3 * i + j; //3*0+0=0,3*0+1=1,...,3*2*2=8(=9.fieldIndex)
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
    clickable = true; // Setze clickable auf true, um weitere Klicks zu ermöglichen
}


function generateCircleSVG() {
    let color = "#00B0EF";
    let width = 40;
    let height = 40;
    let animationDuration = "1.5s";
  //Kreis startet mit r=0 und wächst dann
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
  }
  
  

  
  

  