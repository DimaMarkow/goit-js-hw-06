function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	span: document.querySelector(`.color`),
	button: document.querySelector(`.change-color`),
};

const clickHandle = () => {
	const newColor = getRandomHexColor();
	console.log(newColor);

	document.body.style.backgroundColor = `${newColor}`;
	refs.span.textContent = newColor;
};

refs.button.addEventListener(`click`, clickHandle);
