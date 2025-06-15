import {useState} from "react";

function Login({isAuthenticated, setAuthenticated}) {
    const [isRegister, setRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [users, setUsers] = useState([]);

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(users);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        setUsers([...users, {
            "username": username,
            "password": password
        }])
    }

    return (
        <>
            <h3>{ isRegister ? "Register" : "Log In" }</h3>
            <form onSubmit={isRegister ? handleRegister : handleLogin}>
                <div className="login-div">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    {
                        isRegister &&
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                    }

                    <span style={{
                        marginTop: "32px"
                    }}></span>

                    { 
                        // Different content depending on if in "Registration Mode" or not.
                        !isRegister &&
                        <>
                            <p className="register-p" onClick={() => setRegister(true)}>No account? Register here.</p>
                            <button type="submit">Log In</button>
                        </>
                    }

                    { 
                        isRegister &&
                        <>
                            <p className="register-p" onClick={() => setRegister(false)}>Have an account? Login instead.</p>
                            <button type="submit">Register</button>
                        </>
                    }

                </div>
            </form>
        </>
    );
}

export default Login;
