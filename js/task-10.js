function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	input: document.querySelector(`#controls > input`),
};

let numberOfBoxes = 1;

const inputHandle = event => {
	numberOfBoxes = event.target.value;
	console.log(numberOfBoxes);
};

refs.input.addEventListener(`change`, inputHandle);
console.log(numberOfBoxes);
