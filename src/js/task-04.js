let counterValue = 0;
const decrementButton = document.querySelector('button[data-action = "decrement"]');
const incrementButton = document.querySelector('button[data-action = "increment"]');
const value = document.querySelector("#value");

const valuePlusCallback = () => {
    counterValue +=1;
    value.textContent = counterValue;
}
const valueMinusCallback = () =>{
    counterValue -= 1;
    value.textContent = counterValue;
}
decrementButton.addEventListener("click", valueMinusCallback);
incrementButton.addEventListener("click", valuePlusCallback);


