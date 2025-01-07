import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { username, password } = await req.json();
        console.log('Request body:', { username, password });

        if (!username || !password) {
            return NextResponse.json({ success: false, message: "Username and password are required" });
        }

        // Simulate a login check (Replace with your actual login logic)
        if (username === 'admin' && password === 'password') {
            console.log('Login successful');
            return NextResponse.json({ success: true, jwt: "token" });
        } else {
            console.log('Invalid credentials');
            return NextResponse.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ success: false, message: "Server error" });
    }
}