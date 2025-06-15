import {useState} from "react";
import EventHour from "./EventHour";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function EventListItem({currentUsername, eventItem, events, setEvents}) {
    const participants = eventItem.relevantUsernames;
    const schedules = eventItem.schedules;

    const [currentScheduleUsername, setCurrentScheduleUsername] = useState(currentUsername);
    const [currentScheduleDate, setCurrentScheduleDate] = useState(new Date());

    const [showUpdateSchedule, setShowUpdateSchedule] = useState(false);
    const [updateScheduleDate, setUpdateScheduleDate] = useState(new Date());
    const [updateScheduleTime, setUpdateScheduleTime] = useState("12:00 AM");

    const handleAddAvailability = () => {
        const scheduleForUsername = schedules[currentUsername] ?? [];

        let updateScheduleHourOfDay = -1;
        switch(updateScheduleTime) {
            case "12:00 AM": updateScheduleHourOfDay = 0; break;
            case "1:00 AM": updateScheduleHourOfDay = 1; break;
            case "2:00 AM": updateScheduleHourOfDay = 2; break;
            case "3:00 AM": updateScheduleHourOfDay = 3; break;
            case "4:00 AM": updateScheduleHourOfDay = 4; break;
            case "5:00 AM": updateScheduleHourOfDay = 5; break;
            case "6:00 AM": updateScheduleHourOfDay = 6; break;
            case "7:00 AM": updateScheduleHourOfDay = 7; break;
            case "8:00 AM": updateScheduleHourOfDay = 8; break;
            case "9:00 AM": updateScheduleHourOfDay = 9; break;
            case "10:00 AM": updateScheduleHourOfDay = 10; break;
            case "11:00 AM": updateScheduleHourOfDay = 11; break;
            case "12:00 PM": updateScheduleHourOfDay = 12; break;
            case "1:00 PM": updateScheduleHourOfDay = 13; break;
            case "2:00 PM": updateScheduleHourOfDay = 14; break;
            case "3:00 PM": updateScheduleHourOfDay = 15; break;
            case "4:00 PM": updateScheduleHourOfDay = 16; break;
            case "5:00 PM": updateScheduleHourOfDay = 17; break;
            case "6:00 PM": updateScheduleHourOfDay = 18; break;
            case "7:00 PM": updateScheduleHourOfDay = 19; break;
            case "8:00 PM": updateScheduleHourOfDay = 20; break;
            case "9:00 PM": updateScheduleHourOfDay = 21; break;
            case "10:00 PM": updateScheduleHourOfDay = 22; break;
            case "11:00 PM": updateScheduleHourOfDay = 23; break;
        }

        const newScheduleForUsername = [
            ...scheduleForUsername, new Date(
                updateScheduleDate.getFullYear(),
                updateScheduleDate.getMonth(),
                updateScheduleDate.getDate(),
                updateScheduleHourOfDay
            )
        ]

        const newEventItem = {
            ...eventItem,
            "schedules": {
                ...schedules,
                [currentUsername]: newScheduleForUsername
            }
        }

        // In which we delete the event we are changing.
        const newEvents = events.filter((oldEventItem) => oldEventItem.id != eventItem.id)
        
        setEvents([
            ...newEvents,
            newEventItem
        ])
    }

    return (
        <div className="event-list-item-div">
            <h4>{eventItem.name}</h4>

            <div className="event-list-item-inner-div">
                <div className="participants-div">
                    <h5>Participants: </h5>
                    {
                        participants.map((username) => 
                            <p key={username}>- {username}</p>
                        )
                    }
                </div>
                <div className="schedule-div">
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
                                Array.from({length: 12}, (_, i) => i).map((i) => 
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
                                Array.from({length: 12}, (_, i) => i).map((i) => 
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
                    <button className="update-schedule-button" onClick={() => setShowUpdateSchedule((b) => !b)}>Update Your Schedule...</button>
                    {
                        showUpdateSchedule &&
                        <div className="update-schedule-div">
                            <div>
                                Date:
                                <DatePicker selected={updateScheduleDate} onChange={(e) => setUpdateScheduleDate(e.target.value)}/>
                            </div>
                            <div>
                                Time:
                                <select value={updateScheduleTime} onChange={(e) => setUpdateScheduleTime(e.target.value)}>
                                    <option>12:00 AM</option>
                                    <option>1:00 AM</option>
                                    <option>2:00 AM</option>
                                    <option>3:00 AM</option>
                                    <option>4:00 AM</option>
                                    <option>5:00 AM</option>
                                    <option>6:00 AM</option>
                                    <option>7:00 AM</option>
                                    <option>8:00 AM</option>
                                    <option>9:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                    <option>3:00 PM</option>
                                    <option>4:00 PM</option>
                                    <option>5:00 PM</option>
                                    <option>6:00 PM</option>
                                    <option>7:00 PM</option>
                                    <option>8:00 PM</option>
                                    <option>9:00 PM</option>
                                    <option>10:00 PM</option>
                                    <option>11:00 PM</option>
                                </select>
                            </div>
                            <div>
                                <button className="update-schedule-button" onClick={() => handleAddAvailability()}>Add Availability</button>
                                <button className="update-schedule-button" onClick={() => handleDeleteAvailability()}>Delete Availability</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default EventListItem;
