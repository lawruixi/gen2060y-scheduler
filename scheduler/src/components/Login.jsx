import {useState} from "react";

function Login({isAuthenticated, setAuthenticated, users, setUsers, setLoggedInUser}) {
    const [isRegister, setRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [statusMessageParams, setStatusMessageParams] = useState(
        { active: false, className: "", message: "" }
    );

    const handleLogin = (e) => {
        e.preventDefault();

        const matchingUsers = users.filter((user) => user.username == username && user.password == password);

        if (matchingUsers.length <= 0) {
            setStatusMessageParams({
                active: true,
                message: "Username or password is incorrect.",
                className: "error"
            })

            return;
        }

        setLoggedInUser(matchingUsers[0]);
        setAuthenticated(true)
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (users.filter((user) => user.username == username).length > 0) {
            setStatusMessageParams({
                active: true,
                message: "User with this username already exists!",
                className: "error"
            })

            return;
        }

        // Guard clause: Passwords do not match.
        if (confirmPassword != password) {
            setStatusMessageParams({
                active: true,
                message: "Passwords do not match!",
                className: "error"
            })

            return;
        }

        if (username.includes(" ") || username.includes(",")) {
            setStatusMessageParams({
                active: true,
                message: "Invalid character! Commas and spaces are not allowed in usernames.",
                className: "error"
            })

            return;
        }

        setUsers([...users, {
            "username": username,
            "password": password
        }])

        setRegister(false);

        setStatusMessageParams({
            active: true,
            message: "Registration successful!",
            className: "success"
        })

        setUsername("");
        setPassword("");
        setConfirmPassword("");

        return;
    };

    if(isAuthenticated) {
        return;
    }

    return (
        <>
            <h3>{ isRegister ? "Register" : "Log In" }</h3>
            {
                statusMessageParams.active &&
                <div className={`statusMessage ${statusMessageParams.className}`}>
                    <p>{statusMessageParams.message}</p>
                </div>
            }
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
