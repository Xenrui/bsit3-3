import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Pageheader from "@/layout/pageheader";
import { Projects } from "@/const";
import ProjectCard from "@/layout/projects";

const Portfolio = () => {
	return (
		<div className="w-full h-screen overflow-x-hidden bg-[#FFF8DE]/44">
			{/* NAV BAR */}
			<Navbar />

			{/* PORTFOLIO HEADER */}
			<Pageheader
				headerpic={"496117.png"}
				title={"Portfolio"}
				desc={
					<>
						A collection of our projects, showcasing the skills,
						creativity, and <br /> teamwork behind every output.
					</>
				}
			/>

			<section className="w-full flex flex-col items-center py-16 lg:px-26.5 px-5">
				<h1 className="text-[#8A6E5D] text-6xl font-bold text-center mb-20.5">
					Featured Projects
				</h1>

				{/* PROJECT CONTAINER */}
				<div className="flex flex-col gap-10">
					{Projects.map((proj, index) => (
						<ProjectCard
							key={index}
							index={index}
							img={proj.picProj}
							title={proj.titleProj}
							desc={proj.descProj}
							tools={proj.tools}
						/>
					))}
				</div>
			</section>

			{/* FOOTER */}
			<Footer />
		</div>
	);
};

export default Portfolio;
