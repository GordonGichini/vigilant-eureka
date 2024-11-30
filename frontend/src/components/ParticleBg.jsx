import React, { useEffect, useRef } from 'react';

const ParticleBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particleArray = [];
    const numberOfParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update(deltaTime) {
        this.x += this.speedX * (deltaTime / 16);
        this.y += this.speedY * (deltaTime / 16);
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        const colorOptions = ['rgba(255, 228, 196, 0.8)', 'rgba(176, 224, 230, 0.8)', 'rgba(173, 216, 230, 0.8)'];
        ctx.fillStyle = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particleArray.splice(0, particleArray.length);
      for (let i = 0; i < numberOfParticles; i++) {
        particleArray.push(new Particle());
      }
    }

    let lastTime = 0;
    function animate(timestamp) {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update(deltaTime);
        particleArray[i].draw();
        if (particleArray[i].size <= 0.3) {
          particleArray.splice(i, 1);
          particleArray.push(new Particle());
          i--;
        }
      }
      requestAnimationFrame(animate);
    }

    init();
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default ParticleBg;
