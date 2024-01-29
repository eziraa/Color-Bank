// getting necessary element

const colorContainer = document.querySelector(".color-container");
const btnCopy = document.querySelector(".btn-copy");

const generateColor = function () {
  const COLOR_HEX_VALUES = "1234567890ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++)
    color += COLOR_HEX_VALUES.charAt(
      Math.trunc(Math.random() * COLOR_HEX_VALUES.length)
    );
  return color;
};
const displayColor = function () {
  // declare MAX NUMBER OF COLORS
  const NUMBER_OF_COLORS = 100;

  // GET array of colora
  const colors = Array.from(
    {
      length: NUMBER_OF_COLORS,
    },
    () => generateColor()
  );

  colors.forEach((color) => {
    const html = `<div class="color-item" style="background-color:${color}">
            <h2 class="color-hex" >${color}</h2>
            <button class="btn btn-copy">copy</button>
        </div>`;

    // Insert color card to color container
    colorContainer.insertAdjacentHTML("beforeend", html);
  });
};
displayColor();

const copyToClipBoard = function (e) {
  const colorHexValue = document.querySelector(".color-hex");

  if (e.target.classList.contains("btn-copy")) {
    const textToBeCopied = colorHexValue?.textContent;
    navigator.clipboard.writeText(textToBeCopied);
    alert(`${colorHexValue.textContent} copied`);
  }
};


colorContainer.addEventListener("click", copyToClipBoard);

