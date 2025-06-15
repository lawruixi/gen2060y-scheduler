import { useState } from 'react'

import Login from './components/Login';

import './App.css'

function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);

    return <div className="main-div">
        <h1>Scheduler</h1>
        <Login isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}></Login>
    </div>
}

export default App
