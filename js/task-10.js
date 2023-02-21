// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const createButton = document.querySelector('button[data-create]');
// const destroyButton = document.querySelector('button[data-destroy]');
// const counterInput = document.querySelector('input[type = number]');
// const boxes = document.querySelector('#boxes');

// let sideWidth = 30;
// let counter;

// const newDiv = document.createElement("div");

// const oninputChange  =  (event) => {
//    counter =  event.currentTarget.value;

// }

// counterInput.addEventListener("input", oninputChange);S

// function createBoxes(amount){

//   for(let i = 1; i <= amount; i += 1){
//     newDiv.style.background = getRandomHexColor();

//     newDiv.style.width = sideWidth + "px";
//     newDiv.style.height = sideWidth + "px";

//     boxes.append(newDiv);

//     sideWidth += 10;
//     sideWidth += 10;

//   }
// }

// function destroyBoxes() {

//   boxes.children.remove();

// };

// destroyButton.addEventListener("click", destroyBoxes);

// createButton.addEventListener("click", createBoxes(5));

// console.log(newDiv)

// На доопрцюванні
