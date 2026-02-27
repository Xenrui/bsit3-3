const ProjectCard = ({ img, title, desc, tools, index }) => {
	return (
		<div
			className={`flex justify-center items-start lg:gap-14 gap-5 flex-wrap ${
				index % 2 !== 0 ? "flex-row-reverse" : ""
			}`}>
			{/* IMAGE */}
			<div className="lg:w-106.5 w-full flex justify-center">
				<div className="w-full aspect-4/2 relative overflow-hidden rounded-lg">
					<img
						src={`/assets/projects/${img}`}
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
			</div>

			{/* CONTENT */}
			<div className="lg:w-1/2 w-full flex flex-col lg:gap-4.5 gap-3">
				<h2 className="text-[#9E8576] text-3xl font-semibold">
					{title}
				</h2>

				<p className="text-[#7FBF83] text-xl">{desc}</p>

				<div className="flex flex-row gap-3 flex-wrap">
					{tools.map((tool, i) => (
						<span
							key={i}
							className="bg-[#B5A996] text-[#FFF8DE] text-xs font-bold py-1.5 px-3 rounded-full">
							{tool}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
