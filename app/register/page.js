'use client';
import Link from "next/link";
import "../globals.css";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleClick = async () => {
        if (!username || !password) {
            setErrorMessage("Email and password are required.");
            return;
        }

        if (password !== passwordAgain) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        console.log('fetching');

        try {
            let response = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({
                    username: username, // Ensure this matches the API route's expected fields
                    password: password
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response data:', data);

            if (data.success) {
                // Handle successful login
                console.log("Login successful:", data.jwt);
            } else {
                // Handle login failure
                setErrorMessage("Login failed. Please check your username and password.");
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setErrorMessage("There was a problem with the login request.");
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <p id="error-message">{errorMessage}</p>
            <input id="username" type="text" placeholder="Email address" onChange={e => setUsername(e.target.value)} />
            <input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <input id="passwordAgain" type="password" placeholder="Password again" onChange={e => setPasswordAgain(e.target.value)} />
            <button id="login" onClick={handleClick}>Register</button>
            <Link href="/login">
                <p className="no-account">Have an acount? <u class="underlined">Click here!</u></p>
            </Link>
        </div>
        
    );
}