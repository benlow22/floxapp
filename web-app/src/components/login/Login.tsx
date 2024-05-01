import { useState } from "react";
import { event } from "../../types/types";

type TProps = {
	onFormSwitch: (formName: "login" | "register") => any;
};
export const Login = ({ onFormSwitch }: TProps) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("EMAIL,", email, "pass", password);
	};
	return (
		<div className="auth-form">
			<h2>Welcome back</h2>
			<p>Sign into your account</p>
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
				className="login-form"
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
					className="login-button"
				>
					Login
				</button>
			</form>
			<button
				onClick={() => onFormSwitch("register")}
				className="link-button"
			>
				Don't have an account? Register here.
			</button>
		</div>
	);
};
