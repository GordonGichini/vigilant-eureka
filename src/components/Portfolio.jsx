import React, { useState, useEffect, useCallback } from 'react';
import { Github, Linkedin, Twitter, ArrowDownToLine } from "lucide-react";
import  Button  from './Button';
import ParticleBg from './ParticleBg';

const Portfolio = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [audio] = useState(typeof Audio !== 'undefined' ? new Audio(`${import.meta.env.BASE_URL}background-music.mp3`)
    : null)

    const toggleMusic = useCallback(() => {
        if (audio) {
            if (isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
            setIsPlaying(!isPlaying)
        }
    }, [audio, isPlaying])

    useEffect(() => {
        if (audio) {
            audio.loop = true
        }
        return () => {
            if (audio) {
                audio.pause()
            }
        }
    }, [audio])


  return (
    <div className="min-h-screen bg-gray-800 text-white relative" onClick={toggleMusic}>
        <ParticleBg />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <p className="text-lg mb-8 italic">
                Click anywhere to {isPlaying ? 'stop' : 'start'} the background music
            </p>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 border-4 border-blue-500">
                <img
                  src={`${import.meta.env.BASE_URL}1670778086074.jpeg`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">
                Eng. Gordon Gichini
            </h1>
            <h2 className="text-2xl md:text-3xl mb-12 text-blue-300 italic">
                Software Developer
            </h2>

            <div className="flex flex-col gap-4">
                <Button href="https://www.linkedin.com/in/gordon-gichini/" icon={Linkedin}>LinkedIn</Button>
                <Button href="/resume.pdf" icon={ArrowDownToLine}>Resume</Button>
                <Button href="https://github.com/GordonGichini" icon={Github}>Github</Button>
                <Button href="https://x.com/GichiniGordon" icon={Twitter}>X</Button> 
            </div>
        </div>

    </div>
  )
}

export default Portfolio