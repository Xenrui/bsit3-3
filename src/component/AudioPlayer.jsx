"use client";


import { useState, useRef, useEffect } from "react";
import { Music, Pause } from "lucide-react";


export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);


    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };


    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio ref={audioRef} loop src="/assets/always-with-me.mp3" />
           
            <button
                onClick={togglePlay}
                className="w-14 h-14 flex items-center justify-center rounded-full glass-button text-[#8A6E5D] hover:text-[#FFF8DE] shadow-xl transition-all duration-300 animate-in fade-in zoom-in"
                title="Play/Pause Background Music"
            >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Music size={24} fill="currentColor" />}
            </button>
        </div>
    );
}
