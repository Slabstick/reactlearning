import React from 'react';
import "./App.css"

function App() {
	const [formData, setFormData] = React.useState({
		email: "",
		password: "",
		passwordConfirm: "",
		signedUp: true
	})

	function handleSubmit(event) {
		event.preventDefault()
		console.log(formData)
		if (formData.password !== formData.passwordConfirm) {
			alert("passwords do not match!")
		}	else if (formData.signedUp) {
			alert("thanks for signing up to our newsletter!")
		}
	}

	function handleChange(event) {
		const {name, value, type, checked} = event.target
		setFormData(prevData => ({
			...prevData,
			[name] : type === "checkbox" ? checked : value
		}))
	}

	return (
		<div>
			<div className="form-container">
				<form className="form" onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="Email address"
						className="form--input"
						name="email"
						value={formData.email}
						onChange={handleChange}
						autoComplete="username"
					/>
					<input
						type="password"
						placeholder="Password"
						className="form--input"
						name="password"
						value={formData.password}
						onChange={handleChange}
						autoComplete="new-password"
					/>
					<input
						type="password"
						placeholder="Confirm password"
						className="form--input"
						name="passwordConfirm"
						value={formData.passwordConfirm}
						onChange={handleChange}
						autoComplete="new-password"
					/>

					<div className="form--marketing">
						<input
							id="okayToEmail"
							type="checkbox"
							name="signedUp"
							checked={formData.signedUp}
							onChange={handleChange}


						/>
						<label htmlFor="okayToEmail">I want to join the newsletter</label>
					</div>
					<button
						className="form--submit"
					>
						Sign up
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;