import { Link } from "react-router-dom";
import eventsData from "../data/eventsData.json";

export const EventsPage = () => {
	return (
		<>
			<h1>Events Page</h1>
			{eventsData.map((event) => (
				<h2>{event.eventName}</h2>
			))}
			<Link to="/createEvent">
				<button>Create Event</button>
			</Link>
		</>
	);
};

export default EventsPage;
