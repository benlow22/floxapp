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
		<>
			<>Register</>
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
			<button onClick={() => onFormSwitch("login")}>
				Already have an account? Login here.
			</button>
		</>
	);
};
