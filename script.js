// getting necessary element

const colorContainer = document.querySelector(".color-container");
const colorHexValue = document.querySelector(".color-hex");
const btnCopy = document.querySelector(".btn-copy");

const copyToClipBoard = function (e) {
  if (e.target.classList.contains("btn-copy")) {
    const textToBeCopied = colorHexValue.textContent;
    navigator.clipboard.writeText(textToBeCopied);
    alert(`${colorHexValue.textContent} copied`);
  }
};

colorContainer.addEventListener("click", copyToClipBoard);

