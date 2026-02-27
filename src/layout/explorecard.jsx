const Explorecard = ({ title, description }) => {
	return (
		<div className="bg-[#7FBF83]/38 w-63 min-h-55 rounded-2xl flex flex-col justify-start items-center gap-3 text-center p-6 transition-all duration-300 ease-in-out hover:scale-105">
			<div className="w-24 h-24 bg-[#FFF8DE]/70 rounded-[10px]"></div>

            {/* TITLE CARD */}
            <h3 className="text-[#FFF8DE] text-xl">{title}</h3>
            <p className="text-[#9E8576] text-xs font-light italic">{description}</p>
		</div>
	);
};

export default Explorecard;
