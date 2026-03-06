"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, BookOpen, Megaphone, FolderHeart, Users, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);


    const navItems = [
        { title: "Home", link: "/", icon: <Home size={28} /> },
        { title: "About", link: "/about", icon: <BookOpen size={28} /> },
        { title: "Announcements", link: "/announcement", icon: <Megaphone size={28} /> },
        { title: "Portfolio", link: "/portfolio", icon: <FolderHeart size={28} /> },
        { title: "Classes", link: "/class", icon: <Users size={28} /> },
        { title: "Contact", link: "/contact", icon: <Phone size={28} /> },
    ];


    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex justify-between items-center gap-3 lg:gap-6 px-6 py-4 rounded-full bg-[#FCFBF4]/80 backdrop-blur-md shadow-lg border border-white/60"
            >
                <img
                    src="/assets/studiot3ch_logo.png"
                    alt="studiot3ch_logo"
                    className="w-12 h-12 object-contain mr-2"
                />


                <div className="w-[1px] h-8 bg-gray-300/50 hidden lg:block"></div>


                <ul className="hidden lg:flex items-center gap-2">
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.link;
                        return (
                            <Link key={index} href={item.link}>
                                <motion.li
                                    whileHover={{ scale: 1.1, y: -6 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group relative flex items-center justify-center rounded-full p-3 transition-colors duration-300 ease-in-out
                                        ${
                                            isActive
                                                ? "text-[#7FBF83] bg-black/5 shadow-inner"
                                                : "text-gray-500 hover:text-gray-800 hover:bg-black/5"
                                        }`}
                                >
                                    {item.icon}


                                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap pointer-events-none border border-gray-100">
                                        {item.title}
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-100"></span>
                                    </span>
                                </motion.li>
                            </Link>
                        );
                    })}
                </ul>
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


                <div className="lg:hidden flex items-center">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-gray-800 rounded-full hover:bg-black/5"
                    >
                        <span
                            className="icon block"
                            style={{
                                "--svg": "url('https://api.iconify.design/tabler/menu-3.svg')",
                                "--size": "30px",
                                backgroundColor: "currentColor"
                            }}
                        />
                    </motion.button>
                </div>
            </motion.nav>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-64 z-50 origin-bottom"
                    >
                        <div className="bg-[#FCFBF4]/90 backdrop-blur-md w-4 h-4 absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-45 z-0 border-r border-b border-white/60" />


                        <ul className="relative z-10 bg-[#FCFBF4]/95 backdrop-blur-xl shadow-xl rounded-2xl flex flex-col gap-1 p-3 border border-white/60">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.link;
                                return (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <motion.li
                                            whileHover={{ x: 5 }}
                                            className={`flex items-center gap-4 rounded-xl py-3 px-5 transition-colors duration-300 ease-in-out text-base font-medium
                                                ${
                                                    isActive
                                                        ? "text-[#7FBF83] bg-black/5"
                                                        : "text-gray-500 hover:text-gray-800 hover:bg-black/5"
                                                }`}
                                        >
                                            <span>{item.icon}</span>
                                            {item.title}
                                        </motion.li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export default Navbar;
