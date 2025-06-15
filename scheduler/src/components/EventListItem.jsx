import {useState} from "react";
import EventHour from "./EventHour";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function EventListItem({currentUsername, eventItem}) {
    const participants = eventItem.relevantUsernames;
    const schedules = eventItem.schedules;

    const [currentScheduleUsername, setCurrentScheduleUsername] = useState(currentUsername);
    const [currentScheduleDate, setCurrentScheduleDate] = useState(new Date());

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
                        <DatePicker selected={currentScheduleDate} onChange={(date) => setCurrentScheduleDate(date)}/>
                        <select value={currentScheduleUsername} onChange={(e) => setCurrentScheduleUsername(e.target.value)}>
                        {
                            (participants.map((username) => <option key={username}>{username}</option>))
                        }
                        </select>
                    </div>
                    <table style={{borderCollapse: "collapse"}}>
                        <thead>
                            <tr>
                                <td></td>
                                <td>12</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>AM</td>
                            {
                                Array.from({length: 12}, (_, i) => i + 1).map((i) => 
                                    <EventHour key={i} 
                                        schedules={schedules} 
                                        currentScheduleUsername={currentScheduleUsername} 
                                        currentScheduleDate={currentScheduleDate}
                                        hour={i}
                                    />
                                )
                            }
                            </tr>
                            <tr>
                            <td>PM</td>
                            {
                                Array.from({length: 12}, (_, i) => i + 1).map((i) => 
                                    <EventHour key={i+12} 
                                        schedules={schedules} 
                                        currentScheduleUsername={currentScheduleUsername} 
                                        currentScheduleDate={currentScheduleDate}
                                        hour={i+12}
                                    />
                                )
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
