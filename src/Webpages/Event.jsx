import React, { useEffect, useState } from "react";
import "../css/Event.css";
import "animate.css";
import { Link } from "react-router-dom";
import lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
import blooddonation from "../assets/blooddonation.jpg";
import InvitationCard from "../assets/InvitationCard.jpeg";
import HaldiKumkum from "../assets/HaldiKumkum.jpg";
import PastJaynati from "../assets/PastJaynati.JPG";
import First from "../assets/1.JPG";
import Second from "../assets/2.JPG";
import Third from "../assets/3.JPG";
import Fourth from "../assets/4.JPG";
import Fifth from "../assets/5.JPG";
import Sixth from "../assets/6.JPG";

const Events = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date("August 07, 2025 03:00:00").getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scroll-to-top
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation on scroll
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    fadeElements.forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      positionFromTop: 100,
      albumLabel: "Image %1 of %2",
    });
  }, []);

  const images = [First, Sixth, Third, Fourth, Fifth, Second];
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      imageUrl: First,
    },
    {
      id: 2,
      imageUrl: Second,
    },
    {
      id: 3,
      imageUrl: Third,
    },
    {
      id: 4,
      imageUrl: Fourth,
    },
    {
      id: 5,
      imageUrl: Fifth,
    },
    {
      id: 6,
      imageUrl: Sixth,
    },
  ]);

  const loadMoreItems = () => {
    // In a real app, you would fetch more data from an API here
    const newItems = [
      {
        id: galleryItems.length + 1,
        imageUrl: "https://source.unsplash.com/random/600x400/?bali",
        title: "BALI",
        subtitle: "Indonesia",
      },
      {
        id: galleryItems.length + 2,
        imageUrl: "https://source.unsplash.com/random/600x400/?dubai",
        title: "DUBAI",
        subtitle: "UAE",
      },
    ];
    setGalleryItems([...galleryItems, ...newItems]);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrev = () => {
    const newIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex]);
    setCurrentIndex(newIndex);
  };
  return (
    <div className="events-page">
      <header className="page-header py-5 text-center">
        <div className="container">
          {/* <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
            Our Events
          </h1> */}
          <nav
            aria-label="breadcrumb"
            className="d-flex justify-content-center"
          >
            <ol  style={{fontSize:"20px"}} className="breadcrumb animate__animated animate__fadeInUp">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Events
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          {/* Featured Event */}
          <div className="row mb-5 fade-in" style={{fontSize: "22px"}}>
            <div className="col-12">
              <div className="card featured-event shadow-sm">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-3 position-relative">
                      {/* <span className="date-badge">August 07, 2025</span> */}
                      <img
                        src="https://images.bhaskarassets.com/thumb/1200x900/web2images/5483/2022/07/26/orig_new-project-16_1658776060.jpg"
                        alt="Event"
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Shree Jivheshwar Janmostav 2025</h3>
                      <p className="text-muted">
                        <i className="far fa-calendar-alt me-2"></i> Thursday, August 7, 2025
                      </p>
                      <p className="text-muted">
                        <i className="far fa-clock me-2"></i> 03:00 AM onwards
                      </p>
                      <p className="text-muted">
                        <i className="fas fa-map-marker-alt me-2"></i> Rajlaxmi hall, Nashik Road.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-primary me-2">Cultural</span>
                        <span className="badge bg-success me-2">Family Event</span>
                        <span className="badge bg-info">Food Stalls</span>
                      </div>
                    </div>
                    <div className="col-md-3 text-center">
                      <div className="countdown mb-3">
                        <div className="countdown-item">
                          <div className="countdown-number">{countdown.days}</div>
                          <div className="countdown-label">Days</div>
                        </div>
                        <div className="countdown-item">
                          <div className="countdown-number">{countdown.hours}</div>
                          <div className="countdown-label">Hours</div>
                        </div>
                        <div className="countdown-item">
                          <div className="countdown-number">{countdown.minutes}</div>
                          <div className="countdown-label">Minutes</div>
                        </div>
                        <div className="countdown-item">
                          <div className="countdown-number">{countdown.seconds}</div>
                          <div className="countdown-label">Seconds</div>
                        </div>
                      </div>
                      <div className="d-grid gap-2">
                        <a href="#" style={{fontSize:"21px"}} className="btn btn-primary btn-lg">
                          Register Now!
                        </a>
                        <button style={{fontSize:"21px"}}
                          className="btn btn-outline-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#eventModal"
                        >
                          More Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Code */}
          <div
            className="modal fade"
            id="eventModal"
            tabIndex="-1"
            aria-labelledby="eventModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="eventModalLabel">Event Details</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={InvitationCard}
                    alt="Event Details"
                    className="img-fluid rounded zoomable-img"  style={{ maxHeight: "700px", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>



          {/* Past Events */}
          <h2 className="text-center my-5 section-heading fade-in" style={{color:"#8DB600",fontSize:"40px"}}>
            Past Events
          </h2>
          <div className="row">
            {[
              {
                title: "Bhagavan Jivheshwara janmotsav 2024",
                date: "January 20, 2023",
                desc: "A joyful event where we unite to celebrate appearance of Jivheshwara janmotsav.",
                img: PastJaynati,
              },
              {
                title: "Haldi Kunku Samarambh",
                desc: "Celebrating the vibrant tradition of Haldi Kumkum – a beautiful expression of togetherness and blessings.",
                img: HaldiKumkum,
              },
              {
                title: "Blood donation",
                desc: "Every blood donor is life saver! We hone a quality of kindness in humans.",
                img: blooddonation,
              },
            ].map((event, idx) => (
              <div
                className="col-md-4 mb-4 fade-in"
                key={idx}
                style={{ transitionDelay: `${idx * 0.2}s` }}
              >
                <div className="event-card">
                  <div className="event-card-inner">
                    {/* Front Side - Only Image */}
                    <div className="event-card-front">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-100 h-100 object-fit-cover"
                        style={{ borderRadius: "6px", objectPosition: "center 20%" }}
                      />
                    </div>

                    {/* Back Side - Full Content */}
                    <div className="event-card-back d-flex flex-column justify-content-center align-items-center text-white p-4">
                      <h5 className="text-dark fw-bold">{event.title}</h5>
                      <p className="text-dark fw-bold text-center">{event.desc}</p>
                      <div className="mt-3 d-flex gap-2">
                        <a href="/Gallery" className="btn btn-outline-dark btn-sm">
                          View Photos
                        </a>
                        <a href="#" className="btn btn-outline-dark btn-sm">
                          Report
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gallery */}
          <h2 className="text-center my-5 section-heading fade-in" style={{color:"#8DB600",fontSize:"40px"}}>
            Event Gallery
          </h2>

          <div className="gallery-app">
            <div className="gallery">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="gallery-item"
                  onClick={() => openLightbox(item, index)}
                >
                  <img src={item.imageUrl} alt={item.title} style={{ borderRadius: "400% 60% 60% 60%" }} />
                  <div className="gallery-overlay">
                    <div className="gallery-title">{item.title}</div>
                    <div className="gallery-subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
              <div className="lightbox" onClick={closeLightbox}>
                <div
                  className="lightbox-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="close-btn" onClick={closeLightbox}>
                    &times;
                  </span>
                  <button
                    className="nav-btn prev-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrev();
                    }}
                  >
                    &#10094;
                  </button>

                  <div className="lightbox-image-container">
                    <img
                      src={selectedImage.imageUrl}
                      alt={selectedImage.title}
                    />
                    <div className="lightbox-caption">
                      <h3>{selectedImage.title}</h3>
                      <p>{selectedImage.subtitle}</p>
                      <div className="image-counter">
                        {currentIndex + 1} / {galleryItems.length}
                      </div>
                    </div>
                  </div>

                  <button
                    className="nav-btn next-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                  >
                    &#10095;
                  </button>
                </div>
              </div>
            )}
            {/* onClick={loadMoreItems} */}
            <a href="/Gallery" style={{ textDecoration: "none",}}><button className="load-more" style={{fontSize:"22px" }}>
              Show More
            </button></a>
          </div>

          {/* Newsletter */}
          <div className="row mt-5 fade-in">
            <div className="col-12">
              <div className="card bg-light border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <h3 className="mb-3">Stay Updated With Our Events</h3>
                  <p className="mb-4">
                    Subscribe to our newsletter to receive updates about
                    upcoming events and activities
                  </p>
                  <form className="row g-2 justify-content-center">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Your Email Address"
                      />
                    </div>
                    <div className="col-md-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
