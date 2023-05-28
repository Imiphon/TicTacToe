function generateCrossSVG() {
    let color = "#FFC000";
    let width = 70;
    let height = 70;
    let animationDuration = "0.1s";
  
    const lineLength = Math.min(width, height) / 3;
  
    const svgHtml = `
        <svg width="${width}" height="${height}">
          <line x1="${width / 2 - lineLength / 2}" y1="${
      height / 2 - lineLength / 2
    }" x2="${width / 2 + lineLength / 2}" y2="${
      height / 2 + lineLength / 2
    }" stroke="${color}" stroke-width="2">
            <animate attributeName="x2" from="${
              width / 2 - lineLength / 2
            }" to="${
      width / 2 + lineLength / 2
    }" dur="${animationDuration}" fill="freeze" />
            <animate attributeName="y2" from="${
              height / 2 - lineLength / 2
            }" to="${
      height / 2 + lineLength / 2
    }" dur="${animationDuration}" fill="freeze" />
          </line>
          <line x1="${width / 2 - lineLength / 2}" y1="${
      height / 2 + lineLength / 2
    }" x2="${width / 2 + lineLength / 2}" y2="${
      height / 2 - lineLength / 2
    }" stroke="${color}" stroke-width="2">
            <animate attributeName="x2" from="${
              width / 2 - lineLength / 2
            }" to="${
      width / 2 + lineLength / 2
    }" dur="${animationDuration}" fill="freeze" />
            <animate attributeName="y2" from="${
              height / 2 + lineLength / 2
            }" to="${
      height / 2 - lineLength / 2
    }" dur="${animationDuration}" fill="freeze" />
          </line>
        </svg>
      `;
  
    return svgHtml;
  }

  function generateCircleSVG() {
    let color = "#00B0EF";
    let width = 40;
    let height = 40;
    let animationDuration = "0.1s";
  
    const svgHtml = `
        <svg width="${width}" height="${height}">
          <circle cx="${width / 2}" cy="${
      height / 2
    }" r="0" fill="${color}" stroke="none">
            <animate attributeName="r" from="0" to="${
              width / 2 - 2
            }" dur="${animationDuration}" fill="freeze" />
          </circle>
        </svg>
      `;
  
    return svgHtml;
  }