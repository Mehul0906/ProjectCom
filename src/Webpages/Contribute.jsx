import React, { useEffect, useRef, useState } from "react";
import "../css/Contribute.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import { FaRupeeSign } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faHandsHelping,
  faGift,
  faUniversity,
  faMobileAlt,
  faMoneyBillWave,
  faArrowUp,
  faCheckCircle,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import CPSir from "../assets/sir.jpg";
import NileshDeende from "../assets/Page2/NileshDeende.png"
import AtulBhate from "../assets/Page2/AtulBhate.png"
// import SamKantDhavne from "../assets/Page2/SamKantDhavne.png"
import Both from "../assets/Page2/Both.jpeg"
import Rajendra from "../assets/Page2/Rajendra.png"
import SameerDhinde from "../assets/Page2/SameerDhinde.png"
import Amit from "../assets/Page2/Amit.png"
import Kishormate from "../assets/Page2/Kishormate.png"
import Pramod from "../assets/Page2/Pramod.png"
import Mahendra from "../assets/Page2/Mahendra.png"
import Shilesh from "../assets/Page2/Shilesh.png"
const Contribute = () => {
  const scrollToTopBtn = useRef(null);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contributionType: "",
    amount: "",
    materialDetails: "",
    additionalInfo: "",
  });

  const [showAmount, setShowAmount] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);

  useEffect(() => {
    setShowAmount(formData.contributionType === "financial");
    setShowMaterial(formData.contributionType === "material");
  }, [formData.contributionType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let cleaned = value.replace(/\D/g, "").slice(0, 10);
      if (cleaned.length > 0) {
        cleaned = `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
      }
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      contributionType,
      amount,
      materialDetails,
      additionalInfo,
    } = formData;

    let message = `*Contribution Form*\n`;
    message += `*Name:* ${name}\n`;
    message += `*Email:* ${email}\n`;
    message += `*Phone:* ${phone}\n`;
    message += `*Type of Contribution:* ${contributionType}\n`;

    if (contributionType === "financial") {
      message += `*Amount:* ₹${amount}\n`;
    } else if (contributionType === "material") {
      message += `*Material Details:* ${materialDetails}\n`;
    }

    if (additionalInfo) {
      message += `*Additional Info:* ${additionalInfo}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919328511936?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };


  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const appearOnScroll = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    fadeElements.forEach((el) => appearOnScroll.observe(el));

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
      }

      if (window.pageYOffset > 300) {
        scrollToTopBtn.current?.classList.add("active");
      } else {
        scrollToTopBtn.current?.classList.remove("active");
      }
    };

    const phoneInput = document.getElementById("contributePhone");
    if (phoneInput) {
      phoneInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 10) value = value.substring(0, 10);
        let formattedValue = "";
        if (value.length > 0) {
          formattedValue = `+91 ${value.substring(0, 5)} ${value.substring(5)}`;
        }
        e.target.value = formattedValue.trim();
      });
    }

    window.addEventListener("scroll", handleScroll);

    const form = document.getElementById("contributeForm");
    const modalEl = document.getElementById("successModal");
    let modal;

    if (modalEl && window.bootstrap) {
      modal = new window.bootstrap.Modal(modalEl);
    }

    if (form && modal) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        setTimeout(() => {
          modal.show();
          form.reset();
        }, 1000);
      });
    }

    const typeSelect = document.getElementById("contributeType");
    if (typeSelect) {
      typeSelect.addEventListener("change", function () {
        const type = this.value;
        document.getElementById("amountField").style.display =
          type === "financial" ? "block" : "none";
        document.getElementById("materialField").style.display =
          type === "material" ? "block" : "none";
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ValuableContribution = [
    {
      name: "Mr. C.P Sali",
      title: "Director Of Maa Pitambara Advertising & Multipurpose",
      image: CPSir,
    },
    {
      name: "Mr. Shamkant Dhavne Mrs. Sunita Dhavne",
      // title: "Vice President",
      image: Both,
    },
    {
      name: "Mr. Nilesh Deende",
      // title: "Secretary",
      image: NileshDeende,
    },
    {
      name: "Mr. Atulbhau Mate",
      // title: "Secretary",
      image: AtulBhate,
    },
    //  {
    //   name: "Mr. Sachin Madhukar Changate",
    //   title: "Secretary",
    //   image:AtulBhate,
    // },
  ];

  const ActiveMember = [
    {
      name: "Mr. Rajendra Pingte",
      title: "Director Of Maa Pitambara Advertising & Multipurpose",
      image: Rajendra,
    },
    {
      name: "Mr. Sameer Dhinde",
      title: "Vice President",
      image:
        SameerDhinde,
    },
    {
      name: "Mr. Kishor Mate",
      title: "Secretary",
      image:
        Kishormate,
    },
    {
      name: "Mr. Amit Barve",
      title: "Secretary",
      image:
        Amit,
    },
  ];

  const cooperationMember = [
    {
      name: "Mr. Shilesh Sali",
      title: "Director Of Maa Pitambara Advertising & Multipurpose",
      image: Shilesh,
    },
    {
      name: "Mr. Pramod Mate",
      title: "Vice President",
      image:
        Pramod,
    },
    {
      name: "Mr. Mahendra Lahorkar",
      title: "Secretary",
      image:
        Mahendra,
    },
  ];
  return (
    <>
      {/* Page Header */}
      <header className="page-header py-5">
        <div className="container text-center">
          {/* <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
            Contribute
          </h1> */}
          <nav
            aria-label="breadcrumb"
            className="d-flex justify-content-center"
          >
            <ol style={{fontSize:"20px"}} className="breadcrumb animate__animated animate__fadeInUp">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Donation
              </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Section Start */}
      <section className="py-5">
        <div className="container">
          {/* Our Donation Section */}
          <div className="row mt-5 fade-in">
            <div className="col-12 text-center mb-4">
              {/* <h2 className="fw-bold">Valuable Contribution</h2> */}
              <h1 data-text="Valuable Contribution">
                Valuable Contribution</h1>
            </div>
            {ValuableContribution.map((member, idx) => (
              <div className="col-md-3 mb-4" key={idx}>
                <div className="card text-center border-0 shadow-sm p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      border: "3px solid #007bff",
                      backgroundColor: "rgba(44, 62, 80, 0.95)"
                    }}
                  />
                  <h5 className="fw-bold">{member.name}</h5>
                  {/* <p
                    className="card-text text-muted mb-3"
                    style={{ fontWeight: "500", color: "#2c3e50" }}
                  >
                    {member.title}
                  </p> */}
                  <hr
                    className="mx-auto"
                    style={{ width: "60px", borderTop: "2px solid #3498db" }}
                  />
                  {/* <div className="d-flex justify-content-center gap-3">
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>


          {/* Our active member Section */}
          <div className="row mt-5 fade-in">
            <div className="col-12 text-center mb-4">
              {/* <h2 className="fw-bold">Active Member</h2> */}
              <h1 data-text="Our Passionate Member">
                Our Passionate Member</h1>
            </div>
            {ActiveMember.map((member, idx) => (
              <div className="col-md-3 mb-4" key={idx}>
                <div className="card text-center border-0 shadow-sm p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      border: "3px solid #007bff",
                    }}
                  />
                  <h5 className="fw-bold">{member.name}</h5>
                  {/* <p
                    className="card-text text-muted mb-3"
                    style={{ fontWeight: "500", color: "#2c3e50" }}
                  >
                    {member.title}
                  </p> */}
                  <hr
                    className="mx-auto"
                    style={{ width: "60px", borderTop: "2px solid #3498db" }}
                  />
                  {/* <div className="d-flex justify-content-center gap-3">
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Our Valuable co-operation Section */}
          <div className="row mt-5 fade-in justify-content-center">
            <div className="col-12 text-center mb-4">
              {/* <h2 className="fw-bold">Valuable Contribution</h2> */}
              <h1 data-text="Valuable co-operation">
                Valuable co-operation</h1>
            </div>
            {cooperationMember.map((member, idx) => (
              <div className="col-md-3 mb-4" key={idx}>
                <div className="card text-center border-0 shadow-sm p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      border: "3px solid #007bff",
                    }}
                  />
                  <h5 className="fw-bold">{member.name}</h5>
                  {/* <p
                    className="card-text text-muted mb-3"
                    style={{ fontWeight: "500", color: "#2c3e50" }}
                  >
                    {member.title}
                  </p> */}
                  <hr
                    className="mx-auto"
                    style={{ width: "60px", borderTop: "2px solid #3498db" }}
                  />
                  {/* <div className="d-flex justify-content-center gap-3">
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Intro Text */}
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto text-center mb-5 fade-in">
              <h2 className="fw-bold mb-4">
                Your Contribution for Community Development
              </h2>
              <p className="lead">
                Your financial support for Swakul Sali Seva Samaj's various
                social, educational, and cultural initiatives is extremely
                important...
              </p>
            </div>
          </div>
          {/* 3 Cards */}
          <div className="row mb-5">
            {[
              {
                icon: faRupeeSign,
                title: "Financial Contribution",
                desc: "Help society financially...",
              },
              {
                icon: faHandsHelping,
                title: "Volunteer",
                desc: "Donate your time and skills...",
              },
              {
                icon: faGift,
                title: "Material Donation",
                desc: "Donate books, clothes, food etc.",
              },
            ].map((item, idx) => (
              <div className="col-md-4 mb-4 fade-in" key={idx}>
                <div className="donate-card">
                  <div className="donate-card-inner">
                    {/* Front Side */}
                    <div className="donate-card-front d-flex justify-content-center align-items-center">
                      <div className="donate-icon bg-primary text-white rounded-circle">
                        <FontAwesomeIcon icon={item.icon} style={{ fontSize: "52px" }} />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="donate-card-back d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <h3 className="h5 mb-2 fw-bold" style={{ fontSize: "22px" }}>{item.title}</h3>
                      <p className="mb-0" style={{ fontSize: "18px" }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Contribution Form and Payment Accordion (Keep this part as is) */}

          {/* Form & Payment */}
          <div className="row">
             <div className="col-lg-6 mb-5 mb-lg-0 fade-in" style={{fontSize:"20px"}}>
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h3 className="card-title mb-4">Contribution Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Type of Contribution</label>
              <select
                className="form-select"
                name="contributionType"
                value={formData.contributionType}
                onChange={handleInputChange}
                required
              >
                <option disabled value="">
                  Select...
                </option>
                <option value="financial">Financial</option>
                <option value="volunteer">Volunteer</option>
                <option value="material">Material</option>
                <option value="other">Other</option>
              </select>
            </div>

            {showAmount && (
              <div className="mb-3">
                <label className="form-label">Amount (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                />
              </div>
            )}

            {showMaterial && (
              <div className="mb-3">
                <label className="form-label">Details of Items</label>
                <textarea
                  className="form-control"
                  name="materialDetails"
                  rows="3"
                  value={formData.materialDetails}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Additional Info</label>
              <textarea
                className="form-control"
                name="additionalInfo"
                rows="3"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="me-2" />
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>


            {/* Payment Accordion */}
            <div className="col-lg-6 fade-in" style={{fontSize:"20px"}}>
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title mb-4">Payment Methods</h3>
                  <div className="accordion" id="paymentMethods">
                    {[
                      {
                        id: "One",
                        icon: faUniversity,
                        label: "Bank Transfer",
                        content: (
                          <>
                            <p>Transfer to:</p>
                            <ul className="list-unstyled">
                              <li>
                                <strong>Bank:</strong> BANK OF BARODA
                              </li>
                              <li>
                                <strong>Account Name:</strong> SWAKUL SALI SAMAJ
                              </li>
                              <li>
                                <strong>Account Number:</strong> 04750100021501
                              </li>
                              <li>
                                <strong>IFSC:</strong> BARB0NASIKR
                              </li>
                            </ul>
                          </>
                        ),
                      },
                      {
                        id: "Two",
                        icon: faMobileAlt,
                        label: "UPI Payment",
                        content: (
                          <p>
                            Use UPI ID: <strong>swakulsamaj@upi</strong>
                          </p>
                        ),
                      },
                      {
                        id: "Three",
                        icon: faMoneyBillWave,
                        label: "Cheque/DD",
                        content: <p>Send to: SWAKUL SALI SAMAJ</p>,
                      },
                    ].map((item) => (
                      <div className="accordion-item" key={item.id}>
                        <h2
                          className="accordion-header"
                          id={`heading${item.id}`}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.id}`}
                          >
                            <FontAwesomeIcon
                              icon={item.icon}
                              className="me-2"
                            />{" "}
                            {item.label}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.id}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#paymentMethods"
                        >
                          <div className="accordion-body">{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <div
        className="modal fade"
        id="successModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content modal-success">
            <div className="modal-header">
              <h5 className="modal-title">Thank You!</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center">
              <FontAwesomeIcon icon={faCheckCircle} size="3x" />
              <h4 className="mt-3">Contribution Received</h4>
              <p>We appreciate your support.</p>
              <button
                type="button"
                className="btn btn-primary mt-3"
                data-bs-dismiss="modal"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contribute;
