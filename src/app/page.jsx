import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Explorecard from "@/layout/explorecard";

const Home = () => {
	const exploreCard = [
		{
			title: "About the Block",
			desc: "Learn more about our officers, committees, and how our block is organized.",
		},
		{
			title: "Portfolio",
			desc: "Explore the projects and outputs we’ve created across different subjects.",
		},
		{
			title: "Class Profiles",
			desc: "Meet the students who make up our block.",
		},
		{
			title: "Reach Out",
			desc: "Get in touch with us for concerns, collaborations, or if you’re not yet added to the GC.",
		},
	];

	return (
		<div className="w-full h-screen overflow-x-hidden bg-[#FFF8DE]/44">
			{/* NAV BAR */}
			<Navbar />

			{/* MAIN PAGE */}
			<main className="w-full h-full px-5 relative bg-[url('/assets/42622.jpg')] bg-cover bg-center bg-[#FFF8DE]/60 bg-blend-overlay">
				{/* CONTENT */}
				<div className="h-full relative flex flex-col justify-center items-center">
					{/* LOGO IMAGE */}
					<img
						src="/assets/studiot3ch_logo.png"
						alt="studiot3ch_logo"
						className="min-w-30 w-50 min-h-30 h-38"
					/>
					{/* HEADER */}
					<h1 className="lg:text-8xl text-6xl font-bold text-[#8A6E5D] text-center">
						Welcome to Our Block
					</h1>
					{/* DESCRIPTION */}
					<div className="text-center mt-5">
						<p className="text-[#7D5D4A] lg:text-xl">
							Discover the people, projects, and passions that
							shape our class and
						</p>
						<p className="text-[#7D5D4A] lg:text-xl">
							define our journey together.
						</p>
					</div>

					{/* BUTTON */}
					<button className="text-[#FFF8DE] lg:text-2xl bg-[#A7C796] rounded-full py-4 px-6 my-10 transition-all duration-300 ease-in-out hover:scale-105">
						Explore Our World
					</button>
				</div>
			</main>

			{/* EXPLORE SECTION */}
			<section className="w-full pt-12 pb-20 px-5">
				{/* HEADER */}
				<div className="flex flex-col items-center gap-5 text-[#9E8576]">
					<h1 className="text-5xl font-bold">What to Explore?</h1>
					<p className="text-xl font-light italic">
						Discover the different sections of our block.
					</p>
				</div>

				{/* GRID CARD */}
				<div className="flex justify-center flex-wrap lg:gap-19 gap-10 mt-16">
					{exploreCard.map((card, index) => (
						<Explorecard
							key={index}
							title={card.title}
							description={card.desc}
						/>
					))}
				</div>
			</section>

			{/* REACH OUT SECTION */}
			<section className="w-full bg-[#7FBF83]/38 text-center pt-11 pb-14 px-5">
				{/* HEADER */}
				<h1 className="text-[#FFF8DE] text-5xl font-bold mb-4">
					Still finding your way?
				</h1>
				{/* DESCRIPTION */}
				<p className="text-[#9E8576] text-xl font-light italic mb-12">
					If you're not yet connected with our block, send us a
					message and we’ll welcome you in.
				</p>
				{/* BUTTON */}
				<button className="bg-[#B5A996] rounded-full text-[#FFF8DE] lg:text-2xl font-bold py-3 px-12 transition-all duration-300 ease-in-out hover:scale-105">
					Reach Out
				</button>
			</section>

			{/* FOOTER */}
			<Footer />
		</div>
	);
};

export default Home;
