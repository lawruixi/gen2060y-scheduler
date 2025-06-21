import EventList from "./EventList";

function Home({isAuthenticated, setAuthenticated, loggedInUser, setLoggedInUser, events, setEvents}) {
    if (!isAuthenticated) {
        return;
    }

    const handleLogout = () => {
        setAuthenticated(false);
        setLoggedInUser({});
    }

    return (
        <div className="home-div">
            <div className="welcome-div">
                <h2>Welcome, {loggedInUser.username}</h2>
                <button onClick={handleLogout}>Log Out</button>
            </div>
            <EventList events={events} setEvents={setEvents} currentUsername={loggedInUser.username}/>
        </div>
    );
}

export default Home;
