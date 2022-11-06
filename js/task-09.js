function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	span: document.querySelector(`.color`),
	button: document.querySelector(`.change-color`),
};

const clickHandle = () => {
	// console.log(getRandomHexColor());
	document.body.style.backgroundColor = getRandomHexColor();
	refs.span.textContent = getRandomHexColor();
};

refs.button.addEventListener(`click`, clickHandle);
