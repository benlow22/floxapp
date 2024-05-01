import { useState } from "react";
import { event } from "../../types/types";

export const Login = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("EMAIL,", email, "pass", password);
	};
	return (
		<>
			<>Login</>
			<form onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
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
				<button type="submit">Login</button>
			</form>
			<button>Don't have an account? Register here.</button>
		</>
	);
};
