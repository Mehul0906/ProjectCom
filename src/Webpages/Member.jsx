// Membership.jsx
import React, { useEffect } from "react";
import "../css/Member.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MeRavindra from "../assets/1 Page/MeRavindar.png";
import MeAnil from "../assets/1 Page/MeAnil.png";
import PrakashMEMBER from "../assets/PrakashMEMBER.png";
import MeRavindarSali from "../assets/1 Page/MeRavindarSali.png";
import MeSatish from "../assets/1 Page/MeSatish.png";
import MeSangita from "../assets/1 Page/MeSangita.jpg";
import MeBiBi from "../assets/1 Page/MeBiBi.png";
import MeDigmbar from "../assets/1 Page/MeDigmbar.png";
import MeGoori from "../assets/1 Page/MeGoori.png";
import MeDipali from "../assets/1 Page/MeDipali.png";
import MeManish from "../assets/1 Page/MeManish.png";
import MeAmruta from "../assets/1 Page/MeAmruta.png";
import MeRupali from "../assets/1 Page/MeRupali.png";
import MeJyotiSarode from "../assets/1 Page/MeJyotiSarode.png";
import MeSuvarna from "../assets/1 Page/MeSuvarna.png";
import MeJayshree from "../assets/1 Page/MeJayshree.png";
import MeYogini from "../assets/1 Page/MeYogini.png";
import MeSubhdra from "../assets/1 Page/MeSubhdra.png";
import MeKumuDini from "../assets/1 Page/MeKumuDini.png";
import MeSanuntala from "../assets/1 Page/MeSanuntala.png";
import MeUsha from "../assets/1 Page/MeUsha.png";
import MeAlka from "../assets/1 Page/MeAlka.png";
import AnnualReportCard from "../assets/AnnualReportCard.png";
import AnnualReport from "../assets/AnnualReport.pdf"

const memberList = [
  {
    name: "Mr. Ravindar Shankarrao Gaikwad",
    img: MeRavindra,
  },

  { name: "Mr. Prakash Vinu Aachari", img: PrakashMEMBER },
  {
    name: "Mr. Ravindar Kashinath Sali",
    img: MeRavindarSali,
  },
  {
    name: "Mr. Anil Ambadas Dharankar",
    img: MeAnil,
  },
  { name: "Mr. Satish Govind Bhanose", img: MeSatish },
  {
    name: "Mrs. Sangeeta Rajendar Pingate",
    img: MeSangita,
  },
  {
    name: "Mrs. Gauri Yogesh Divane",
    img: MeGoori,
  },
  {
    name: "Mrs. Dipali Pramod Matre",
    img: MeDipali,
  },
  {
    name: "Mrs. Manisha Makarandkar Vikhe",
    img: MeManish,
  },
  {
    name: "Mrs. Amruta Aashish Khandare",
    img: MeAmruta,
  },
  {
    name: "Mrs. Rupali Sunil Dhage",
    img: MeRupali,
  },
  {
    name: "Mrs. Jyoti Chandarshekar Sarode",
    img: MeJyotiSarode,
  },
  { name: "Mrs. Suvrna Narendra Dhinde", img: MeSuvarna },
  {
    name: "Mrs. Jayshree Anil Dharankar",
    img: MeJayshree,
  },
  {
    name: "Mrs. Yogini Umesh Shere",
    img: MeYogini,
  },
  {
    name: "Mrs. Subhdra Sachin Changte",
    img: MeSubhdra,
  },
];

