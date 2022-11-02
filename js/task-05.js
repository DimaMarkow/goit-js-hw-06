const refs = {
	inputField: document.querySelector(`#name-input`),
	spanField: document.querySelector(`#name-output`),
};

const handleInput = event => {
	console.log(event.target.value);
	if (event.target.value === ``) {
		refs.spanField.textContent = `Anonymous`;
	} else {
		refs.spanField.textContent = event.target.value;
	}
};

refs.inputField.addEventListener(`input`, handleInput);
