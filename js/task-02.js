const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listOfIngredient = document.querySelector(`#ingredients`);
console.log(listOfIngredient);

for (const ingredient of ingredients) {
	const liEl = document.createElement("li");
	liEl.textContent = `${ingredient}`;
	liEl.classList.add(`item`);

	console.log(liEl);

	listOfIngredient.append(liEl);
}

console.log(listOfIngredient);
