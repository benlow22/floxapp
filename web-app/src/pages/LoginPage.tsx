// add OAuth, google and github? atleast 2, and apple for mobile
//
import "../styles/auth.css";
import { useState } from "react";
import { Login } from "../components/login/Login";
import { Register } from "../components/login/Register";
export const LoginPage = () => {
	// determine login page or register page
	const [currentForm, setCurrentForm] = useState<"login" | "register">("login");
	const toggleForm = (formName: "login" | "register") => {
		setCurrentForm(formName);
	};

	return (
		<div className="login-page">
			{currentForm === "login" ? (
				<Login onFormSwitch={toggleForm} />
			) : (
				<Register onFormSwitch={toggleForm} />
			)}
		</div>
	);
};

export default LoginPage;
