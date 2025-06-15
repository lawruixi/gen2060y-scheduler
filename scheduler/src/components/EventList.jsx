import EventListItem from "../EventListItem";

function EventList ({events, currentUsername}) {
    // Filter through all events containing the current user's username.
    const relevantEvents = events.filter((eventItem) => eventItem.relevantUsernames.includes(currentUsername));

    return (
        <div>
            <div className="your-events-div">
                <h3>Your Events</h3>
                <button>Add Event</button>
            </div>
            {
                relevantEvents.map((eventItem, index) => <EventListItem eventItem={eventItem}/>)
            }
        </div>
    )
}

export default EventList;
