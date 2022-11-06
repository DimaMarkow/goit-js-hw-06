const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listOfIngredient = document.querySelector(`#ingredients`);

const liArray = [];

for (const ingredient of ingredients) {
	const liEl = document.createElement("li");
	liEl.textContent = `${ingredient}`;
	liEl.classList.add(`item`);

	liArray.push(liEl);
	// console.log(liArray);
}

listOfIngredient.append(...liArray);

// console.log(listOfIngredient);
