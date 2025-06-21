# gen2060y-scheduler

![image](https://github.com/user-attachments/assets/a2fda8e5-c37c-48d8-8d8b-b17e9410d7dc)

A simple scheduler app for the GEN2060Y Mid-Service Blueprint assignment. A proof-of-concept, so some features may not work as described.

You can check out the web app at this repository's GitHub Pages link [here](https://lawruixi.github.io/gen2060y-scheduler/).

> [!NOTE]  
> Since the changes aren't stored anywhere, that means reloading the page causes all the data to disappear. 

# Introduction
This is a simple scheduling web app. Ideally, it would allow people to set up events, see each others' schedules for the same event, and decide on the best time to meet up, when everyone is free. It also provides a visualisation of participants' free schedules.

# Usage
1. Sign up for an account by registering. After that, you can login with that account.
    1. Alternatively, there's a Test account with username "Test" and password "Test". This one even comes with a pre-made Event.
2. Once you login with your account, you will be able to see a list of Events. If you just made an account, it'll be empty.
3. You can add an Event by clicking Add Event and filling in the details. Once you confirm the Event to be added, you should be able to see it in your list of Events.
4. You can then see your current schedule for the event on a particular day.
    1. To see another participant's schedule, you can click on the dropdown box at the top-right corner of the event listing. It'll show a list of participants. Clicking on another participant's username shows their availability for that day.
    2. To change the day you're viewing, you can click on the date field on the left of that dropdown box. That'll make a calendar pop out, which lets you select any other day.
6. You can add an available timeslot (for yourself) by clicking "Update Your Schedule...". Fill in the date and time, and click "Add Availability". For simplicity purposes, this demo only contains 1-hour block timeslots.
7. To delete an availability for a timeslot (for yourself), click "Update Your Schedule..." just as before and fill in the date and time, then click Delete. That particular availability timeslot will then be deleted.
8. You can hover over the schedule boxes to show how many people are available for that timeslot.
9. You can log out of your account by cicking the "Logout" button on the top-right corner. You can also register more accounts and log in as them to play around with all the features.

# Future Work
- Different roles, to determine who can see whose timeslots for which events. (Right now, everyone can see everyone's timeslot for the same event).
- Better visual representation of the overall schedule, à la other similar services such as when2meet.
- Algorithmic analysis of optimal meeting timeslots, if not all participants have a common available timeslot.
- Better UI, as this is merely a mockup.

# Credits
- [React.js](https://react.dev/) (Framework)
- [Vite](https://vite.dev/) (App setup)
- [NeoVim](https://neovim.io/) (IDE)
- You!

<h6>This app was made by Evelyne Law for the GEN2060Y Mid-Service Blueprint assignment.</h6>
