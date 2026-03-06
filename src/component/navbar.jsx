"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    /* NAV LIST ITEMS */
    const navItems = [
        { title: "Home", link: "/" },
        { title: "About Our Block", link: "/about" },
        { title: "Announcement", link: "/announcement" }, 
        { title: "Portfolio", link: "/portfolio" },
        { title: "Class Profiles", link: "/class" },
        { title: "Contact", link: "/contact" },
    ];

    return (
        <nav className="bg-[#FFF8DE] w-full flex justify-between items-center lg:px-20 px-5 py-1.5 shadow-sm z-50 sticky top-0">
            {/* LOGO */}
            <img
                src="/assets/studiot3ch_logo.png"
                alt="studiot3ch_logo"
                className="min-w-15 lg:w-20 w-12" 
            />

            {/* NAVBAR LIST LINKS */}
            <ul className="text-[#7FBF83] text-sm lg:text-base lg:flex items-center gap-2 hidden">
                {navItems.map((item, index) => {
                    const isActive = pathname === item.link;
                    return (
                        <Link key={index} href={item.link}>
                            <li
                                className={`rounded-full py-1 px-4 transition-all duration-300 ease-in-out font-medium whitespace-nowrap
                                    ${
                                        isActive
                                            ? "text-[#FFF8DE] bg-[#B5A996]"
                                            : "hover:text-[#FFF8DE] hover:bg-[#B5A996]"
                                    }`}>
                                {item.title}
                            </li>
                        </Link>
                    );
                })}
            </ul>

            {/* MOBILE MENU */}
            <div className="relative lg:hidden">
                <span
                    onClick={() => setIsOpen(!isOpen)}
                    className="icon bg-[#7FBF83] cursor-pointer"
                    style={{
                        "--svg": "url('https://api.iconify.design/tabler/menu-3.svg')",
                        "--size": "24px", 
                    }}
                />

                {/* MENU DROPDOWN */}
                {isOpen && (
                    <div className="absolute top-10 right-0 z-50">
                        {/* ARROW */}
                        <div className="bg-[#FFF8DE] w-8 h-8 absolute -top-2 right-3 rotate-45 z-0 border border-gray-100" />

                        <ul className="relative z-10 bg-[#FFF8DE] shadow-lg rounded-2xl text-[#7FBF83] text-base flex flex-col gap-1 p-2 min-w-48 border border-gray-100">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.link;
                                return (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        onClick={() => setIsOpen(false)}>
                                        <li
                                            className={`rounded-full py-2 px-5 transition-all duration-300 ease-in-out font-medium
                                    ${
                                        isActive
                                            ? "text-[#FFF8DE] bg-[#B5A996]"
                                            : "hover:text-[#FFF8DE] hover:bg-[#B5A996]"
                                    }`}>
                                            {item.title}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;