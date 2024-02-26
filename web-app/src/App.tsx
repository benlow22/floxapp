import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import FamsPage from "./pages/FamsPage";
import EventsPage from "./pages/EventsPage";
import ChatsPage from "./pages/ChatsPage";
import DiscoverPage from "./pages/DiscoverPage";
import SearchPage from "./pages/SearchPage";
import HelpPage from "./pages/HelpPage";
import UserProfilePage from "./pages/UserProfilePage";
import LoginPage from "./pages/LoginPage";
import { Main } from "./components/Main";
import { CreateEventPage } from "./pages/CreateEventPage";

const App: React.FC = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Main />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/fams" element={<FamsPage />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="/chats" element={<ChatsPage />} />
				<Route path="/discover" element={<DiscoverPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/help" element={<HelpPage />} />
				<Route path="/user" element={<UserProfilePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/createEvent" element={<CreateEventPage />} />
			</Route>
			{/* <Route path="users/:id" element={<Users />} /> */}
		</Routes>
	</Router>
);

export default App;
