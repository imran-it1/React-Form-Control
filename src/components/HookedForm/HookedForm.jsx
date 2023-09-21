import useInput from '../Hooks/useInputState';

const HookedForm = () => {
	const nameFieldState = useInput('imran');
	const emailFieldState = useInput();
	const passFieldState = useInput();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Name: ', nameFieldState.value);
		console.log('Email: ', emailFieldState.value);
		console.log('Pass: ', passFieldState.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input {...nameFieldState} type="text" name="name" />
				<br />
				<input {...emailFieldState} type="email" name="email" id="" />
				<br />
				<input {...passFieldState} type="password" name="password" />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default HookedForm;
