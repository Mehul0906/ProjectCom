import React, { useEffect, useRef, useState } from 'react';
import '../css/Contact.css';
import { Link } from 'react-router-dom';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    const scrollToTopBtn = scrollBtnRef.current;

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn?.classList.add('active');
      } else {
        scrollToTopBtn?.classList.remove('active');
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    fadeElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    scrollBtnRef.current?.addEventListener('click', scrollToTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollBtnRef.current?.removeEventListener('click', scrollToTop);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = phoneInput.replace(/\D/g, '').slice(0, 10);
    const subject = formData.get('subject');
    const message = formData.get('message');

    const whatsappMessage = `📥 New Contact Submission:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n📌 Subject: ${subject}\n📝 Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const ownerPhone = '919328511936';

    window.open(`https://wa.me/${ownerPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div>
      {/* Header */}
      <header className="page-header py-5">
        <div className="container text-center">
          <nav aria-label="breadcrumb" className="d-flex justify-content-center">
            <ol className="breadcrumb animate__animated animate__fadeInUp" style={{ fontSize: '20px' }}>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row" style={{ fontSize: '20px' }}>
            {/* Contact Form */}
            <div className="col-lg-6 mb-5 mb-lg-0 fade-in">
              <h2 className="fw-bold mb-4">Get In Touch</h2>
              <p className="lead">Please fill the form below to contact us via WhatsApp</p>
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder="Enter 10-digit number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <select className="form-select" id="subject" name="subject" required>
                    <option value="">Select...</option>
                    <option>Membership Information</option>
                    <option>Event Information</option>
                    <option>Donation Information</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                  <i className="fab fa-whatsapp me-2"></i> Send on WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-lg-6 fade-in" style={{ transitionDelay: '0.2s' }}>
              <div className="card h-100">
                <div className="card-body p-4">
                  <h3 className="card-title mb-4">Contact Information</h3>
                  <div className="contact-info-item mb-3">
                    <div className="contact-icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div>
                      <h5>Address:</h5>
                      <p className="mb-0">
                        Shivaji Nagar Jail Road<br />
                        Nashik Road, Maharashtra - 422101
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-item mb-3">
                    <div className="contact-icon">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div>
                      <h5>Phone:</h5>
                      <p className="mb-0">
                        Mr. Sunil Dhage (President): +91 93720 12522<br />
                        Mr. Sachin Changate (Secretary): +91 87889 76761
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <h5>Email:</h5>
                      <p className="mb-0">swakilsalisevasamaj@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="row mt-5 fade-in" style={{ transitionDelay: '0.4s' }}>
            <div className="col-12">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.153444981455!2d73.83887719695329!3d19.975845955427367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeaaa4bbe4d59%3A0x9b4cb7f45be96f3!2sJail%20Rd%2C%20Nashik%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1754047677089!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll To Top Button */}
      <button ref={scrollBtnRef} className="scroll-to-top">
        ↑
      </button>
    </div>
  );
};

export default Contact;
