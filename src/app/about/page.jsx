import Footer from "@/component/footer";
import Navbar from "@/component/navbar";

const About = () => {
	return (
		<div className="w-full h-screen overflow-x-hidden bg-[#FFF8DE]/44">
			{/* NAV BAR */}
			<Navbar />

			{/* ABOUT */}
			<main className="text-center py-12 px-5">
				<h1 className="text-[#8A6E5D] text-7xl font-bold mb-6">
					About Our Block
				</h1>
				<p className="text-[#7FBF83] text-xl font-light italic">
					Welcome to our little corner of the digital world — a
					classroom where curiosity, creativity, and code come
					together. We <br /> are BSIT 3-3 from the Polytechnic
					University of the Philippines, a family of 56 students
					united by technology,
					<br /> collaboration, and a passion for learning.
				</p>
			</main>

			{/* SECTION */}
			<section className="w-full h-full px-5 relative bg-[url('/assets/42624.png')] bg-cover bg-center bg-[#FFF8DE]/60 bg-blend-overlay">
				{/* CONTENT */}
				<div className="h-full relative flex flex-col justify-center items-center"></div>
			</section>

			{/* FOOTER */}
			<Footer />
		</div>
	);
};

export default About;
