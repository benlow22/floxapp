// add OAuth, google and github? atleast 2, and apple for mobile
//

import { Login } from "../components/login/Login";
import { Register } from "../components/login/Register";
export const LoginPage = () => {
	return (
		<>
			<h1>Login Page</h1>
			<Login />
			<Register />
		</>
	);
};

export default LoginPage;
