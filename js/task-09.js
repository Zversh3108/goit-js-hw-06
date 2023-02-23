function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
changeColorButton.addEventListener("click", onColorButton);

const changeColorButton = document.querySelector(".change-color");

const colorName = document.querySelector(".color");

const onColorButton = (event) => {
  const bcgColorHex = getRandomHexColor();
  colorName.textContent = bcgColorHex;
  document.body.style.background = bcgColorHex;
};
