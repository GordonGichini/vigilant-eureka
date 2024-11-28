import React, { useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'

const ParticleBg = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

  return (
    <Particles 
      className="absolute inset-0"
      init={particlesInit}
      options={{
        particles: {
            color: {
                value: "#ffffff"
            },
            number: {
                value: 100,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: 3,
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
            },
        },
      }}
      />
  )
}

export default ParticleBg