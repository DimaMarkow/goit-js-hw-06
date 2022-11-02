const refs = {
	decrement: document.querySelector(`button[data-action="decrement"]`),
	increment: document.querySelector(`button[data-action="increment"]`),
	value: document.querySelector(`#value`),
};

let counterValue = 0;

const render = () => {
	refs.value.textContent = counterValue;
};

const decrementEvent = () => {
	counterValue -= 1;
	render();
};

const incrementEvent = () => {
	counterValue += 1;
	render();
};

refs.decrement.addEventListener(`click`, decrementEvent);
refs.increment.addEventListener(`click`, incrementEvent);
