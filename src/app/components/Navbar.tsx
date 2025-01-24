"use client"
import React from 'react'
import { FaPeopleGroup } from 'react-icons/fa6';

const Navbar = () => {
    const navItems = ["Home",
        "Services",
        "Features",
        "Screenshot",
        "Pricing",
        "Testimonial",
        "Contact"];

    const NavLink = ({
        children,
        to,
    }: {
        children: React.ReactNode;
        to: string;
    }) => {
        const handleScroll = (e: React.MouseEvent) => {
            e.preventDefault();
            const element = document.getElementById(to.slice(1));
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        };

        return (
            <li className="hover:underline underline-offset-4 duration-300 cursor-pointer">
                <a href={to} onClick={handleScroll}>
                    {children}
                </a>
            </li>
        );
    };

    return (
        <nav className='flex justify-around items-center py-6 bg-black bg-opacity-10 backdrop-blur-lg text-white fixed top-0 left-0 z-10 w-screen border-b border-slate-50 border-opacity-30'>
            <div className='flex justify-center items-center'><FaPeopleGroup size={30} /><h2 className='text-2xl'>Tech Guys</h2><FaPeopleGroup size={30} /></div>
            <ul className="hidden md:flex justify-center items-center gap-8">
                {navItems.map((item) => {
                    const sectionId = item?.toLowerCase();
                    return (
                        <NavLink key={item} to={`#${sectionId}`}>
                            {item}
                        </NavLink>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navbar