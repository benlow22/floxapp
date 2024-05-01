import { useState } from "react";

type TProps = {
	onFormSwitch: (formName: "login" | "register") => any;
};

export const Register = ({ onFormSwitch }: TProps) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [name, setName] = useState<string>("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("EMAIL,", email, "pass", password);
	};
	return (
		<div className="auth-form">
			<h2>Register</h2>
			<p>Create a new account</p>
			<button className="oauth-button">
				<img
					src="./googleIcon.png"
					className="oauth-icon"
				/>
				Sign in with Google
			</button>
			<button className="oauth-button">
				<img
					src="./appleIcon.png"
					className="oauth-icon"
				/>
				Sign in with Apple
			</button>
			<div className="auth-divider">
				<div className="line-seperator"></div>
				<div>
					<p>or</p>
				</div>
				<div className="line-seperator"></div>
			</div>
			<form
				className="register-form"
				onSubmit={(e: React.FormEvent) => handleSubmit(e)}
			>
				<label htmlFor="email">Email : </label>
				<input
					type="email"
					placeholder="youremail@mail.com"
					id="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="password">Password : </label>
				<input
					type="password"
					placeholder="**********"
					id="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					type="submit"
					className="register-button"
				>
					Register
				</button>
			</form>
			<button
				onClick={() => onFormSwitch("login")}
				className="link-button"
			>
				Already have an account? Login here.
			</button>
		</div>
	);
};
