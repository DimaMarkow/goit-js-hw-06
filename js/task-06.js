const refs = {
	inputField: document.querySelector(`#validation-input`),
};

const inputHandler = event => {
	const limitOfDigits = Number(refs.inputField.getAttribute("data-length"));

	if (event.target.value.length === limitOfDigits) {
		refs.inputField.classList.add(`valid`);
	} else {
		refs.inputField.classList.add(`invalid`);
	}
};

// const focusHandler = event => {
// 	event.target.value = ``;
// 	refs.inputField.classList.remove(`valid`);
// 	refs.inputField.classList.remove(`invalid`);
// };

refs.inputField.addEventListener(`blur`, inputHandler);
// refs.inputField.addEventListener(`focus`, focusHandler);
