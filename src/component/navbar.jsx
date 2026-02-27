"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	/* NAV LIST ITEMS */
	const navItems = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "About Our Block",
			link: "/about",
		},
		{
			title: "Portfolio",
			link: "/portfolio",
		},
		{
			title: "Class Profiles",
			link: "/class",
		},
		{
			title: "Contact",
			link: "/contact",
		},
	];

	return (
		<nav className="bg-[#FFF8DE] w-full flex justify-between items-center lg:px-20 px-5 py-2.5">
			{/* LOGO */}
			<img
				src="/assets/studiot3ch_logo.png"
				alt="tudiot3ch_log"
				className="min-w-15 lg:w-25 w-15"
			/>

			{/* NAVBAR LIST LINKS */}
			<ul className="text-[#7FBF83] text-2xl lg:flex items-center gap-5 hidden">
				{navItems.map((item, index) => {
					const isActive = pathname === item.link;
					return (
						<Link key={index} href={item.link}>
							<li
								className={`rounded-full py-2 px-8 transition-all duration-300 ease-in-out
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
						"--svg":
							"url('https://api.iconify.design/tabler/menu-3.svg')",
						"--size": "30px",
					}}
				/>

				{/* MENU DROPDOWN */}
				{isOpen && (
					<div className="absolute top-12 right-0 z-50">
						{/* ARROW */}
						<div className="bg-[#fff3c8] w-8 h-8 absolute -top-2 right-3 rotate-45 z-0" />

						<ul className="relative z-10 bg-[#fff3c8] shadow-lg rounded-2xl text-[#7FBF83] text-xl flex flex-col gap-1 p-2 min-w-50">
							{navItems.map((item, index) => {
								const isActive = pathname === item.link;
								return (
									<Link
										key={index}
										href={item.link}
										onClick={() => setIsOpen(false)}>
										<li
											className={`rounded-full py-2 px-5 transition-all duration-300 ease-in-out
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
