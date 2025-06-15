import EventList from "./EventList";

function Home({isAuthenticated, loggedInUser, events}) {
    if (!isAuthenticated) {
        return;
    }

    return (
        <div className="home-div">
            <h2>Welcome, {loggedInUser.username}</h2>
            <EventList events={events} currentUsername={loggedInUser.username}/>
        </div>
    );
}

export default Home;
