const ResueableForm = ({
	// formName,
	submitBtnText = 'Submit',
	handleSubmit,
	children,
}) => {
	const handleLocalSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.name.value);
		const data = {
			name: e.target.name.value,
			email: e.target.email.value,
			pass: e.target.password.value,
		};
		handleSubmit(data);
	};

	return (
		<div>
			{/* <h1>{formName}</h1> */}
			{children}
			<form onSubmit={handleLocalSubmit}>
				<input type="text" name="name" />
				<br />
				<input type="email" name="email" id="" />
				<br />
				<input type="password" name="password" />
				<br />
				<input type="submit" value={submitBtnText} />
			</form>
		</div>
	);
};

export default ResueableForm;
