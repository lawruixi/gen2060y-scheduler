function EventListItem({eventItem}) {
    const participants = eventItem.relevantUsernames;

    return (
        <div className="event-list-item-div">
            <h4>{eventItem.name}</h4>

            <div className="event-list-item-inner-div">
                <div className="participants-div">
                    <h5>Participants: </h5>
                    {
                        participants.map((username) => 
                            <p>- {username}</p>
                        )
                    }
                </div>
                <div className="update-schedule-div">
                    <h5>Schedule</h5>
                    <table style={{borderCollapse: "collapse"}}>
                        <tbody>
                            <tr>
                            {
                                Array.from({length: 12}, (_, i) => i + 1).map((i) => <td key={i} className="hour-td"></td>)
                            }
                            </tr>
                            <tr>
                            {
                                Array.from({length: 12}, (_, i) => i + 1).map((i) => <td key={i + 12} className="hour-td"></td>)
                            }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EventListItem;
