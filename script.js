let fields = [
    null,
    null,
    null,
    'circle',
    null,
    null,
    null,
    null,
    'cross',
]

function init() {
    render();
}

function render(){
    let content = document.getElementById('content');
    let tableHTML = '<table>'; // hier nur = also: altes löschen und neue Tabelle
    for (let i = 0; i < 3; i++) { 
        tableHTML += '<tr>';    // open 3 rows
        for (let j = 0; j < 3; j++) { 
            let fieldIndex = 3 * i + j; // 3 * current i + currrent j
            let symbol = '';
            if (fields[fieldIndex] === 'circle') {
                symbol = 'o';
            }
            if (fields[fieldIndex] === 'cross') {
                symbol = 'x';
            }
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += '</tr>'
    }
    tableHTML += '</table>'; // hier += !!!
    content.innerHTML = tableHTML;
}