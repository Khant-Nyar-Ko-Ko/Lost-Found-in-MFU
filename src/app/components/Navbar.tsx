"use client"
import React, { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        "Home",
        "Services",
        "Features",
        "Screenshot",
        "Pricing",
        "Testimonial",
        "Contact",
    ];

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="flex justify-between md:justify-around items-center py-6 px-4 bg-opacity-10 backdrop-blur-lg text-white fixed top-0 left-0 z-10 w-full border-b border-slate-50 border-opacity-30">
            <div className="flex items-center">
                <FaPeopleGroup size={30} />
                <h2 className="text-2xl ml-2">Tech Guys</h2>
            </div>

            <ul className="hidden md:flex gap-8">
                {navItems.map((item) => {
                    const sectionId = item.toLowerCase();
                    return (
                        <NavLink key={item} to={`#${sectionId}`}>
                            {item}
                        </NavLink>
                    );
                })}
            </ul>

            <div className="md:hidden items-center mt-2">
                <button
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    className="text-white"
                >
                    {isMobileMenuOpen ? <HiX size={30} /> : <HiOutlineMenu size={30} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-gradient-to-br from-blue-400 to-teal-400 bg-opacity-95 backdrop-blur-xl text-white">
                    <ul className="flex flex-col items-center gap-6 py-4">
                        {navItems.map((item) => {
                            const sectionId = item.toLowerCase();
                            return (
                                <NavLink key={item} to={`#${sectionId}`}>
                                    {item}
                                </NavLink>
                            );
                        })}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
