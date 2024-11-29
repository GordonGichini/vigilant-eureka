import React, { useState, useEffect, useCallback } from 'react';
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
    <div className="relative min-h-screen bg-background text-white" onClick={toggleMusic}>
        <ParticleBg />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <p className="text-lg mb-8 italic">
                Click anywhere to {isPlaying ? 'stop' : 'start'} the background music
            </p>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}1670778086074.jpeg`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  />
            </div>
            <h1 className="text-4xl md:text-5xl mb-12 font-kaushan text-primary text-center">
                Eng. Gordon Gichini
            </h1>
            <h2 className="text-4xl md:text-5xl mb-12 font-kaushan text-primary">
                Laravel Backend Software Developer
            </h2>

            <div className="flex flex-col gap-4">
                <Button href="https://www.linkedin.com/in/gordon-gichini/">LinkedIn</Button>
                <Button href="/resume.pdf">CV</Button>
                <Button href="https://github.com/GordonGichini">Github</Button>
                <Button href="https://x.com/GichiniGordon">X</Button> 
            </div>
        </div>

    </div>
  )
}

export default Portfolio