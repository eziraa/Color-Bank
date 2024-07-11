// getting necessary element


// Function to generate a random RGB color
function generateRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return { r: r, g: g, b: b };
}

// Function to convert RGB to HSV (Hue, Saturation, Value)
function rgbToHsv(r, g, b) {
    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if (max == min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: h, s: s, v: v };
}

// Generate a list of random colors
function generateRandomColorPalette(numColors) {
    var randomColors = [];
    for (var i = 0; i < numColors; i++) {
        randomColors.push(generateRandomColor());
    }
    return randomColors;
}

// Sort colors by hue
function sortColorsByHue(colors) {
    colors.sort(function (color1, color2) {
        var hsv1 = rgbToHsv(color1.r, color1.g, color1.b);
        var hsv2 = rgbToHsv(color2.r, color2.g, color2.b);
        return hsv1.h - hsv2.h;
    });
    return colors;
}

function rgbToHex(r, g, b) {
  // Convert each component to hexadecimal and concatenate them
  var componentToHex = function (c) {
    var hex = c.toString(16); // Convert to hexadecimal string
    return hex.length === 1 ? "0" + hex : hex; // Add leading zero if needed
  };

  var hexR = componentToHex(r);
  var hexG = componentToHex(g);
  var hexB = componentToHex(b);

  return "#" + hexR + hexG + hexB; // Return the hex color string
}
// Example usage:
var numColors = 200;
var randomColors = generateRandomColorPalette(numColors);
var sortedColors = sortColorsByHue(randomColors);

// Output the sorted colors

const colorContainer = document.querySelector(".color-container");
const btnCopy = document.querySelector(".color-item");

const displayColor = function () {
 
  sortedColors.forEach((color) => {
    const html = `<div class="color-item" style="background-color:rgb(${color.r}, ${color.g}, ${color.b})">
            <h3 class="color-hex" >${rgbToHex(color.r, color.g, color.b)}</h3>
            <button class="btn btn-copy"></button>
        </div>`;

    // Insert color card to color container
    colorContainer.insertAdjacentHTML("beforeend", html);
  });
};
displayColor();

const copyToClipBoard = function (e) {
  if (e.target.classList.contains("btn-copy")) {
    const colorHexValue = e.target.parentElement.querySelector(".color-hex");
    const textToBeCopied = colorHexValue?.textContent;
    navigator.clipboard.writeText(textToBeCopied);
    alert(`${colorHexValue.textContent} copied`);
  }
};


colorContainer.addEventListener("click", copyToClipBoard);

