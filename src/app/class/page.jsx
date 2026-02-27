import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Officerscard from "@/layout/officerscard";
import Pageheader from "@/layout/pageheader";
import { Students } from "@/const";
import Studentcard from "@/layout/studentcard";

const Class = () => {
	return (
		<div className="w-full h-screen overflow-x-hidden bg-[#FFF8DE]/44">
			{/* NAV BAR */}
			<Navbar />

			{/* PORTFOLIO HEADER */}
			<Pageheader
				headerpic={"42621.png"}
				title={"Class Profiles"}
				desc={
					<>
						Discover the people behind our block — each with their
						own story, <br /> dreams, and unique spark.
					</>
				}
			/>

			{/* SEARCH BAR */}
			<div className="flex justify-end items-center gap-5 my-9 lg:px-10 px-5">
				<span className="text-[#7FBF83] text-2xl">Search</span>

				{/* SEARCH INPUT */}
				<div className="flex items-center w-60 border border-[#7FBF83] rounded-2xl p-2">
					<input
						type="text"
						className="w-full px-2 text-[#9E8576] focus:outline-none"
					/>

					{/* SEARCH ICON */}
					<span
						className="icon bg-[#7FBF83]"
						style={{
							"--svg":
								"url('https://api.iconify.design/fa-solid/search.svg')",
							"--size": "20px",
						}}
					/>
				</div>
			</div>

			{/* CLASS OFFICERS SECTION */}
			<section className="w-full flex flex-col items-center pb-16 lg:px-26.5 px-5">
				<h1 className="lg:w-150 w-full bg-[#B5A996] text-[#F5F5F5] lg:text-5xl text-2xl font-bold rounded-full py-3 text-center lg:mb-24 mb-10">
					Class Officers
				</h1>

				{/* GRID CLASS CARD */}
				<div className="lg:w-fit w-full grid lg:grid-cols-3 grid-cols-2 lg:gap-16 gap-5">
					{Students.officers.map((officer, index) => (
						<Officerscard
							key={index}
							studImg={officer.studImg}
							name={officer.name}
							role={officer.role}
							subRole={officer.subRole}
							quotes={officer.quotes}
						/>
					))}
				</div>
			</section>

			{/* CLASS STUDENTS SECTION */}
			<section className="w-full flex flex-col items-center pb-16 lg:px-0 px-5">
				<h1 className="lg:w-150 w-full bg-[#B5A996] text-[#F5F5F5] lg:text-5xl text-2xl font-bold rounded-full py-3 text-center lg:mb-24 mb-10">
					Students
				</h1>

				{/* GRID CLASS CARD */}
				<div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-4.5 gap-5">
					{Students.class.map((officer, index) => (
						<Studentcard
							key={index}
							studImg={officer.studImg}
							name={officer.name}
							role={officer.role}
							subRole={officer.subRole}
							quotes={officer.quotes}
						/>
					))}
				</div>
			</section>

			{/* FOOTER */}
			<Footer />
		</div>
	);
};

export default Class;
