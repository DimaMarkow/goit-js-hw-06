const refs = {
	inputValue: document.querySelector(`#font-size-control`),
	spanValue: document.querySelector(`#text`),
};

const inputHandler = event => {
	refs.spanValue.style.fontSize = `${event.target.value}px`;
};

refs.inputValue.addEventListener(`input`, inputHandler);
