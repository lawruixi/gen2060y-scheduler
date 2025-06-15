import { useState } from 'react'

import Login from './components/Login';
import Home from './components/Home';

import './App.css'

function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState({});
    const [users, setUsers] = useState([{
        "username": "Test",
        "password": "Test"
    }]);

    const [events, setEvents] = useState([{
        "name": "Test Event",
        "relevantUsernames": ["Test"]
    }])

    return <div className="main-div">
        <h1>Scheduler</h1>
        <Login 
            isAuthenticated={isAuthenticated} 
            setAuthenticated={setAuthenticated}
            users={users}
            setUsers={setUsers}
            setLoggedInUser={setLoggedInUser}
        >
        </Login>
        <Home 
            isAuthenticated={isAuthenticated}
            loggedInUser={loggedInUser}
            events={events}
        />
    </div>
}

export default App
