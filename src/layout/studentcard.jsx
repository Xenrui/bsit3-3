const Studentcard = ({ studImg, name, role, subRole, quotes }) => {
	return (
		<div className="group lg:w-57.5 w-full bg-[#72BF91]/50 lg:py-7 lg:px-7.5 p-3 rounded-2xl text-center flex justify-center items-center flex-col">
			{/* IMAGE */}
			<div
				className="lg:w-42.5 w-full lg:h-42.5 h-37 bg-[#FFF8DE]/70 rounded-xl relative mb-2"
				style={{
					boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
				}}>
				<img
					src={`/assets/students/${studImg || "pogi.png"}`}
					alt=""
					className="absolute bottom-0 rounded-xl transition-all duration-300 ease-in-out group-hover:scale-103 group-hover:-translate-y-1"
					style={{
						filter: "drop-shadow(rgba(0, 0, 0, 0.16) 0px 3px 6px) drop-shadow(rgba(0, 0, 0, 0.23) 0px 3px 6px)",
					}}
				/>
			</div>

			{/* TITLE CARD */}
			<h3 className="text-[#FFF8DE] font-semibold mb-1">
				{name || "Name..."}
			</h3>
			{/* ROLE */}
			<p className="text-[#9E8576] text-xs font-semibold">{role}</p>
			<p className="text-[#9E8576] text-[8px] font-light italic">
				{subRole}
			</p>
			<p className="text-[#F9F6EB] lg:text-sm text-xs italic text-wrap mt-2">
				“ {quotes || "Quotes here..."} “
			</p>
		</div>
	);
};

export default Studentcard;
