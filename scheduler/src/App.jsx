import { useState } from 'react'

import Login from './components/Login';

import './App.css'

function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState({});
    const [users, setUsers] = useState([]);

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
    </div>
}

export default App
