import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Pageheader from "@/layout/pageheader";

const Contact = () => {
	return (
		<div className="w-full h-screen overflow-x-hidden bg-[#A7C796]/22">
			{/* NAV BAR */}
			<Navbar />

			{/* PORTFOLIO HEADER */}
			<Pageheader
				headerpic={"42637.jpg"}
				title={"Contact Us!"}
				desc={
					<>
						Whether you’re an irregular student, have a question
						about projects, or just want to collaborate,
						<br /> we’re here to help. Drop us a message and we’ll
						make sure you’re connected!
					</>
				}
			/>

			{/* CONTACT SECTION */}
			<section className="w-full flex justify-center py-25 px-5">
				{/* CONTAINER */}
				<div className="w-full flex justify-center lg:items-start items-center lg:flex-row flex-col gap-11.5">
					{/* CONTACT FORM */}
					<div className="lg:w-1/2 w-full bg-[#FFF8DE]/68 rounded-2xl lg:px-17 px-8 pt-10 pb-12">
						<h1 className="text-[#A7C796] text-3xl font-extrabold mb-9">
							Send us a Message
						</h1>

						<form className="flex flex-col gap-5">
							{/* NAME + EMAIL */}
							<div className="grid grid-cols-2 lg:gap-12.25 gap-6">
								{/* NAME */}
								<div className="flex flex-col gap-1.5 w-full">
									<label className="text-[#9E8576] text-sm">
										Name
									</label>
									<input
										type="text"
										placeholder="Your name"
										className="w-full border border-[#A7C796] rounded-lg text-[#9E8576] text-sm p-2.5 placeholder:text-[#B5A996] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#A7C796]/40"
									/>
								</div>

								{/* EMAIL */}
								<div className="flex flex-col gap-1.5 w-full">
									<label className="text-[#9E8576] text-sm">
										Email
									</label>
									<input
										type="email"
										placeholder="Your email"
										className="w-full border border-[#A7C796] rounded-lg text-[#9E8576] text-sm p-2.5 placeholder:text-[#B5A996] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#A7C796]/40"
									/>
								</div>
							</div>

							{/* SUBJECT */}
							<div className="flex flex-col gap-1.5">
								<label className="text-[#9E8576] text-sm">
									Subject
								</label>
								<input
									type="text"
									placeholder="What’s this about?"
									className="w-full border border-[#A7C796] rounded-lg text-[#9E8576] text-sm p-2.5 placeholder:text-[#B5A996] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#A7C796]/40"
								/>
							</div>

							{/* MESSAGE */}
							<div className="flex flex-col gap-1.5">
								<label className="text-[#9E8576] text-sm">
									Message
								</label>
								<textarea
									placeholder="Your message..."
									className="w-full h-32 border border-[#A7C796] rounded-lg text-[#9E8576] text-sm p-2.5 placeholder:text-[#B5A996] transition-all duration-300 ease-in-out focus:outline-none resize-none bg-[#7FBF83]/25 focus:ring-2 focus:ring-[#A7C796]/40"
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-[#7FBF83]/35 transition-all duration-300 ease-in-out hover:bg-[#7FBF83]/50 rounded-lg py-2 text-[#8A6E5D] text-sm font-semibold mt-2.5">
								Send Message
							</button>
						</form>
					</div>

					{/* CONTACT INFORMATION */}
					<div className="flex flex-col gap-11.25 lg:w-1/3 w-full">
						{/* INFO HEADER */}
						<h1 className="text-[#9E8576] text-3xl font-bold">
							Contact Information
						</h1>

						{/* INFO GRID */}
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-[#7FBF83]/25 w-full h-30 rounded-lg"></div>
							<div className="bg-[#7FBF83]/25 w-full h-30 rounded-lg"></div>
							<div className="bg-[#7FBF83]/25 w-full h-30 rounded-lg"></div>
							<div className="bg-[#7FBF83]/25 w-full h-30 rounded-lg"></div>
						</div>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<Footer />
		</div>
	);
};

export default Contact;
