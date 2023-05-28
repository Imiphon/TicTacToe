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
    `;
}

function htmlEndTxt1() {
  let endTxt2 = document.getElementById("endTextID2");
  endTxt2.innerHTML = ""; 
  let endTxt = document.getElementById("endTextID");
  endTxt.style.display = "flex";
  endTxt.innerHTML = ""; // Leert den Inhalt des Elements htmlEndTxt()
  
  endTxt.innerHTML += `
    <div class="end-text">
    <span><h3>
        Super!<br/>
        Willst du nochmal?
      </h3></span>
    <button onclick="window.location.href ='index.html'" type="button" class="btn btn-light">
      nochmal
    </button>
    </div>
    `;
  console.log("htmlEndTxt() wurde jetzt aufgerufen.");
}

function htmlEndTxt2() {
  let endTxt2 = document.getElementById("endTextID2");
  endTxt2.style.display = "flex";
  
  let endTxt = document.getElementById("endTextID");
  endTxt.style.display = "none";
  endTxt.innerHTML = ""; // Leert den Inhalt des Elements htmlEndTxt()
  endTxt2.innerHTML = ""; 

  endTxt2.innerHTML += `
    <div class="end-text">
      <span>
        <h3>
          Alles Voll!<br/>
          Willst du nochmal?
        </h3>
      </span>
      <button onclick="window.location.href ='index.html'" type="button" class="btn btn-light">
        nochmal
      </button>
    </div>
  `;
}

