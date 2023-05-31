const refs = {
	inputField: document.querySelector(`#validation-input`),
};

const inputHandler = event => {
	const limitOfDigits = Number(refs.inputField.getAttribute("data-length"));

	console.log(limitOfDigits);
	console.log(event.target.value.length);

	if (refs.inputField.classList.contains(`invalid`)) {
		refs.inputField.classList.remove(`invalid`);
	}

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
