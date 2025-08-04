import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import "../css/RotatingTextFrame.css"
// import godImg from "../assets/GOD-removebg-preview.png";
// import rotatingImg from "../assets/pngwing.com.png";
// import guiImg from "../assets/gui.jpeg";
import UpComingJanmohstav from "../assets/UpComingJanmohstav.jpeg";
import jiveshwarbhagwan from "../assets/jiveshwarbhagwan.jpg";
import UpComingWomenDay from "../assets/UpComingWomenDay.jpeg";
import UpComingVinkarDay from "../assets/UpComingVinkarDay.jpeg";
import Carousel from "react-bootstrap/Carousel";
import "../css/Carousel.css";
import SAMAJVIDEO from "../assets/SAMAJVIDEO.mp4";
import BannerFirst from "../assets/BannerFirst.jpg";
import BannerSecond from "../assets/BannerSecond.jpg";
import HomePageBanner3Third from "../assets/HomePageBanner3Third.jpeg";
import LogoBanner from "../assets/LogoBanner.png";
// import BannerThird from "../assets/BannerThird.jpg";
// import BannerSLogan from "../assets/BannerSLogan.jpeg"
// import event2Img from "https://images.bhaskarassets.com/thumb/1200x900/web2images/5483/2022/07/26/orig_new-project-16_1658776060.jpg";
// import event3Img from "../assets/event3.jpg";

const Home = () => {
  useEffect(() => {
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    let currentTestimonial = 0;

    const showTestimonial = (index) => {
      testimonialCards.forEach((card, i) => {
        card.style.display = i === index ? "block" : "none";
      });
    };

    showTestimonial(0);

    const interval = setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
      showTestimonial(currentTestimonial);
    }, 5000);

    const scrollToTopBtn = document.getElementById("scrollToTop");
    const onScroll = () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn?.classList.add("active");
      } else {
        scrollToTopBtn?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", onScroll);
    scrollToTopBtn?.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const text = "ytinummoC ruO tuobA ytinummoC ruO tuobA";
  const characters = text.split("");
  return (
    <div>
      {/* Hero Section */}
      <header className="hero-section">
        <Carousel className="slider" fade interval={4000} controls={false} pause={false}>
          {/* Video Slide */}
          <Carousel.Item>
            <div className="media-wrapper">
              <video autoPlay muted loop playsInline>
                <source src={SAMAJVIDEO} type="video/mp4" style={{ height: "530px" }} />
                Your browser does not support the video tag.
              </video>
            </div>
          </Carousel.Item>

          {/* Image Slides */}
          <Carousel.Item>
            <div className="media-wrapper">
              <img src={LogoBanner} alt="Banner First" />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="media-wrapper">
              <img src={HomePageBanner3Third} alt="Banner Second" />
            </div>
          </Carousel.Item>

          {/* <Carousel.Item>
      <div className="media-wrapper">
        <img src={BannerSLogan} alt="Banner Third" />
      </div>
    </Carousel.Item> */}
        </Carousel>
      </header>

      <section className="py-5 bg-light">
        <div className="container bg-light  rounded-4 p-5 shadow-lg">
          <div className="row align-items-center">

            <div className="col-lg-6 text-center m-auto position-relative">
              <h1 className="contentaboutour bg-light animate__animated animate__flip" style={{ color: "#8DB600", fontSize: "36px" }} >About Our Community</h1>
              <img
                src={jiveshwarbhagwan}
                alt="Community"
                className="god-image mt-3"
                width="100%"
              />
              <a href="/about" className="btn btn-primary mt-5" style={{ width: "30%", fontSize: "21px" }}>
                Read More
              </a>
            </div>
            {/* <div className="col-lg-6 m-auto text-center">
              <h2 className="fw-bold mb-4" style={{ fontSize: "36px" }}>About Our Community</h2>
              <p className="" style={{ textAlign: "justify", fontSize: "18px", fontWeight: "700" }}>
                Swakul Sali Seva Samaj is a social organization working in
                Nashik Road, for the welfare of people and preservation of
                cultural heritage since 1990. Keeping the Lord Jivheshwara in
                center, we are trying to bring people together and unite them!
                Before we continue with further information, we want express our
                heartfelt gratitude to Mr. C.P Sali, Mrs. Sarika Sali and miss
                Kuhu Sali the entire Sali family for making this website free of
                cost as selfless service and overall support.
              </p>
              <p className="" style={{ textAlign: "justify", fontSize: "18px", fontWeight: "700" }}>
                Swakul Sali Seva Samaj Nashik Road, initially started by a few
                socially conscious individuals on a small scale, was established
                in 1990. Our community has its own building where various social
                and cultural programs take place. The organisation helps needy
                people in various areas like Education, Financial support,
                Cultural Growth, Women Empowerment, Physical Health. etc.
              </p>

            </div> */}
          </div>
        </div>
      </section>


      {/* Upcoming Events */}
      {/* Upcoming Events */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 spin-text" style={{ color: "#8DB600" }}>Upcoming Events</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card  position-relative event-card">
                <img src={UpComingJanmohstav} className="card-img-top" alt="Event 1" style={{ height: "350px" }} />
                <div className="event-overlay">
                  <div className="overlay-content text-white">
                    <h5 className="card-title text-dark fw-bold">Shree Jivheshwar Janmostav</h5>
                    <p className="card-text text-dark fw-bold">7th August 2025, Sunday at 03:00 AM</p>
                    <p className="card-text text-dark fw-bold">Rajlaxmi hall in Nashik Road, Nashik</p>
                  </div>
                  <a href="/event" style={{ fontSize: "21px" }} className="btn btn-primary mt-2 event-button">
                    More Details
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card w-100 position-relative event-card">
                <img src={UpComingWomenDay} className="card-img-top" alt="Event 2" style={{ height: "350px" }} />
                <div className="event-overlay">
                  <div className="overlay-content text-white">
                    <h5 className="card-title text-dark fw-bold">Women's Day</h5>
                    <p className="card-text text-dark fw-bold">8th March 2026, Sunday</p>
                    <p className="card-text text-dark fw-bold">Nashik Road</p>
                  </div>
                  <a href="/event" style={{ fontSize: "21px" }} className="btn btn-primary mt-2 event-button">
                    More Details
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card position-relative event-card">
                <img src={UpComingVinkarDay} className="card-img-top" alt="Event 3" style={{ height: "350px" }} />
                <div className="event-overlay">
                  <div className="overlay-content text-white">
                    <h5 className="card-title text-dark fw-bold">Weaver's Day</h5>
                    <p className="card-text text-dark fw-bold">8th March 2026, Sunday</p>
                    <p className="card-text text-dark fw-bold">Nashik Road</p>
                  </div>
                  <a href="/event" style={{ fontSize: "21px" }} className="btn btn-primary mt-2 event-button">
                    More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            {/* <Link to="/event" className="btn btn-outline-primary">
              View All Events
            </Link> */}
            <a href="/event" style={{ fontSize: "21px" }} className="btn btn-outline-primary">
              {" "}
              View All Events
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="mb-4 text-light">How to Become a Member?</h2>
          <p className="lead mb-4" style={{ fontSize: "21px" }}>
            Join our community and participate in various social, cultural and
            educational programs.
          </p>
          <a href="/member" style={{ fontSize: "21px" }} className="btn btn-light btn-lg me-3">
            Become a Member
          </a>
          <a href="/contribute" style={{ fontSize: "21px" }} className="btn btn-outline-light btn-lg">
            Make a Contribution
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
