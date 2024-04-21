import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData.json";
import Sidebar from "../components/event/Sidebar";

export const EventPage = () => {
    let { eventId = "" } = useParams<{ eventId: string }>();
    let thisEvent = eventsData.find(event => event.id === eventId);

    return (
        <div style={{ display: "flex" }}>
            {
                thisEvent ?
                <>
                    <div style={{flex: "1"}}>
                        <Sidebar eventId={eventId}/>
                    </div>
                    <div style={{flex: "3"}}>
                        <h1>{thisEvent.title}</h1>
                        <p>{thisEvent.description}</p>
                        {/* Add further fields as needed */}
                    </div>
                </>
                :
                <div>Event not found.</div>
            }
        </div>
    );
};

export default EventPage;