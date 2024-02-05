import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Header } from "./Header";

export const Main = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};
