import {useState} from "react";
import EventListItem from "../EventListItem";

function EventList ({events, setEvents, currentUsername}) {
    // Filter through all events containing the current user's username.
    const relevantEvents = events.filter((eventItem) => eventItem.relevantUsernames.includes(currentUsername));

    const [showAddEvent, setShowAddEvent] = useState(false);

    const [newEventName, setNewEventName] = useState("");
    const [newEventUsers, setNewEventUsers] = useState("");

    const handleAddEvent = (e) => {
        e.preventDefault();

        console.log("HANDLE ADD EVENT CALLED")

        // Add our current username to the new event users too.
        const newEventUsersPlusSelf = currentUsername + "," + newEventUsers

        const newEventObject = {
            "name": newEventName,
            "relevantUsernames": newEventUsersPlusSelf.replace(/ /g, '').split(',')
        }

        setEvents([
            ...events,
            newEventObject
        ])

        setShowAddEvent(false);
        setNewEventName("");
        setNewEventUsers("");

        console.log(newEventObject);
    }

    return (
        <div>
            <div className="your-events-div">
                <h3>Your Events</h3>
                <button onClick={() => setShowAddEvent((b) => !b)}>Add Event</button>
            </div>
            {
                showAddEvent && 
                <form onSubmit={handleAddEvent}>
                    <div className="add-event-form-div">
                        <h4>Add An Event</h4>
                        <p>
                            Event Name: 
                            <input
                                type="text"
                                placeholder="Name..."
                                value={newEventName}
                                onChange={(e)=>setNewEventName(e.target.value)}
                                style={{"margin": "8px"}}
                            />
                        </p>
                        <p>
                            Add Users: 
                            <input
                                type="text"
                                placeholder="a, b, c..."
                                value={newEventUsers}
                                onChange={(e)=>setNewEventUsers(e.target.value)}
                                style={{"margin": "8px"}}
                            />
                            <br/>
                            <span style={{color: "grey"}}>Separate usernames with commas (",").</span>
                        </p>
                        <button type="submit">Confirm</button>
                    </div>
                </form>
            }

            {
                relevantEvents.map((eventItem, index) => <EventListItem eventItem={eventItem}/>)
            }
        </div>
    )
}

export default EventList;
