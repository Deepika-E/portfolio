import React, { useState, useEffect } from "react";
import "../App.scss";

const AboutMe = () => {
  const floatingTexts = [
    "I 𝓪𝓶 𝓓𝓮𝓮𝓹𝓲𝓴𝓪 𝓔",
    "𝒥𝒶𝓋𝒶 𝐸𝓃𝓉𝒽𝓊𝓈𝒾𝒶𝓈𝓉",
    "𝐹𝓊𝓁𝓁 𝒮𝓉𝒶𝒸𝓀 𝒟𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝓇",
    "𝒫𝓇𝑜𝑔𝓇𝒶𝓂𝓂𝑒𝓇",
    "𝒞𝓇𝑒𝒶𝓉𝒾𝓋𝑒 𝒯𝒽𝒾𝓃𝓀𝑒𝓇",
    "𝒫𝓇𝑜𝒷𝓁𝑒𝓂 𝒮𝑜𝓁𝓋𝑒𝓇",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Tracks the current phrase
  const [displayedText, setDisplayedText] = useState(""); // Text being typed
  const [charIndex, setCharIndex] = useState(0); // Tracks the character being typed

  useEffect(() => {
    const typeInterval = setInterval(() => {
      // Add one character at a time
      if (charIndex < floatingTexts[currentTextIndex].length) {
        setDisplayedText((prev) => prev + floatingTexts[currentTextIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Pause before clearing the text
        setTimeout(() => {
          setDisplayedText(""); // Clear the text
          setCharIndex(0); // Reset character index
          setCurrentTextIndex((prev) => (prev + 1) % floatingTexts.length); // Move to the next phrase
        }, 1000); // 1-second pause before starting the next phrase
        clearInterval(typeInterval); // Clear the typing interval
      }
    }, 50); // Typing speed: 100ms per character

    return () => clearInterval(typeInterval); // Clean up on unmount
  }, [charIndex, currentTextIndex, floatingTexts]); // Added floatingTexts as a dependency

  return (
    <section className="about-me" id="about">
      <div className="about-me-container">
        {/* Left Section: About Me and Floating Text */}
        <div className="about-me-text">
          <h2>𝓐𝓫𝓸𝓾𝓽  𝓜𝓮</h2>
          <p className="intro">
            Hello! I’m <span className="highlight"> 𝓓𝓮𝓮𝓹𝓲𝓴𝓪 𝓔</span>, a pre-final year B.Tech student specializing in
            Information Technology at V.S.B Engineering College. With a strong
            passion for coding and design, I’ve honed my skills as a Java developer
            and web designer. I enjoy working on innovative projects that challenge me to grow both technically and creatively.
          </p>
          <p className="intro">
            My journey in the tech world has fueled my love for problem-solving and efficient coding practices. I am constantly looking to improve my skills and collaborate on projects that make a positive impact.
          </p>
          <p className="intro">
            In addition to coding, I’m also keen on staying updated with the latest tech trends, and I love experimenting with new frameworks and tools. My goal is to build user-friendly, functional, and beautiful web applications that provide great experiences.
          </p>
          <div className="typewriter-container">
            <span className="typewriter-text">{displayedText}</span>
          </div>
        </div>

        {/* Right Section: Profile Picture */}
        <div className="about-me-image">
          <img src="assets/deepika.jpg" alt="Deepika" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
