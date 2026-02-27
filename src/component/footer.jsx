import Link from "next/link";

const Footer = () => {
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
			link: "contact",
		},
	];

	return (
		<div className="bg-[#FFF8DE]/44 py-6 lg:px-19 px-10 flex justify-between lg:items-start items-center lg:flex-row flex-col">
			{/* LOGO */}
			<img
				src="/assets/studiot3ch_logo.png"
				alt="tudiot3ch_log"
				className="min-w-20 lg:w-51 w-30 lg:mb-0 mb-5"
			/>

			<div className="flex lg:flex-row flex-col lg:gap-50 gap-15 lg:text-start text-center">
				{/* QUICK LINKS */}
				<ul className="list-none">
					<li className="text-xl text-[#7FBF83] font-medium mb-1.5">
						Quick Links
					</li>
					{navItems.map((item, index) => (
						<li
							key={index}
							className="text-[#9E8576] font-medium mb-1 hover:underline">
							<Link href={item.link}>{item.title}</Link>
						</li>
					))}
				</ul>

				<div className="flex flex-col">
					{/* CONTANCT */}
					<p className="text-xl text-[#7FBF83] font-medium mb-1.5">
						Contact
					</p>
					<p className="text-xs text-[#7FBF83] font-medium italic mb-7">
						For questions, suggestions, or concerns, contact our
						block officers.
					</p>

					{/* PRESIDENT */}
					<ul className="list-none">
						<li className="text-sm text-[#7FBF83] font-medium mb-1.5">
							President:
						</li>
						<li className="text-sm text-[#9E8576] font-medium mb-1">
							Name: Lance Joseph Dayawon
						</li>
						<li className="text-sm text-[#9E8576] font-medium mb-1">
                            Facebook:{' '}
                            <a href="" className="hover:underline">facebook.com/juan.delacruz</a>
						</li>
						<li className="text-sm text-[#9E8576] font-medium mb-1">
							Email:{' '}
                            <a href="mailto:" className="hover:underline">juan.delacruz@email.com</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
