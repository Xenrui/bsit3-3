"use client";


import { useState } from "react";
import { Search, Users, ExternalLink, X } from "lucide-react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import { Projects } from "@/const";


const Portfolio = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);


    const filteredProjects = Projects.filter(proj =>
        proj.titleProj.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (proj.developers && proj.developers.toLowerCase().includes(searchQuery.toLowerCase()))
    );


    const folderColors = [
        { bg: "bg-[#FFCFD2]", text: "text-[#E5989B]", border: "border-[#FFB5B9]" },
        { bg: "bg-[#FDE4CF]", text: "text-[#F4A261]", border: "border-[#FBCBA2]" },
        { bg: "bg-[#FBF8CC]", text: "text-[#D4A373]", border: "border-[#F1E9A4]" },
        { bg: "bg-[#B9FBC0]", text: "text-[#80B918]", border: "border-[#98F5A3]" },
        { bg: "bg-[#9CF6FB]", text: "text-[#00B4D8]", border: "border-[#72EBF3]" },
        { bg: "bg-[#E2CFEA]", text: "text-[#A06CD5]", border: "border-[#D1B3E2]" },
    ];


    return (
        <div className="min-h-screen w-full bg-[#FFF8DE]/44 overflow-x-hidden flex flex-col font-sans">
            <Navbar />


            <div className="w-full px-5 pt-10 pb-5">
                <div className="max-w-[1400px] mx-auto bg-[url('/assets/496117.png')] bg-cover bg-center rounded-[40px] overflow-hidden shadow-lg relative h-[400px]">
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex flex-col items-center justify-center text-center px-5">
                        <h1 className="text-6xl md:text-8xl font-serif font-extrabold text-[#FFF8DE] mb-2 drop-shadow-sm text-center">
                            Portfolio
                        </h1>
                        <p className="text-[#FFFFFF] text-lg md:text-xl font-medium italic drop-shadow-sm max-w-2xl mb-8 text-center leading-relaxed">
                            A collection of our projects, showcasing the skills, creativity, and <br className="hidden md:block"/> teamwork behind every output.
                        </p>
                        <div className="relative w-full max-w-md group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className="text-[#8A6E5D]" size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search project or developer..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/40 backdrop-blur-md border border-white/50 text-[#8A6E5D] font-bold rounded-full py-4 pl-12 pr-6 shadow-md focus:outline-none focus:ring-2 focus:ring-[#7FBF83] transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* FOLDERS GRID SECTION */}
            <section className="w-full flex flex-col items-center py-20 lg:px-20 px-5 flex-grow">
                <h1 className="text-[#8A6E5D] text-5xl md:text-6xl font-bold text-center mb-24">
                    Featured Projects
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-20 gap-x-10 w-full max-w-6xl justify-items-center">
                    {filteredProjects.map((proj, index) => {
                        const style = folderColors[index % folderColors.length];
                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedProject(proj)}
                                className="flex flex-col items-center gap-6 cursor-pointer group transition-all duration-500"
                            >
                                <div className="relative w-56 h-40 transform group-hover:scale-110 group-hover:-rotate-2 transition-all duration-300">
                                    <div className={`absolute -top-4 left-0 w-20 h-6 ${style.bg} ${style.border} border-t border-l border-r rounded-t-2xl shadow-sm`}></div>
                                    <div className={`w-full h-full ${style.bg} ${style.border} border-2 rounded-3xl rounded-tl-none shadow-xl flex flex-col items-center justify-center relative overflow-hidden`}>
                                        <div className={`opacity-20 ${style.text}`}>
                                            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M10 4L12 6H20V18H4V4H10Z" />
                                            </svg>
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 bg-white/40 backdrop-blur-sm py-2 rounded-lg border border-white/50 text-center">
                                            <p className={`text-[10px] font-black uppercase tracking-widest ${style.text}`}>Project No. {index + 1}</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-[#8A6E5D] text-2xl font-bold text-center max-w-[240px]">
                                    {proj.titleProj}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </section>


            {/* PROJECT MODAL */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={() => setSelectedProject(null)}
                    ></div>
                   
                    <div className="relative bg-[#FCFAF2] w-full max-w-[1120px] max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 lg:p-10 animate-in zoom-in duration-300">
                       
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-[#8A6E5D] hover:opacity-70 transition-opacity z-10 bg-white/50 rounded-full p-2"
                        >
                            <X size={24} strokeWidth={2} />
                        </button>


                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start mt-2">
                           
                            <div className="lg:w-[60%] w-full">
                                <div className="w-full relative overflow-hidden rounded-2xl shadow-md">
                                    <img
                                        src={`/assets/projects/${selectedProject.picProj}`}
                                        alt={selectedProject.titleProj}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>


                            <div className="lg:w-[40%] w-full flex flex-col gap-6 pt-1">
                                <div className="space-y-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="space-y-2">
                                            <h2 className="text-[#7D6658] text-3xl lg:text-4xl font-serif font-bold tracking-tight leading-tight">
                                                {selectedProject.titleProj}
                                            </h2>
                                            <div className="h-[2px] w-14 bg-[#7FBF83]"></div>
                                        </div>
                                        <a href="#" className="text-[#7FBF83] hover:opacity-70 transition-opacity flex-shrink-0 mt-1">
                                            <ExternalLink size={24} strokeWidth={2} />
                                        </a>
                                    </div>


                                    <p className="text-[#988476] text-[15px] leading-relaxed">
                                        {selectedProject.descProj}
                                    </p>
                                </div>


                                <div className="bg-[#FFFFFF]/60 p-5 rounded-2xl border border-[#E9E4DB] flex flex-col gap-3">
                                    <div className="flex items-center gap-2 text-[#7FBF83] font-bold uppercase text-[11px] tracking-widest">
                                        <Users size={16} />
                                        <span>Development Team</span>
                                    </div>


                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[#7D6658] font-medium italic text-[14px]">
                                        {selectedProject.developers ? (
                                            selectedProject.developers.split(',').slice(0, 6).map((name, i) => (
                                                <span key={i} className="truncate">• {name.trim()}</span>
                                            ))
                                        ) : (
                                            <>
                                                <span>• Name 1</span>
                                                <span>• Name 2</span>
                                                <span>• Name 3</span>
                                                <span>• Name 4</span>
                                                <span>• Name 5</span>
                                                <span>• Name 6</span>
                                            </>
                                        )}
                                    </div>
                                </div>


                                <div className="flex flex-row gap-2 flex-wrap mt-1">
                                    {selectedProject.tools?.map((tool, i) => (
                                        <span
                                            key={i}
                                            className="bg-[#BEB3A4] text-white text-[10px] uppercase tracking-widest font-bold py-1.5 px-4 rounded-full shadow-sm"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            )}


            <Footer />
        </div>
    );
};


export default Portfolio;