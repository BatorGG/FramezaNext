import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectToDatabase from '@/lib/mongoose';
import User from '@/models/User';
import { serialize } from 'cookie';

export async function POST(req) {

    try {
        await connectToDatabase();
        const { username, password } = await req.json();
        const email = username;
        
        const user = await User.findOne({ email });
        console.log(user);

        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' });
        }
        else {
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return NextResponse.json({ success: false, message: 'Wrong password' });
            }
            else {

                // Generate a JWT token
                const token = jwt.sign({ email: user.email, credits: user.credits }, process.env.JWT, { expiresIn: '24h' });
                return NextResponse.json({ success: true, token });

            }
        }
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: 'Error logging in' });
    }
}