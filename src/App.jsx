import './App.css';
import ResueableForm from './components/ResueableForm/ResueableForm';
// import HookedForm from './components/HookedForm/HookedForm';
// import RefForm from './components/RefForm/RefForm';
// import StatefulForm from './components/StatefulForm/StatefulForm';
// import SimpleForm from './components/SimpleForm/SimpleForm';

function App() {
	const handleSignUp = (data) => {
		console.log('Sign Up data:', data);
	};
	const handleUpdateProfile = (data) => {
		console.log('Update profile data:', data);
	};

	return (
		<>
			<h1>React Form Handle</h1>
			{/* <SimpleForm></SimpleForm> */}
			{/* <StatefulForm></StatefulForm> */}
			{/* <RefForm></RefForm> */}
			{/* <HookedForm></HookedForm> */}
			<ResueableForm formName={'Sign Up Now'} handleSubmit={handleSignUp}>
				<div>
					<h1>Sign Uppppp</h1>
					<p>Sign up to get discount</p>
				</div>
			</ResueableForm>
			<ResueableForm
				formName={'Update Details'}
				submitBtnText={'Update'}
				handleSubmit={handleUpdateProfile}
			>
				<div>
					<h1>Update Dataaa</h1>
					<p>Always Keep your profile upate</p>
				</div>
			</ResueableForm>
		</>
	);
}

export default App;
