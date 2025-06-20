import {useState} from "react";
import EventHour from "./EventHour";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function stringToHourOfDay(timeString) {
    switch(timeString) {
        case "12:00 AM": return 0;
        case "1:00 AM": return 1;
        case "2:00 AM": return 2;
        case "3:00 AM": return 3;
        case "4:00 AM": return 4;
        case "5:00 AM": return 5;
        case "6:00 AM": return 6;
        case "7:00 AM": return 7;
        case "8:00 AM": return 8;
        case "9:00 AM": return 9;
        case "10:00 AM": return 10;
        case "11:00 AM": return 11;
        case "12:00 PM": return 12;
        case "1:00 PM": return 13;
        case "2:00 PM": return 14;
        case "3:00 PM": return 15;
        case "4:00 PM": return 16;
        case "5:00 PM": return 17;
        case "6:00 PM": return 18;
        case "7:00 PM": return 19;
        case "8:00 PM": return 20;
        case "9:00 PM": return 21;
        case "10:00 PM": return 22;
        case "11:00 PM": return 23;
    }
}

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

        const updateScheduleHourOfDay = stringToHourOfDay(updateScheduleTime);

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

    const handleDeleteAvailability = () => {
        const scheduleForUsername = schedules[currentUsername] ?? [];

        const updateScheduleHourOfDay = stringToHourOfDay(updateScheduleTime);

        const newScheduleForUsername = scheduleForUsername.filter((date) => {
            return !(
                date.getFullYear() == updateScheduleDate.getFullYear() &&
                date.getMonth() == updateScheduleDate.getMonth() &&
                date.getDate() == updateScheduleDate.getDate() &&
                date.getHours() == updateScheduleHourOfDay
            );
        })

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
