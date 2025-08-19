'use client';

import { useState } from 'react';
import Link from 'next/link';
import {IoMenuOutline} from "react-icons/io5";

export default function MobileNav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <button className="FP-mobile-nav-icon" onClick={toggleMenu}>
                <IoMenuOutline className="FP-mobile-nav-icon" size={50}/>
            </button>
            <nav className={`FP-mobile-nav ${isMenuOpen ? 'FP-mobile-nav-open' : 'FP-mobile-nav-closed'}`}>
                <ul className="FP-mobile-navList">
                    <li className="FP-mobile-navItem"><Link href="/">Home</Link></li>
                    <li className="FP-mobile-navItem"><Link href="/#projects">Projects</Link></li>
                    <li className="FP-mobile-navItem"><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </>
    );
}