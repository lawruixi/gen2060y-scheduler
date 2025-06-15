import {useState} from "react";
import EventHour from "./EventHour";

function EventListItem({currentUsername, eventItem}) {
    const participants = eventItem.relevantUsernames;

    const [currentScheduleUsername, setCurrentScheduleUsername] = useState(currentUsername);

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
                    <div className="schedule-filter-controls-div">
                        <h5>Schedule</h5>
                        <select value={currentScheduleUsername} onChange={(e) => setCurrentScheduleUsername(e.target.value)}>
                        {
                            (participants.map((username) => <option key={username}>{username}</option>))
                        }
                        </select>
                    </div>
                    <table style={{borderCollapse: "collapse"}}>
                        <tbody>
                            <tr>
                            {
                                Array.from({length: 12}, (_, i) => i + 1).map((i) => <EventHour key={i}/>)
                            }
                            </tr>
                            <tr>
                            {
                                Array.from({length: 12}, (_, i) => i + 1).map((i) => <EventHour key={i+12}/>)
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
