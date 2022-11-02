const categoriesList = document.querySelectorAll("#categories > li");
console.log(`Number of categories: ${categoriesList.length}`);

for (const item of categoriesList) {
	const headerEl = item.firstElementChild;
	console.log(`Category: ${headerEl.textContent}`);

	const categoriesUl = item.querySelector("ul");
	const categoriesItems = categoriesUl.children;
	console.log(`Elements: ${categoriesItems.length}`);
}
