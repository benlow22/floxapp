import { NavLink } from "react-router-dom";
import "./../styles/navbar.css";
import { MenuOutlined } from "@ant-design/icons";
export const NavBar = () => {
	return (
		<nav>
			{/* <h1>Navbar</h1>  */}
			<div className="hamburger-menu-placeholder">
				<MenuOutlined />
			</div>
			<div className="navlinks">
				<NavLink to={"/"} className="navlink">
					Home
				</NavLink>
				<NavLink to={"/fams"} className="navlink">
					Fams
				</NavLink>
				<NavLink to={"/events"} className="navlink">
					Events
				</NavLink>
				<NavLink to={"/chats"} className="navlink">
					Chats
				</NavLink>
				<NavLink to={"/help"} className="navlink">
					Help
				</NavLink>
			</div>
			{/* <NavLink to={"/"}>___</NavLink> */}
			{/* <NavLink to={"/"}>___</NavLink> */}
		</nav>
	);
};
