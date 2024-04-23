import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData.json";
import Sidebar from "../components/event/Sidebar";

export const EventChats = () => {
    let { eventId = "" } = useParams<{ eventId: string }>();
    let thisEvent = eventsData.find(event => event.id === eventId);

    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: "1" }}>
                <Sidebar eventId={eventId}/>
            </div>

            <div style={{ flex: "3" }}>
                {
                    thisEvent ?
                    <div>
                        <h1>{thisEvent.title} | Chats</h1>
                        <p>List of chats will go here</p>
                        {/* Add further fields as needed */}
                    </div>
                    :
                    <div>Event not found.</div>
                }
            </div>
        </div>
    );
};

export default EventChats;