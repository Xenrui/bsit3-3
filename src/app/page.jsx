"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Explorecard from "@/layout/explorecard";
import { Info, Briefcase, Users, Mail } from "lucide-react";

const Home = () => {
  const exploreSectionRef = useRef(null);
  const router = useRouter();

  const scrollToExplore = () => {
    exploreSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const exploreCard = [
    {
      title: "About the Block",
      desc: "Learn more about our officers, committees, and how our block is organized.",
      icon: <Info size={40} />,
    },
    {
      title: "Portfolio",
      desc: "Explore the projects and outputs we’ve created across different subjects.",
      icon: <Briefcase size={40} />,
    },
    {
      title: "Class Profiles",
      desc: "Meet the students who make up our block.",
      icon: <Users size={40} />,
    },
    {
      title: "Reach Out",
      desc: "Get in touch with us for concerns, collaborations, or if you’re not yet added to the GC.",
      icon: <Mail size={40} />,
    },
  ];

  const leaves = [
    { left: "10%", delay: "0s", duration: "12s", size: "12px" },
    { left: "30%", delay: "2s", duration: "15s", size: "15px" },
    { left: "50%", delay: "4s", duration: "11s", size: "10px" },
    { left: "70%", delay: "1s", duration: "14s", size: "18px" },
    { left: "90%", delay: "5s", duration: "13s", size: "14px" },
    { left: "-5%", delay: "3s", duration: "16s", size: "16px" },
    { left: "20%", delay: "6s", duration: "12s", size: "11px" },
    { left: "80%", delay: "7s", duration: "17s", size: "13px" },
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#FFF8DE]/44">
      <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                @keyframes blow {
                    0% { 
                        transform: translate(0, 0) rotate(0deg); 
                        opacity: 0; 
                    }
                    10% { opacity: 0.8; }
                    80% { opacity: 0.8; }
                    100% { 
                        transform: translate(40vw, -120vh) rotate(720deg); 
                        opacity: 0; 
                    }
                }
                .particle-leaf {
                    position: absolute;
                    background: #A7C796;
                    border-radius: 50% 0 50% 0;
                    opacity: 0;
                    pointer-events: none;
                    z-index: 10;
                }
            `}</style>

      <Navbar />

      <main
        className="w-full h-screen relative overflow-hidden 
  bg-[url('/assets/42622.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Theme Overlay */}
        <div className="absolute inset-0 bg-[#2c2420]/65 z-10"></div>

        {/* Leaves Animation */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {leaves.map((leaf, i) => (
            <div
              key={i}
              className="particle-leaf"
              style={{
                left: leaf.left,
                bottom: "-10%",
                width: leaf.size,
                height: leaf.size,
                animation: `blow ${leaf.duration} linear ${leaf.delay} infinite`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="h-full w-full relative flex flex-col justify-center items-center z-30 text-[#FFF8DE] text-center px-6">
          <img
            src="/assets/studiot3ch_logo.png"
            alt="studiot3ch_logo"
            className="min-w-30 w-50 min-h-30 h-38 animate-float"
          />

          <h1 className="lg:text-8xl text-6xl font-bold drop-shadow-2xl mt-6">
            Welcome to Our Block
          </h1>

          <div className="mt-5 lg:text-xl drop-shadow-lg">
            <p>
              Discover the people, projects, and passions that shape our class
              and
            </p>
            <p>define our journey together.</p>
          </div>

          <button
            onClick={scrollToExplore}
            className="text-[#A7C796] font-bold lg:text-2xl 
            bg-white/20 backdrop-blur-md border border-white/30 
            rounded-full py-4 px-8 my-10 
            transition-all duration-500 ease-in-out 
            hover:bg-[#8A6E5D]/80 hover:text-white 
            hover:scale-105 shadow-xl active:scale-95"
          >
            Explore Our World
          </button>
        </div>
      </main>

      <section
        ref={exploreSectionRef}
        className="w-full pt-12 pb-20 px-5 relative z-20"
      >
        <div className="flex flex-col items-center gap-5 text-[#9E8576]">
          <h1 className="text-5xl font-bold">What to Explore?</h1>
          <p className="text-xl font-light italic">
            Discover the different sections of our block.
          </p>
        </div>

        <div className="flex justify-center flex-wrap lg:gap-19 gap-10 mt-16">
          {exploreCard.map((card, index) => (
            <Explorecard
              key={index}
              title={card.title}
              description={card.desc}
              icon={card.icon}
            />
          ))}
        </div>
      </section>

      <section className="w-full bg-[#7FBF83]/38 text-center pt-11 pb-14 px-5">
        <h1 className="text-[#FFF8DE] text-5xl font-bold mb-4 drop-shadow-sm">
          Still finding your way?
        </h1>
        <p className="text-[#9E8576] text-xl font-light italic mb-12">
          If you're not yet connected with our block, send us a message and
          we’ll welcome you in.
        </p>

        <button
          onClick={() => router.push("/contact")}
          className="text-[#FFF8DE] lg:text-2xl font-bold bg-white/10 backdrop-blur-lg border border-white/20 rounded-full py-4 px-14 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#8A6E5D]/80 shadow-2xl active:scale-95"
        >
          Reach Out
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
