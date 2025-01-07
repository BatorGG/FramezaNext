"use client";

import Link from "next/link";
import Image from "next/image";
import Getstarted from "@/components/getstarted";


const Navbar = () => {


    

    return (
        <nav className="top-bar">
            <Link href="/" className="logo">
                <div className="logo"><Image src="/logo.png" alt="Logo" width={30} height={30} />Frameza</div>
            </Link>
            
            <Getstarted />
        </nav>
    )
}

export default Navbar;