import { NavLink } from "react-router-dom";
import "./../styles/navbar.css";
import { MenuOutlined } from "@ant-design/icons";
export const NavBar = () => {
	const links = [
		{ text: "Home", to: "/" },
		{ text: "Fams", to: "/fams" },
		{ text: "Events", to: "/events" },
		{ text: "Chats", to: "/chats" },
		{ text: "Search", to: "/search" },
		{ text: "Discover", to: "/discover" },
		{ text: "Help", to: "/help" }
	]
	return (
		<nav>
			{/* <h1>Navbar</h1>  */}
			<div className="hamburger-menu-placeholder">
				<MenuOutlined />
			</div>
			<div className="navlinks">
				{
					links.map( (link) => {
						return <NavLink to={link.to} className="navlink" key={link.text}>
							{link.text}
						</NavLink>
					})
				}
			</div>
			{/* <NavLink to={"/"}>___</NavLink> */}
			{/* <NavLink to={"/"}>___</NavLink> */}
		</nav>
	);
};
