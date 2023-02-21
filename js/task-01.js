const categories = document.querySelectorAll(".item");

console.log("Number of categories:" + categories.length);

for (const category of categories) {
  const titleOfCategory = category.querySelector("h2");
  console.log("Category:" + titleOfCategory.textContent);
  const itemsCounterInCategory = category.querySelectorAll("li");
  console.log("Elements:" + itemsCounterInCategory.length);
}
