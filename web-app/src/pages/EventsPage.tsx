import { Link } from "react-router-dom";
import eventsData from "../data/eventsData.json";

export const EventsPage = () => {
	return (
		<>
			<h1>Events Page</h1>
			{eventsData.map((event) => (
				<div id={`event-${event.id}`} key={event.id} className="event-item">
					<Link to={`/event/${event.id}`}>{event.title}</Link>
					<p>{event.description}</p>
					<p>Start Time: {event.startTime}</p>
					<p>End Time: {event.endTime}</p>
				</div>
			))}
			<Link to="/createEvent">
				<button>Create Event</button>
			</Link>
		</>
	);
};

export default EventsPage;