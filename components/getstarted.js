'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { decodeJWT }  from "@/lib/decodejwt.js";
import { useState, useEffect } from 'react';
import { set } from "mongoose";

const GetStarted = () => {

    const pathname = usePathname()

    const [token, setToken] = useState("")
    const [buttonText, setButtonText] = useState("Get Started");
    const [href, setHref] = useState("/login");

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        const decoded = decodeJWT(token);
        console.log(decoded)
        console.log(pathname)

        if (decoded) {

            if (pathname === "/dashboard") {
                setButtonText(decoded.credits + " Credits");
                setHref("/credits");

            }
            else {
                setButtonText("Dashboard");
                setHref("/dashboard");
            }
            
            

        } else {
            setButtonText("Get Started");
            setHref("/login");
        }

        if (pathname === "/register") {
            setButtonText("Login");
            setHref("/login");
        }
        if (pathname === "/login") {
            setButtonText("Register");
            setHref("/register");
        }



    }, [pathname])

    

    return (
        <Link href={href}>
            <button className="get-started-btn">{buttonText}</button>
        </Link>
    );
};

export default GetStarted;