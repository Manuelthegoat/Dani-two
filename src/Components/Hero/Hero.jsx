import React, { useState, useEffect } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./Hero.css";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const texts = [
    "Digital Illustration",
    "Logo Design",
    "Branding",
    "Merch Design",
    "Graphics Design",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setFade(false);

      // After fade out completes, change text and fade in
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true);
      }, 500); // This should match the CSS transition time
    }, 2500); // Total time between changes (2000ms display + 500ms transition)

    return () => clearInterval(interval);
  }, [texts.length]);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#FF6B00" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
            },
            links: { enable: false },
          },
          interactivity: {
            events: { onHover: { enable: false }, onClick: { enable: false } },
          },
        }}
        className="particles"
      />

      <div className="hero-content">
        <h1 className="hero-title">Daniafterdark - Digital Artist</h1>
        <div className="text-slider-container">
          <h2 className={`hero-subtitle ${fade ? "fade-in" : "fade-out"}`}>
            {texts[currentTextIndex]}
          </h2>
        </div>
      </div>

      <div className="hero-socials">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="social-icon" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="social-icon" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube className="social-icon" />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok className="social-icon" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
