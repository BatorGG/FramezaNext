'use client';
import Link from "next/link";
import "../globals.css";
import { useState } from "react";
import { serialize } from 'cookie';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [buttonText, setButtonText] = useState("Login");
    const router = useRouter();

    const handleClick = async () => {
        setButtonText("Logging in...");
        if (!username || !password) {
            setErrorMessage("Email and password are required.");
            return;
        }

        console.log('fetching');

        try {
            let response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: username, // Ensure this matches the API route's expected fields
                    password: password
                }),
                headers: { 'Content-Type': 'application/json' }
            });
            
            setButtonText("Login");

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response data:', data);

            if (data.success) {
                // Handle successful login
                console.log("Login successful:", data.token);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('jwt', data.token);
                }
                
                router.push('/dashboard');

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
            <button id="login" onClick={handleClick}>Login</button>
            <Link href="/register">
                <p className="no-account">No account? <u className="underlined">Click here!</u></p>
            </Link>
        </div>
    );
}
