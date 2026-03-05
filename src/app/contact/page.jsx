"use client";

import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import { Facebook, Mail, ShieldCheck } from "lucide-react";

const Contact = () => {
    return (

        <div className="w-full min-h-screen overflow-x-hidden bg-[#FFF8DE]/44">
            <Navbar />

            <main className="text-center py-16 px-5">
                <h1 className="text-[#8A6E5D] text-7xl font-bold mb-6">
                    Contact Us!
                </h1>
                <p className="text-[#7FBF83] text-xl font-light italic leading-relaxed max-w-4xl mx-auto">
                    Whether you’re an irregular student, have a question
                    about projects, or just want to collaborate, we’re here to help. 
                    Drop us a message and we’ll make sure you’re connected!
                </p>
            </main>

            <section className="w-full py-20 px-5 relative bg-[url('/assets/42624.png')] bg-cover bg-center bg-[#FFF8DE]/80 bg-blend-overlay">
                
                <div className="w-full max-w-7xl mx-auto flex justify-center lg:items-start items-center lg:flex-row flex-col gap-12 relative z-10">
                    
                    {/* CONTACT FORM */}
                    <div className="lg:w-1/2 w-full bg-white/40 backdrop-blur-md rounded-3xl lg:px-12 px-8 pt-10 pb-12 border border-white/20 shadow-xl">
                        <h1 className="text-[#8A6E5D] text-4xl font-extrabold mb-10">
                            Send us a Message
                        </h1>

                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="text-[#8A6E5D] text-base font-semibold">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full border border-[#8A6E5D]/30 rounded-lg text-[#9E8576] text-base p-3 placeholder:text-[#B5A996] focus:outline-none focus:ring-2 focus:ring-[#8A6E5D]/40 bg-white/50"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label className="text-[#8A6E5D] text-base font-semibold">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full border border-[#8A6E5D]/30 rounded-lg text-[#9E8576] text-base p-3 placeholder:text-[#B5A996] focus:outline-none focus:ring-2 focus:ring-[#8A6E5D]/40 bg-white/50"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[#8A6E5D] text-base font-semibold">Subject</label>
                                <input
                                    type="text"
                                    placeholder="What’s this about?"
                                    className="w-full border border-[#8A6E5D]/30 rounded-lg text-[#9E8576] text-base p-3 placeholder:text-[#B5A996] focus:outline-none focus:ring-2 focus:ring-[#8A6E5D]/40 bg-white/50"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[#8A6E5D] text-base font-semibold">Message</label>
                                <textarea
                                    placeholder="Your message..."
                                    className="w-full h-40 border border-[#8A6E5D]/30 rounded-lg text-[#9E8576] text-base p-3 placeholder:text-[#B5A996] focus:outline-none resize-none bg-white/50 focus:ring-2 focus:ring-[#8A6E5D]/40"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#8A6E5D] hover:bg-[#7D5D4A] transition-all duration-300 ease-in-out rounded-lg py-3 text-white text-lg font-bold mt-4 shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* CONTACT INFORMATION */}
                    <div className="flex flex-col gap-10 lg:w-1/3 w-full">
                        <h1 className="text-[#8A6E5D] text-4xl font-bold">
                            Contact Information
                        </h1>

                        <div className="flex flex-col gap-6">
                            {/* PRESIDENT INFO CARD */}
                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl flex items-center gap-5 transition-all duration-300 hover:scale-105">
                                <ShieldCheck className="text-[#8A6E5D]" size={40} />
                                <div>
                                    <p className="text-[#8A6E5D] text-sm font-bold uppercase tracking-wider">President</p>
                                    <p className="text-[#9E8576] text-xl font-bold">Lance Joseph Dayawon</p>
                                </div>
                            </div>

                            {/* FACEBOOK INFO CARD */}
                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl flex flex-col gap-4 transition-all duration-300 hover:scale-105">
                                <div className="flex items-center gap-5">
                                    <Facebook className="text-[#8A6E5D]" size={40} />
                                    <p className="text-[#8A6E5D] text-sm font-bold uppercase tracking-wider">Facebook</p>
                                </div>
                                <div className="flex flex-col gap-2 ml-14">
                                    <a href="https://www.facebook.com/lance.joseph.dayawon" target="_blank" rel="noopener noreferrer" className="text-[#9E8576] text-lg hover:underline font-medium">Lance Joseph Dayawon</a>
                                    <a href="https://www.facebook.com/StudioT3CH" target="_blank" rel="noopener noreferrer" className="text-[#9E8576] text-lg hover:underline font-medium">Studio T3CH</a>
                                </div>
                            </div>

                            {/* EMAIL INFO CARD */}
                            <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl flex flex-col gap-4 transition-all duration-300 hover:scale-105">
                                <div className="flex items-center gap-5">
                                    <Mail className="text-[#8A6E5D]" size={40} />
                                    <p className="text-[#8A6E5D] text-sm font-bold uppercase tracking-wider">Email</p>
                                </div>
                                <div className="flex flex-col gap-2 ml-14">
                                    <a href="mailto:lancejosephmanalangdayawon3@gmail.com" className="text-[#9E8576] text-lg hover:underline font-medium">lancejosephdayawon@gmail.com</a>
                                    <a href="mailto:bsit33.2525@gmail.com" className="text-[#9E8576] text-lg hover:underline font-medium">bsit33.2525@gmail.com</a>
                                </div>
                            </div>
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