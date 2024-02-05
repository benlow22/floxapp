import { Link, Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import userDataJSON from "../data/userData.json";
import { BellOutlined } from "@ant-design/icons";
import "../styles/header.css";
export const Header = () => {
	// this data should come from Auth Context
	const userData = userDataJSON.user;

	return (
		<header>
			<div className="header-banner">
				<Link to="/" className="header-homepage-logo">
					<h1>Flox</h1>
				</Link>
				<div className="header-user-info">
					<h2>{userData.userName}</h2>
					<BellOutlined className="header-notification-button" />
					<img src={userData.profilePicURL} className="header-profile-pic" />
					{/* make dynamic, log in log out button */}
					<Link to="/login" className="logout-button">
						Logout
					</Link>
				</div>
			</div>
			<NavBar />
		</header>
	);
};
