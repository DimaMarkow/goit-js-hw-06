const refs = {
	form: document.querySelector(`.login-form`),
};

const submitHandler = event => {
	event.preventDefault();

	// const email = event.currentTarget.elements.email;
	// const password = event.currentTarget.elements.password;

	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return console.log("Все поля должны быть заполнены!");
	}

	const objectEl = {
		email: email.value,
		password: password.value,
	};

	console.log(objectEl);

	event.currentTarget.reset();
};

refs.form.addEventListener("submit", submitHandler);
