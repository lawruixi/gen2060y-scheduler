function EventHour({schedules, currentScheduleUsername, currentScheduleDate, hour}) {
    const schedule_filtered_by_username = schedules[currentScheduleUsername] ?? [];
    console.log(schedule_filtered_by_username);

    const schedule_filtered_to_date = schedule_filtered_by_username.filter(
        (schedule_date) => (
            schedule_date.getDate()  == currentScheduleDate.getDate() &&
            schedule_date.getMonth() == currentScheduleDate.getMonth() &&
            schedule_date.getYear() == currentScheduleDate.getYear()
        )
    );
    console.log(schedule_filtered_to_date);

    const schedule_mapped_hours = schedule_filtered_to_date.map((schedule_date) => (
        schedule_date.getHours()
    ));

    console.log(schedule_mapped_hours);

    if (schedule_mapped_hours.includes(hour)) {
        return <td className="hour-td active"></td>
    }

    return <td className="hour-td"></td>
}

export default EventHour;
