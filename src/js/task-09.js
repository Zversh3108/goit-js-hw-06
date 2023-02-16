function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorName = document.querySelector(".color");


const onColorButton = (event) =>{
  colorName.textContent = getRandomHexColor();
  document.body.style.background  = getRandomHexColor();
  
};


changeColorButton.addEventListener("click", onColorButton);