const memberList1 = [
  {
    name: "Mr. Bi.Bi. Bavdhankar",
    img: MeBiBi,
  },

  { name: "Mr. Digambar Sarode(Sir)", 
    img: MeDigmbar },
  {
    name: "Mrs. Kumudini Suresh Dhore",
    img: MeKumuDini,
  },
  {
    name: "Mrs. Sakuntla Govindrav Bhanose",
    img: MeSanuntala,
  },
  { name: "Mr. Satish Govind Bhanose", 
    img: MeUsha },
  {
    name: "Mrs. Sangeeta Rajendar Pingate",
    img: MeAlka,
  },


];
const Membership = () => {
  useEffect(() => {
    // Fade-in animation logic
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

    // Phone number formatting
    const phoneInput = document.getElementById("memberPhone");
    const phoneHandler = (e) => {
      let value = e.target.value.replace(/\D/g, "").substring(0, 10);
      e.target.value = value
        ? `+91 ${value.substring(0, 5)} ${value.substring(5)}`
        : "";
    };
    phoneInput?.addEventListener("input", phoneHandler);

    // Pincode formatting
    const pincodeInput = document.getElementById("memberPincode");
    const pincodeHandler = (e) => {
      e.target.value = e.target.value.replace(/\D/g, "").substring(0, 6);
    };
    pincodeInput?.addEventListener("input", pincodeHandler);

    // Form submit modal show
    const memberForm = document.getElementById("memberForm");
    const modalElement = document.getElementById("successModal");
    let successModal;
    if (modalElement && window.bootstrap?.Modal) {
      successModal = new window.bootstrap.Modal(modalElement);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setTimeout(() => {
        if (successModal) successModal.show();
        memberForm.reset();
      }, 1000);
    };

    memberForm?.addEventListener("submit", handleSubmit);

    // Cleanup
    return () => {
      phoneInput?.removeEventListener("input", phoneHandler);
      pincodeInput?.removeEventListener("input", pincodeHandler);
      memberForm?.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <div className="membership-page">
      {/* Page Header */}
      <header className="page-header py-5">
        <div className="container text-center">
          {/* <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
            Our Member
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
                 Members
              </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Members Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center" style={{fontSize:"42px",color:"#8DB600"}}>Our Members</h2>
          <div className="custom-member-grid">
            {[...Array(16)].map((_, i) => (
              <div className="member-box" key={i}>
                <img
                  src={memberList[i].img}
                  alt={memberList[i].name}
                  className="img-fluid"
                />

                <div className="member-name">{memberList[i].name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center" style={{fontSize:"42px",color:"#8DB600"}}>Our Advisory</h2>
          <div className="custom-member-grid">
            {[...Array(6)].map((_, i) => (
              <div className="member-box" key={i}>
                <img
                  src={memberList1[i].img}
                  alt={memberList1[i].name}
                  className="img-fluid"
                />

                <div className="member-name">{memberList1[i].name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form & Benefits */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center fade-in">
              <h2 className="fw-bold mb-4">Join Our Community</h2>
              <p className="lead">
                By becoming a member of Swakul Sali Seva Samaj, you can
                participate in various community programs and contribute to the
                development of our society.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0 fade-in" style={{fontSize: "20px"}}>
              <div className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title mb-4">Membership Form</h3>
                  <form id="memberForm">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="memberEmail" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="memberEmail"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="memberPhone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="memberPhone"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="memberAddress" className="form-label">
                        Address
                      </label>
                      <textarea
                        className="form-control"
                        id="memberAddress"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="memberCity" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="memberCity"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="memberPincode" className="form-label">
                          Pincode
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="memberPincode"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="memberFamily" className="form-label">
                        Number of Family Members
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="memberFamily"
                        min="1"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="memberOccupation" className="form-label">
                        Occupation
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="memberOccupation"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="memberInterest" className="form-label">
                        Which community activities interest you?
                      </label>
                      <select
                        className="form-select"
                        id="memberInterest"
                        multiple
                      >
                        <option value="cultural">Cultural Programs</option>
                        <option value="education">
                          Educational Initiatives
                        </option>
                        <option value="social">Social Services</option>
                        <option value="sports">Sports Competitions</option>
                        <option value="other">Other Activities</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{fontSize: "20px"}}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

<div
  className="col-lg-6 fade-in"
  style={{ transitionDelay: "0.2s",fontSize:"20px" }}
>
  <div className="card h-100 shadow-sm">
    <div className="card-body p-4">
      <h3 className="card-title mb-4">Membership Benefits</h3>
      <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item">
          Opportunity to participate in all community events
        </li>
        <li className="list-group-item">
          Access to educational grants and scholarship programs
        </li>
        <li className="list-group-item">
          Medical camps and health check-up facilities
        </li>
        <li className="list-group-item">
          Usage of community hall facilities
        </li>
        <li className="list-group-item">
          Discounts for marriage conferences and other social events
        </li>
        <li className="list-group-item">
          Participation in community decision-making processes
        </li>
      </ul>

      <h4 className="mt-5 mb-3">Membership Fees</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>Membership Type</th>
              <th>Annual Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Individual Membership (1 Month)</td>
              <td>₹ 100/-</td>
            </tr>
            <tr>
              <td>Lifetime Membership</td>
              <td>₹ 1000/- (one time)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="alert alert-info mt-4">
        <i className="fas fa-info-circle me-2"></i>
        <strong>Note:</strong> Membership fees are non-refundable and valid for one calendar year (April to March).
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5 gap-4">
        {/* Round Image */}
        <div 
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid black',
            
          }}
        >
          <img
            src={AnnualReportCard} 
            alt="Icon"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Button */}
     <a
        href={AnnualReport}  // 👈 Apna PDF path yaha de
        download
        style={{
          backgroundColor: "#3498db",
          color: "#fff",
          padding: "12px 24px",
          textDecoration: "none",
          borderRadius: "12px",
          fontWeight: "500",
          fontSize:"21px"
        }}
      >
        Annual Report Download Here
      </a>
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
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content modal-success">
            <div className="modal-header">
              <h5 className="modal-title">Success!</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body text-center">
              <i className="fas fa-check-circle"></i>
              <h4 className="mt-3">Application Submitted</h4>
              <p>Your membership application has been received successfully.</p>
              <button className="btn btn-primary mt-3" data-bs-dismiss="modal">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
