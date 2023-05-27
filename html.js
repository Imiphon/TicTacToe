
function htmlLines() {
    return `
    <div class="lineFrame" id="lineFrameID">
      <div class="hideCont">   
           <div class="line show-line0" id="line0"></div>    
           <div class="line show-line1" id="line1"></div>  
           <div class="line show-line2" id="line2"></div>    
           <div class="line show-line3" id="line3"></div>        
           <div class="line show-line4" id="line4"></div>        
           <div class="line show-line5" id="line5"></div>  
           <div class="line show-line6" id="line6"></div>
           <div class="line show-line7" id="line7"></div>
           <div class="line show-line8" id="line8"></div>
      </div>
    </div>
    `
  }


function generateCrossSVG() {
    let color = "#FFC000";
    let width = 70;
    let height = 70;
    let animationDuration = "1s";
  
    const lineLength = Math.min(width, height) / 3;
  
    const svgHtml = `
      <svg width="${width}" height="${height}">
        <line x1="${width / 2 - lineLength / 2}" y1="${
      height / 2 - lineLength / 2
    }" x2="${width / 2 + lineLength / 2}" y2="${
      height / 2 + lineLength / 2
    }" stroke="${color}" stroke-width="2">
          <animate attributeName="x2" from="${width / 2 - lineLength / 2}" to="${
      width / 2 + lineLength / 2
    }" dur="${animationDuration}" fill="freeze" />
          <animate attributeName="y2" from="${height / 2 - lineLength / 2}" to="${
      height / 2 + lineLength / 2
    }" dur="${animationDuration}" fill="freeze" />
        </line>
        <line x1="${width / 2 - lineLength / 2}" y1="${
      height / 2 + lineLength / 2
    }" x2="${width / 2 + lineLength / 2}" y2="${
      height / 2 - lineLength / 2
    }" stroke="${color}" stroke-width="2">
          <animate attributeName="x2" from="${width / 2 - lineLength / 2}" to="${
      width / 2 + lineLength / 2
    }" dur="${animationDuration}" fill="freeze" />
          <animate attributeName="y2" from="${height / 2 + lineLength / 2}" to="${
      height / 2 - lineLength / 2
    }" dur="${animationDuration}" fill="freeze" />
        </line>
      </svg>
    `;
  
    return svgHtml;
    
  }

function htmlEndTxt1(){
    let endTxt = document.getElementById('endTextID').style.display = 'flex';
    endTxt.innerHTML += `
    <div class="end-text" >
    <span><h3>
        Super!<br/>
        Willst du nochmal?
      </h3></span>
    <button onclick="window.location.href ='index.html'" type="button" class="btn btn-light">
      nochmal
    </button>
    </div>
    `;
      }

      function htmlEndTxt2(){
        let endTxt = document.getElementById('endTextID').style.display = 'flex';
        endTxt.innerHTML += `
        <div class="end-text" >
        <span><h3>
            Alles Voll!<br />
            Willst du nochmal?
          </h3></span>
        <button onclick="window.location.href ='index.html'" type="button" class="btn btn-light">
          nochmal
        </button>
        </div>
        `;
          }
