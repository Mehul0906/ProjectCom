  import React, { useEffect, useState } from "react";
  import Navbar from './Components/Navbar.jsx';
  import Footer from './Components/Footer.jsx';
  import Allroutes from './Routes/Allroutes';
  import "animate.css";

  // import Particles from "react-tsparticles";
  // import { loadFull } from "tsparticles";
  import './App.css'; // You can keep all your scroll-to-top styles here too

  function App() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.pageYOffset > 300);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // const particlesInit = async (main) => {
    //   await loadFull(main);
    // };

    return (
      <>
        <Navbar />
        <Allroutes />
        <Footer />

        {/* Background Particles */}
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: "#fff" },
            particles: {
              number: {
                value: 40,
                density: { enable: true, area: 1000 }
              },
              color: { value: ["#987c02"] },
              shape: {
                type: "char",
                character: {
                  value: ["लढेंगे", "जितेंगे", "ॐ", "Sali Samaj"],
                  font: "Baloo 2",
                  weight: "700",
                  fill: true
                }
              },
              opacity: { value: 0.2 },
              size: { value: 24, random: true },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                outModes: "out"
              }
            }
          }}
        /> */}

        {/* Scroll To Top Button */}
       {showButton && (
  <div
    className="scroll-to-top"
    onClick={scrollToTop}
    style={{
      position: "fixed",
      bottom: "25px",
      right: "25px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#3498db",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "25px",
      fontWeight: "bold",
      zIndex: 9999,
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#ff9d00ff"; // Orange
      e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
      e.currentTarget.style.color = "black";
      e.currentTarget.style.transform = "scale(1.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#3498db";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    ↑
  </div>
)}

      </>
    );
  }

  export default App;
