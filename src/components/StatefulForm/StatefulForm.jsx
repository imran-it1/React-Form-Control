import { useState } from 'react';

const StatefulForm = () => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [pass, setPass] = useState(null);
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (pass.length < 6) {
			setError('Pass shoulb be 6 character or longer');
		} else {
			setError('');
			console.log(name, email, pass);
		}
	};

	const handleNamechange = (e) => {
		setName(e.target.value);
	};

	const hnadleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePassChange = (e) => {
		setPass(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleNamechange}
					type="text"
					name="name"
					value={name}
				/>
				<br />
				<input
					onChange={hnadleEmailChange}
					type="email"
					name="email"
					id=""
				/>
				<br />
				<input
					onChange={handlePassChange}
					type="password"
					name="password"
					required
				/>
				<br />
				<input type="submit" value="Submit" />

				{Error && <p>{error}</p>}
			</form>
		</div>
	);
};

export default StatefulForm;
