import { Tooltip } from 'react-tooltip';

function hourOfDayToString(hour_of_day) {
    // Jank String manip; could have used a switch statement, but that's a bit too high-effort for this proof-of-concept.
    if (hour_of_day == 0) {
        return "12:00 AM";
    }
    if (hour_of_day < 12) {
        return `${hour_of_day}:00 AM`;
    }
    if (hour_of_day == 12) {
        return `${hour_of_day}:00 PM`;
    }
    if (hour_of_day < 24) {
        return `${hour_of_day-12}:00 PM`;
    }
}

function EventHour({schedules, currentScheduleUsername, currentScheduleDate, hour}) {
    const schedule_filtered_by_username = schedules[currentScheduleUsername] ?? [];

    const schedule_filtered_to_date = schedule_filtered_by_username.filter(
        (schedule_date) => (
            schedule_date.getDate()  == currentScheduleDate.getDate() &&
            schedule_date.getMonth() == currentScheduleDate.getMonth() &&
            schedule_date.getFullYear() == currentScheduleDate.getFullYear()
        )
    );

    const schedule_mapped_hours = schedule_filtered_to_date.map((schedule_date) => (
        schedule_date.getHours()
    ));

    let numberOfAvailableUsers = 0;
    for (const username in schedules) {
        if (schedules[username].some((date) => {
            return date.getDate() == currentScheduleDate.getDate() &&
                date.getMonth() == currentScheduleDate.getMonth() &&
                date.getFullYear() == currentScheduleDate.getFullYear() &&
                date.getHours() == hour
        })) {
            numberOfAvailableUsers += 1;
        }
    }

    // Tooltips
    const tooltip_string = 
        `${currentScheduleDate.getFullYear()}-${currentScheduleDate.getMonth()}-${currentScheduleDate.getDate()}` + '&nbsp;' +
        `${hourOfDayToString(hour)}` + '<br />' +
        `${numberOfAvailableUsers} participant(s) available.`

    let td_classes = "hour-td";

    if (schedule_mapped_hours.includes(hour)) {
        td_classes += " active";
    }

    return <>
        <td className={td_classes} data-tooltip-id={`tooltip-${hour}`} data-tooltip-html={tooltip_string}>
            <Tooltip id={`tooltip-${hour}`}/>
        </td>
    </>
}

export default EventHour;
