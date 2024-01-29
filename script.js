// getting necessary element

const colorContainer = document.querySelector(".color-container");
const colorHexValue = document.querySelector(".color-hex");
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
const copyToClipBoard = function (e) {
  if (e.target.classList.contains("btn-copy")) {
    const textToBeCopied = colorHexValue.textContent;
    navigator.clipboard.writeText(textToBeCopied);
    alert(`${colorHexValue.textContent} copied`);
  }
};

colorContainer.addEventListener("click", copyToClipBoard);

