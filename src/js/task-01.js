// кількість категорій

const categories = document.querySelectorAll(".item");

console.log("Number of categories:" + categories.length);


// Для кожного элемента li.item у списку ul#categories, знайде
//  і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
for(const category of categories){
const titleOfCategory = category.querySelector("h2");
console.log("Category:" + titleOfCategory.textContent);
const itemsCounterInCategory = category.querySelectorAll("li");
console.log("Elements:" + itemsCounterInCategory.length);
}