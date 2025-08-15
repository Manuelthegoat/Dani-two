import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
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

  // rotate subtitle text
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, [texts.length]);

  // prevent engine re-creation
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // keep the options stable across re-renders
  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      fpsLimit: 60,
      detectRetina: true,
      pauseOnBlur: true,
      motion: { reduce: { value: true, factor: 4 } }, // auto-reduce on low FPS
      particles: {
        number: { value: 45, density: { enable: true, area: 900 } }, // a bit lighter
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.3, max: 0.6 },
          animation: { enable: false },
        },
        size: { value: { min: 1, max: 2 } },
        move: {
          enable: true,
          speed: 0.6, // slower = smoother
          direction: "none",
          random: false, // less jitter
          straight: false,
          outModes: { default: "out" },
          warp: true, // slight wrap smoothing
        },
        links: { enable: false },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          resize: true,
        },
      },
      background: { color: "transparent" },
    }),
    []
  );

  return (
    <section className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="particles"
      />

      <div className="hero-content">
        <h1 className="hero-title">
          DANI <span className="fire">火</span>
        </h1>

        <p className="hero-subtitle">Visual Storyteller</p>

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
            aria-label="Twitter (X)"
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
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <FaPinterest className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
