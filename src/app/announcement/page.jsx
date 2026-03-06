"use client";

import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Announcement from "@/layout/announcement"; 
import { Clock, User, BookOpen, Calendar, ChevronRight } from "lucide-react";

import { calendarData } from "@/const"; 

export default function Announce() {
    return (
        <div className="min-h-screen w-full bg-[#FFF8DE]/44 flex flex-col overflow-x-hidden">
            <Navbar />

            <div className="w-full px-4 md:px-5 pt-10 pb-5">
                <div className="max-w-[1400px] mx-auto bg-[url('/assets/42637.jpg')] bg-cover bg-center rounded-[30px] md:rounded-[40px] overflow-hidden shadow-lg relative h-[250px] md:h-[300px]">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center px-5">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-extrabold text-[#FFF8DE] drop-shadow-sm">
                            Announcements
                        </h1>
                        <p className="text-white text-base md:text-lg font-medium italic mt-2 drop-shadow-md">
                            Official class schedule and latest news updates.
                        </p>
                    </div>
                </div>
            </div>

            {/* WEEKLY CALENDAR SECTION */}
            <section className="max-w-[1400px] mx-auto w-full px-4 md:px-5 py-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#B5A996] p-2 rounded-lg text-white shadow-sm shrink-0">
                            <Calendar size={24} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#8A6E5D]">Weekly Schedule</h2>
                    </div>

                    <div className="flex items-center text-sm font-semibold text-[#B5A996] lg:hidden animate-pulse">
                        Swipe to see more days <ChevronRight size={16} />
                    </div>
                </div>

                {/* for mobile: horizontal swipe layout */}

                <div className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto snap-x snap-mandatory pb-6 px-1 lg:overflow-visible lg:pb-0 lg:px-0">
                    {Object.entries(calendarData).map(([day, classes]) => (
                        <div key={day} className="flex flex-col min-w-[85vw] sm:min-w-[320px] lg:min-w-0 snap-center shrink-0">
                         
                            <div className="bg-[#8A6E5D] text-[#FFF8DE] text-center py-3 rounded-t-xl font-bold tracking-widest uppercase text-base shadow-md z-10">
                                {day}
                            </div>
                            
                            <div className="flex flex-col gap-3 bg-white/60 backdrop-blur-md border border-white/80 rounded-b-xl p-3 md:p-4 flex-1 shadow-lg">
                                {classes.length === 0 ? (
                                    <div className="text-center text-base text-[#9E8576] font-semibold italic py-6 md:py-10">
                                        No Classes
                                    </div>
                                ) : (
                                    classes.map((cls, index) => (
                                        <div 
                                            key={index} 
                                            className={`flex flex-col gap-2 p-4 rounded-xl border-2 shadow-sm transition-transform hover:-translate-y-1 ${cls.color}`}
                                        >
                                            <div className="flex justify-between items-start gap-2">
                                                <h3 className="font-extrabold text-lg tracking-wide">{cls.code}</h3>
                                            </div>
                                            
                                            <p className="text-sm font-semibold leading-snug text-slate-800 line-clamp-2" title={cls.desc}>
                                                {cls.desc}
                                            </p>
                                            
                                            <div className="mt-2 pt-3 border-t-2 border-slate-300/50 flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                                    <Clock size={16} className="text-slate-700 shrink-0" />
                                                    {cls.time}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 italic">
                                                    <User size={16} className="text-slate-700 shrink-0" />
                                                    <span className="truncate">{cls.faculty}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* STATIC ANNOUNCEMENTS SECTION */}
            <section className="max-w-[1400px] mx-auto w-full px-4 md:px-5 pb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[#B5A996] p-2 rounded-lg text-white shadow-sm shrink-0">
                        <BookOpen size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#8A6E5D]">Latest Updates</h2>
                </div>
                <div className="flex flex-col gap-4 md:gap-6">
                    <Announcement 
                        title="Final Capstone Defense"
                        message="Please ensure all group repositories are updated for initial review this week."
                        date="March 6, 2026"
                    />
                    <Announcement 
                        title="Room Change: Data Mining"
                        message="Thursday's session will be held in IT Lab 3 for a hands-on activity."
                        date="March 5, 2026"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}