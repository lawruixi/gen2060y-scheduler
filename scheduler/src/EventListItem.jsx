function EventListItem({eventItem}) {
    return (
        <div className="event-list-item-div">
            <h4>{eventItem.name}</h4>

            <div className="participants-div">
                <h5>Participants: </h5>
                {
                    eventItem.relevantUsernames.map((username) => 
                        <p>- {username}</p>
                    )
                }
            </div>
        </div>
    )
}

export default EventListItem;
