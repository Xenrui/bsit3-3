import { Instagram, Github } from "lucide-react";

const Studentcard = ({ studImg, name, nickname, role, subRole, quotes, hobby, color, ig, github }) => {
    
    const imageSource = studImg ? `/assets/students/${studImg}` : "/assets/students/default.png";

    return (
        <div className="group relative h-[360px] w-full [perspective:1000px] cursor-pointer">
            
            <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT OF CARD --- */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-[#FFFDFC]/90 backdrop-blur-lg border border-white/60 rounded-[24px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center p-3.5 text-center overflow-hidden">
                    
                    <div className="w-full h-[220px] rounded-xl overflow-hidden mb-3 shadow-sm border border-white/60 bg-white/50 flex-shrink-0">
                        <img src={imageSource} alt={name} className="w-full h-full object-cover object-top" />
                    </div>
                    
                    <h3 className="text-[#8A6E5D] text-[15px] lg:text-base font-extrabold uppercase tracking-wide leading-tight px-1 mt-1">
                        {name}
                    </h3>
                    
                    {role && (
                        <div className="mt-1.5 bg-white/40 backdrop-blur-md border border-white/50 px-3 py-1 rounded-full shadow-sm">
                            <p className="text-[#7FBF83] text-[9px] font-bold uppercase tracking-widest">
                                {role}
                            </p>
                        </div>
                    )}
                    
                    {quotes && (
                        <p className="text-[#9E8576] italic text-xs font-medium line-clamp-2 px-2 mt-2 leading-snug">
                            "{quotes}"
                        </p>
                    )}

                    <div className="absolute bottom-3 right-3 opacity-30">
                        <img src="/assets/studiot3ch_logo.png" alt="Studio Tech Stamp" className="w-8 h-8 object-contain drop-shadow-sm grayscale contrast-150" />
                    </div>
                </div>

                {/* --- BACK OF CARD --- */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#FFFDFC]/95 to-[#FFF8DE]/80 backdrop-blur-xl border border-white/60 rounded-[24px] shadow-md flex flex-col items-center p-5 text-center overflow-hidden">
                    
                    <img src={imageSource} alt={name} className="w-24 h-24 rounded-full object-cover object-top shadow-md border-4 border-white mb-3 bg-white/50" />
                    
                    <h4 className="text-[#8A6E5D] text-base font-bold border-b border-[#8A6E5D]/20 pb-2 mb-3 w-full">
                        {name}
                    </h4>
                    
                    <div className="flex flex-col gap-2 text-[12px] text-[#8A6E5D] font-medium w-full text-left bg-white/30 backdrop-blur-md border border-white/50 rounded-xl p-3 shadow-sm">
                        {nickname && (
                            <div className="flex justify-between items-center border-b border-white/40 pb-1">
                                <span className="font-bold text-[#A7C796] uppercase text-[10px] tracking-wider">Nickname</span>
                                <span>{nickname}</span>
                            </div>
                        )}
                        {hobby && (
                            <div className="flex justify-between items-center border-b border-white/40 pb-1">
                                <span className="font-bold text-[#A7C796] uppercase text-[10px] tracking-wider">Hobby</span>
                                <span>{hobby}</span>
                            </div>
                        )}
                        {color && (
                            <div className="flex justify-between items-center border-b border-white/40 pb-1">
                                <span className="font-bold text-[#A7C796] uppercase text-[10px] tracking-wider">Fav Color</span>
                                <span>{color}</span>
                            </div>
                        )}
                        {subRole && (
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-[#A7C796] uppercase text-[10px] tracking-wider">Team</span>
                                <span>{subRole}</span>
                            </div>
                        )}
                    </div>

                    <div className="mt-auto flex gap-4 relative z-10">
                        {ig && (
                            <a href={`https://instagram.com/${ig}`} target="_blank" rel="noreferrer" className="bg-white/80 p-2 rounded-full text-[#A7C796] hover:text-white hover:bg-[#7FBF83] transition-colors shadow-sm">
                                <Instagram size={16} />
                            </a>
                        )}
                        {github && (
                            <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer" className="bg-white/80 p-2 rounded-full text-[#A7C796] hover:text-white hover:bg-[#8A6E5D] transition-colors shadow-sm">
                                <Github size={16} />
                            </a>
                        )}
                    </div>

                    <div className="absolute bottom-3 right-3 opacity-50">
                        <img src="/assets/studiot3ch_logo.png" alt="Studio Tech Stamp" className="w-15 h-15 object-contain drop-shadow-sm grayscale contrast-150" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Studentcard;