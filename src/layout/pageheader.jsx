const Pageheader = ({ headerpic, title, desc }) => {
	return (
        /* HEADER IMAGE */
		<div
			className="w-full h-[50vh] px-5 relative bg-cover bg-center bg-[#FFF8DE]/50 bg-blend-overlay"
			style={{
				backgroundImage: `url('/assets/${headerpic}')`,
			}}>
            <div className="" />
			{/* HEADER CONTENT */}
			<div className="h-full relative flex flex-col justify-center items-center gap-6 text-center lg:py-24 py-10">
				<h1 className="text-[#F5F5F5] text-7xl font-bold">{title}</h1>
				<p className="text-[#FFFEFE] text-xl font-light italic">{desc}</p>
			</div>
		</div>
	);
};

export default Pageheader;
