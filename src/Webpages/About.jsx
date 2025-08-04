import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/About.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import guiImg from "../assets/gui.jpeg";
import jiveshwarbhagwan from "../assets/jiveshwarbhagwan.jpg";
// import SchinSir from "../assets/SchinSir.jpg";
// import SunilSir from "../assets/SunilSir.jpg";
// import RamDasSir from "../assets/RamDasSir.jpg";
// import ChandraShekarSir from "../assets/ChandraShekar.jpg";
import SunilSir from "../assets/1 Page/Sunil.png";
import RamdasSir from "../assets/1 Page/MeRamdas.png";
import ChandraShekarSir from "../assets/1 Page/Chandar.jpg";
import SchinSir from "../assets/1 Page/Sachin.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import JayShree from "../assets/Jayshree.jpg";
import Ujhwala from "../assets/Ujhwala.jpg";
import Mayuri from "../assets/Mayuri.jpg";
import Sonali from "../assets/Sonali.jpg";
import CPSir from "../assets/sir.jpg";  
import Kuhusali from "../assets/Kuhusali.jpeg";
import sarikaSali from "../assets/sarikaSali.jpg";
function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

    const [show, setShow] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedFemale, setSelectedFemale] = useState(null);
  const handleShow = (person) => {
    setSelectedPerson(person);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedPerson(null);
  };
  const executives = [
    {
      name: "Mr. Sunil Tukaram Dhage",
      title: "President",
      image: SunilSir,
      delay: "0.2s",
      bio: (
<div style={{ maxHeight: "60vh", overflowY: "auto", paddingRight: "10px" }}>
  <h5>📌 <b>परिचय</b></h5>

  <p><b>👤 पूर्ण नाव:</b> श्री सुनील राधा-तुकाराम ढगे</p>
  <p><b>🏠 पत्ता:</b> Old E 74, NTPS Colony, Ekhalare, Nasik 422105</p>
  <p><b>📞 मोबाईल नंबर:</b> 9372012522</p>

  <p><b>🎓 शिक्षण:</b><br />
    • B.Sc. (Maths)<br />
    • M.Sc. Maths (1st Year)<br />
    • Diploma Appear<br />
    • ITI: Refrigeration & Air Conditioner<br />
    • NCTVT: Govt. Milk Dairy, Satpur<br />
    • Computer: C C C
  </p>

  <p><b>💼 कार्यक्षेत्र:</b><br />
    • Coaching Classes: 19 वर्षे<br />
    • Sanmati Classes (5th to 10th) – 1993 ते 2012<br />
    • BTRI Maths Classes<br />
    • PTA सदस्य – २०११ ते २०१८<br />
    • सेवा: M.S.E.B.<br />
    • Vaitarna Hydro Power Station – एप्रिल 1999 ते जून 2009<br />
    • Nasik Thermal Power Station, Ekhalare – जून 2009 पासून चालू
  </p>

  <p><b>💡 विशेष आवड:</b> सुलेखन करणे, फिरणे, चालणे, योगा, विवाह जमवणे, समाजसेवा, जनसंपर्क</p>
  <p><b>🎨 छंद:</b> कॅरम, बुद्धिबळ</p>

  <p><b>🌱 सामाजिक उपक्रम:</b><br />
    • एकलहरे येथे अनेक वेळा वृक्षारोपण<br />
    • करोना काळात हरसुल व गोदावरी झोपडपट्टी परिसरात नित्यपयोगी वस्तू वाटप<br />
    • सुरक्षा सप्ताह कार्यक्रम<br />
    • रक्तदान शिबिरांचे आयोजन<br />
    • आंबेडकर जयंती व शिवजयंती उत्सव साजरे केले
  </p>

  <p><b>🏆 पुरस्कार:</b><br />
    १) लँड स्लाइडिंग<br />
    २) गुणवंत कामगार
  </p>
</div>

    )
    },
    {
      name: "Mr. Ramdas Dhondiram Pingte",
      title: "Vice President",
      image: RamdasSir,
      delay: "0.4s",
    },
      {
    name: "Mr. Sachin Madhukar Changate",
    title: "Secretary",
    image: SchinSir,
    delay: "0.6s",
    bio: (
      <div style={{ maxHeight: "60vh", overflowY: "auto", paddingRight: "10px" }}>
        <h5>📌 <b>परिचय</b></h5>
        <p><b>👤 नाव:</b> श्री सचिन पुष्पा-मधुकर चांगटे</p>
        <p><b>🏠 पत्ता:</b> मधुपुष्प, ब्लॉक नं.४, कोयना सोसायटी, शिवाजीनगर, जेलरोड, नासिक रोड.</p>
        <p><b>📞 मोबाईल नंबर:</b> 8788976761, 8421216278</p>
        <p><b>🎓 शिक्षण:</b><br />
          D.ED. (२००१)<br />
          B.ED. (२००९)<br />
          M.A., M.ED. (२०११)<br />
          SET (EDUCATION)<br />
          DSM (Diploma in School Management)<br />
          ज्योतिषशास्त्री
        </p>
        <p><b>👨‍🏫 अध्यापनाचा अनुभव:</b> २३ वर्ष</p>
        <p><b>🏫 कार्यरत शाळेचे नाव:</b> स्वामी विवेकानंद विद्यालय, पंचवटी, नाशिक -३</p>
        <p><b>💡 विशेष आवड:</b> ज्योतिषशास्त्र</p>
        <p><b>🎨 छंद:</b> सुलेखन, वाचन</p>

        <p><b>🏅 सहशालेय उपक्रम:</b><br />
          • राष्ट्रीय हरित सेने अंतर्गत वृक्षारोपण, पर्यावरण पूरक उत्सव, पर्यावरण जनजागृती पर विविध कार्यक्रम राबवलेले आहेत.<br />
          • सुंदर हस्ताक्षर कार्यशाळा<br />
          • मराठी भाषा संवर्धन व समृद्धीसाठी ग्रंथ प्रदर्शन, भित्तीपत्रक प्रदर्शन, काव्य वाचन, काव्य लेखन, वक्तृत्व स्पर्धा, जाहिरात लेखन स्पर्धा.<br />
          • हस्तलिखित निर्मिती: मराठी सारस्वत<br />
          • मतदार जनजागृती कार्यक्रमांतर्गत प्रभात फेरी, वक्तृत्व स्पर्धा, रांगोळी स्पर्धा.<br />
          • शाळाबाह्य वक्तृत्व, निबंध, काव्यवाचन स्पर्धांमध्ये मार्गदर्शन.
        </p>

        <p><b>🤝 सामाजिक संस्था:</b><br />
          • सचिव व माजी अध्यक्ष – स्वकुळ साळी सेवा समाज, नाशिक रोड (२०१७–२०२२)<br />
          • महिला सक्षमीकरण, रक्तदान शिबीर, आरोग्य शिबीर, दिनदर्शिका वाटप, गुणगौरव सोहळा आयोजित केले.
        </p>

        <p><b>🏆 पुरस्कार:</b><br />
          १) महात्मा फुले सार्वजनिक वाचनालय – आदर्श शिक्षक पुरस्कार (२००५)<br />
          २) भूगोल प्रज्ञाशोध केंद्र मुंबई – उपक्रमशील भूगोल शिक्षक पुरस्कार (२०१५, २०१८, २०१९)<br />
          ३) सार्वजनिक वाचनालय, नाशिक – आदर्श शिक्षक पुरस्कार (२०२२)<br />
          ४) ब्रह्मकुमारी संस्था – गुणवंत शिक्षक गौरव (२०२२)<br />
          ५) रोटरी क्लब – आदर्श शिक्षक पुरस्कार (२०२३)<br />
          ६) सुप्रीम फाउंडेशन – नासिक रोड रत्न पुरस्कार (२०२४)
        </p>
      </div>
    )
  },
    {
      name: "Mr. Chandrashekhar Shivram Sarode",
      title: "Treasurer",
      image: ChandraShekarSir,
      delay: "0.8s",
    },
  ];

  const Femaleexecutives = [
    {
      name: "Mrs. Jaishree Ravindra Gaekwad",
      title: "President",
      image: JayShree,
      delay: "0.2s",
      bio: (
    <div style={{ maxHeight: "60vh", overflowY: "auto", paddingRight: "10px" }}>
      <h5>📌 <b>परिचय</b></h5>
      <p><b>👤 पूर्ण नाव:</b> जयश्री रविंद्र गायकवाड</p>
      <p><b>🏠 पत्ता:</b> फ्लॅट नं. २, गोपाल पार्क, शिवाजी नगर, जेल रोड, नाशिक रोड, नाशिक</p>
      <p><b>📞 मोबाईल नंबर:</b> 9309898557</p>
      <p><b>🎓 शिक्षण:</b> T.Y. B.Com</p>
      <p><b>👩‍👧‍👦 कार्यक्षेत्र:</b> गृहिणी</p>
      <p><b>🧵 विशेष आवड:</b> शिवणकाम</p>
      <p><b>📚 छंद:</b> वाचन</p>
      <p><b>🤝 सामाजिक उपक्रम:</b> स्वकुळ साळी सेवा मध्ये महिला अध्यक्ष</p>
      <p><b>🏆 पुरस्कार:</b> —</p>
    </div>
  )
    },
    {
      name: "Mrs. Ujjwala Pradeep Sali",
      title: "Vice President",
      image: Ujhwala,
      delay: "0.4s",
    },
    {
      name: "Mrs. Mayuri Amit Barve",
      title: "Treasurer",
      image: Mayuri,
      delay: "0.8s",
      bio:(
         <div style={{ maxHeight: "60vh", overflowY: "auto", paddingRight: "10px" }}>
      <h5>📌 <b>परिचय</b></h5>
      <p><b>👤 पूर्ण नाव:</b> मयुरी अमित बर्वे</p>
      <p><b>🏠 पत्ता:</b> फ्लॅट नं. १०, बी विंग, श्रीनिवास कोर्ट, हरिओम नगर, नाशिक रोड, नाशिक</p>
      <p><b>📞 मोबाईल नंबर:</b> 9607868090</p>
      <p><b>🎓 शिक्षण:</b> M.Com, MBA (HR)</p>
      <p><b>💼 कार्यक्षेत्र:</b> —</p>
      <p><b>💃 छंद:</b> डान्सिंग आणि वाचन</p>
      <p><b>🤝 सामाजिक उपक्रम:</b> नुकतीच स्वकुळ साळी महिला मंडळात प्रवेश</p>
    </div>
      )
    },
    {
      name: "Mrs. Sonali Gokul Pingte",
      title: "Secretary",
      image: Sonali,
      delay: "0.6s",
      bio:(
        <div style={{ maxHeight: "60vh", overflowY: "auto", paddingRight: "10px" }}>
  {/* existing content above remains same */}

  {/* 👉 नवा परिचय (सोनाली गोकुळ पिंगटे) */}
  <h5>📌 <b>परिचय</b></h5>
  <p><b>👤 नाव:</b> सोनाली गोकुळ पिंगटे</p>
  <p><b>🏠 पत्ता:</b> धनश्री हाऊसिंग सोसायटी, राहुल नगर, जुना सायखेडा रोड, जेलरोड, नाशिक रोड</p>
  <p><b>📞 मोबाईल नंबर:</b> 9890636956</p>
  <p><b>🎓 शिक्षण:</b> बीएससी, बीएड</p>
  <p><b>👨‍🏫 कार्यक्षेत्र:</b> टीचिंग प्रोफेशन व हाऊसवाइफ</p>
  <p><b>💡 विशेष आवड:</b> चित्रकला, टीचिंग</p>
  <p><b>🎨 छंद:</b> वाचणे आणि लिहिणे</p>
  <p><b>🤝 सामाजिक उपक्रम:</b> स्वकुळ साळी महिला मंडळ</p>
</div>

      )
    },
  ];

  const donorList = [
    {
      name: "Kuhu Sali",
      title: "",
      backText: "CEO of Maa Pitambara Advertising & Multipurpose Pvt. Ltd.",
      img: Kuhusali,
    },
    {
      name: "Mrs. Sarika Sali",
      title: "",
      backText: "Managing Director of Maa Pitambara Advertising & Multipurpose Pvt. Ltd.",
      img: sarikaSali,  
    },
    {
      name: "Mr. Chhagan P. Sali",
      title: "",
      backText: "Director of Maa Pitambara Advertising & Multipurpose Pvt. Ltd.",
      img: CPSir,
    },
  ];

  return (
    <>
      {/* Page Header */}
      <header className="page-header py-5">
        <div className="container text-center">
          {/* <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
            About Us
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
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="py-5 bg-light">
        <div className="container bg-light  rounded-4 p-5 shadow-lg">
          <div className="row align-items-center">

            {/* <div className="col-lg-6 text-center m-auto position-relative">
              <img
                src={jiveshwarbhagwan}
                alt="Community"
                className="god-image"
                width="100%"
              />
              <a href="/about" className="btn btn-primary mt-5 w-25">
                Read More
              </a>
            </div> */}
            <div className="col-lg-6 m-auto text-center">
              <h2 className="fw-bold mb-4" style={{ fontSize: "48px",color:"#8DB600"}}>About Our Community</h2>
              <p className="" style={{ textAlign: "justify", fontSize: "20px"}}>
                Swakul Sali Seva Samaj is a social organization working in
                Nashik Road, for the welfare of people and preservation of
                cultural heritage since 1990. Keeping the Lord Jivheshwar in
                center, we are trying to bring people together and unite them!
                Before we continue with further information, we want to express our
                heartfelt gratitude to Mr. C.P Sali, Mrs. Sarika Sali and Miss.
                Kuhu Sali for making this website free of
                cost as selfless service and overall support.
              </p>
              <p className="" style={{ textAlign: "justify", fontSize: "20px" }}>
                Swakul Sali Seva Samaj Nashik Road, initially started by a few
                socially conscious individuals on a small scale, established
                in 1990. Our community has its own building where various social
                and cultural programs take place. The organisation helps deserving
                people in various areas like Education, Financial Support,
                Cultural Growth, Women Empowerment, Physical Health, etc.
              </p>
              {/* <a href="/about" className="btn btn-primary mt-3 w-25">
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4" data-aos="fade-right">
              <img
                src={jiveshwarbhagwan}
                alt="Community"
                className="img-fluid" style={{ borderRadius: "30% 0% 30% 0%", objectFit: "cover", marginTop: "8.5%" }}
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              {/* Our History */}
              <h2 className="fw-bold mb-4" style={{ fontSize: "48px" ,color:"#8DB600"}} data-aos="fade-up">
                Our History
              </h2>
              <p className="" style={{ textAlign: "justify", fontSize: "20px" }} data-aos="fade-up">
                Swakul Sali Seva Samaj is a social organization working in
                Nashik Road, for the welfare of people and preservation of
                cultural heritage since 1990. Keeping the Lord Jivheshwara in
                center, we are trying to bring people together and unite them!
              </p>
              <p className="" style={{ textAlign: "justify", fontSize: "20px" }} data-aos="fade-up">
                The organization has grown over the years spreading the message
                of unity and social work. We are selflessly serving the Sali
                Community and helping them grow for 35 years and 170+ Families
                have connected to our Swakul Sali Seva Samaj till now. We invite
                and welcome you all to help all the deserving people with us. Our
                worshipable deity is Lord Shri Jivheshwara and we are trying to
                bring people in his shelter so they can be connected to the
                roots of their culture. As nowadays many people are forgetful of
                the lord and his pastimes, every year on appearance (Jayanti) of
                Lord Jivhesjwara we distribute the book “Shri Jivheshwar Sali
                Mahatmya Puran.” Which holds his glorious biography.
              </p>
              <div className="row">
                {/* Our Objectives */}
                <h3 className="mt-5 mb-3 fw-bold" data-aos="fade-up" style={{fontSize:"48px",color:"#8DB600"}}>
                  Our Objectives
                </h3>
                <ul
                  className="list-group list-group-flush mb-4 "
                  data-aos="fade-up" style={{ textAlign: "justify", fontSize: "20px" }}
                >
                  <li className="list-group-item">
                    To develop the Sali community
                  </li>
                  <li className="list-group-item">
                    To provide better education for pre-primary, primary, secondary and higher
                    secondary schools and junior colleges.  
                  </li>
                  <li className="list-group-item">
                    To promote cultural development
                  </li>
                  <li className="list-group-item">
                    To conduct various activities and games for women
                  </li>
                  <li className="list-group-item">
                    To implement various initiatives for women's empowerment
                  </li>
                </ul>
                {/* Our Working Methodology */}
                <h3 className="mt-5 mb-3 fw-bold" data-aos="fade-up" style={{fontSize:"42px",color:"#8DB600"}}>
                  Our Working Methodology
                </h3>
                <p className="" style={{ textAlign: "justify", fontSize: "18px" }} data-aos="fade-up">
                  “Our methodology reflects our mission to create sustainable, inclusive and community-led development.”
                  Through surveys, group discussions, home visits and direct dialogues, we understand the real issues people face not just assumptions. We engage directly with the community to identify real needs and challenges and to provide help accordingly. We discuss and conclude with solutions. Programs are designed with active participation from local stakeholders. We build local capacity through training, education and awareness. Our goal is to create sustainable change by putting people at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Our Male Executive Section */}
        <div className="row mt-5">
        <div className="col-12">
          <h1 className="Donor mt-5 text-center" data-text="Our Male Executive">
            Our Male Executive
          </h1>
          <div className="row justify-content-center mt-4">
            {executives.map((person, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                data-aos="fade-up"
                style={{ animationDelay: person.delay }}
                key={index}
              >
                <div
                  className="card h-100 text-center mx-auto border-0 shadow-sm"
                  style={{ maxWidth: "300px", backgroundColor: "#f8f9fa" }}
                >
                  <div
                    className="pt-3"
                    style={{
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={person.image}
                      className="img-fluid rounded-circle"
                      alt={person.title}
                      style={{
                        width: "190px",
                        height: "190px",
                        objectFit: "cover",
                        objectPosition: "center 20%",
                        border: "2px solid #3498db",
                      }}
                    />
                  </div>
                  <div className="card-body pt-4">
                    <h5 className="card-title mb-1" style={{ fontSize: "1.2rem" }}>
                      {person.name}
                    </h5>
                    <div className="position-relative mb-3">
                      <hr
                        style={{
                          borderTop: "2px solid #3498db",
                          width: "50px",
                          margin: "0.5rem auto",
                        }}
                      />
                    </div>
                    <p
                      className="card-text text-muted mb-3"
                      style={{ fontWeight: "500", fontSize: "18px" }}
                    >
                      {person.title}
                    </p>
                    <Button variant="outline-primary" size="sm" onClick={() => handleShow(person)}>
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPerson?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedPerson?.image}
            alt={selectedPerson?.name}
            className="img-fluid rounded mx-auto d-block mb-3"
            style={{ maxWidth: "200px" }}
          />
          <h5 className="text-center text-muted">{selectedPerson?.title}</h5>
          <p className="mt-3">
            {selectedPerson?.bio || ""}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

          {/* Our Female Executive Section */}
<div className="row mt-5">
  <div className="col-12">
    <h1 className="Donor text-center" data-text="Our Female Executive">
      Our Female Executive
    </h1>
    <div className="row justify-content-center mt-4">
      {Femaleexecutives.map((person, index) => (
        <div
          className="col-lg-3 col-md-4 col-sm-6 mb-4"
          data-aos="fade-up"
          style={{ animationDelay: person.delay }}
          key={index}
        >
          <div
            className="card h-100 text-center mx-auto border-0 shadow-sm"
            style={{ maxWidth: "300px", backgroundColor: "#f8f9fa" }}
          >
            <div
              className="pt-3"
              style={{
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={person.image}
                className="img-fluid rounded-circle"
                alt={person.title}
                style={{
                  width: "190px",
                  height: "190px",
                  objectFit: "cover",
                  objectPosition: "center 3%",
                  border: "2px solid #3498db",
                }}
              />
            </div>
            <div className="card-body pt-4">
              <h5 className="card-title mb-1" style={{ fontSize: "1.2rem" }}>
                {person.name}
              </h5>
              <div className="position-relative mb-3">
                <hr
                  style={{
                    borderTop: "2px solid #3498db",
                    width: "50px",
                    margin: "0.5rem auto",
                  }}
                />
              </div>
              <p
                className="card-text text-muted mb-3"
                style={{ fontWeight: "500", fontSize: "18px" }}
              >
                {person.title}
              </p>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleShow(person)}
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Female Modal */}
      {selectedFemale && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedFemale.name}'s Profile</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedFemale(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img
                      src={selectedFemale.image}
                      alt={selectedFemale.name}
                      className="img-fluid rounded-circle mb-3"
                      style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <p><strong>नाव:</strong> {selectedFemale.name}</p>
                    <p><strong>पत्ता:</strong> {selectedFemale.address}</p>
                    <p><strong>मोबाईल:</strong> {selectedFemale.phone}</p>
                    <p><strong>शिक्षण:</strong> {selectedFemale.education}</p>
                    <p><strong>कार्यक्षेत्र:</strong> {selectedFemale.work}</p>
                    <p><strong>आवड:</strong> {selectedFemale.hobbies}</p>
                    <p><strong>सामाजिक उपक्रम:</strong> {selectedFemale.social}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedFemale(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


          {/* Our Website Donor Section */}
          {/* <div className="container my-5"> */}
          <div className="row mt-5 justify-content-center  gx-2 gy-3">
            <h1 className="Donor" data-text="Our Website Donor">
              Our Website Donor</h1>
            {donorList.map((person, index) => (
              <div className="col-md-4 d-flex justify-content-center mb-4 mt-5 px-2" key={index}>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front text-center p-4">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="rounded-circle mb-3"
                        style={{
                          width: "220px",
                          height: "220px",
                          objectFit: "cover",
                          border: "3px solid #3498db",
                          objectFit: "cover",
                          objectPosition: "center 20%",
                        }}
                      />
                      <h5 className="mt-4" style={{ fontSize: "22px", fontWeight: "bold" }}>{person.name}</h5>
                      <div
                        style={{
                          borderTop: "2px solid #3498db",
                          width: "50px",
                          margin: "0.5rem auto",
                        }}
                      />
                      <p className="text-muted small ">{person.title}</p>
                    </div>

                    {/* Back */}
                    <div className="flip-card-back d-flex flex-column justify-content-center text-white p-3">
                      <h6 className="text-dark fw-bold">{person.name}</h6>
                      <p className="small text-dark fw-bold" sty>{person.backText}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}



{/* Timeline Section */}
<div className="row mt-5">
  <div className="col-12">
    <h2 className="fw-bold mb-4 text-center" data-aos="fade-up">
      Our Journey
    </h2>
    <div className="timeline">
      <div className="timeline-container left">
        <div className="timeline-content  animate__animated animate__flip">
          <h3 style={{fontSize:"36px"}}>1990</h3>
          <p style={{fontSize:"20px"}}>Establishment and Consolidation of Swakul Sali Seva Samaj In Nashik, Maharashtra.</p>
        </div>
      </div>

      <div className="timeline-container right">
        <div className="timeline-content animate__animated animate__flip animate__delay-1s">
          <h3 style={{fontSize:"36px"}}>1992</h3>
          <p style={{fontSize:"20px"}}>Preserving weaving traditions, promoting marital alliances and conducting spiritual gatherings.</p>
        </div>
      </div>

      <div className="timeline-container left">
        <div className="timeline-content animate__animated animate__flip animate__delay-2s">
          <h3 style={{fontSize:"36px"}}>1998</h3>
          <p style={{fontSize:"20px"}}>The community likely began organizing annual meets, anniversaries, matrimonial events and educational programs to support social cohesion and identity.</p>
        </div>
      </div>

      <div className="timeline-container right">
        <div className="timeline-content  animate__animated animate__flip animate__delay-3s">
          <h3 style={{fontSize:"36px"}}>2003</h3>
          <p style={{fontSize:"20px"}}>Established key activity centers which has included Yeola and nearby Nashik, reflecting the community’s weaving heritage.</p>
        </div>
      </div>

      <div className="timeline-container left">
        <div className="timeline-content  animate__animated animate__flip animate__delay-4s">
          <h3 style={{fontSize:"36px"}}>2009</h3>
          <p style={{fontSize:"20px"}}>Around 2009 the broader Nashik registered Swakul Sali Samaj hosted web-based anniversary forms, image galleries and memory-sharing events.</p>
        </div>
      </div>

      <div className="timeline-container right">
        <div className="timeline-content animate__animated animate__flip animate__delay-5s">
          <h3 style={{fontSize:"36px"}}>2015</h3>
          <p style={{fontSize:"20px"}}>From 2015 onwards, the community organized online events, virtual ceremonies and shared digital archives—likely engaging Nashik members.</p>
        </div>
      </div>

        <div className="timeline-container left">
        <div className="timeline-content  animate__animated animate__flip animate__delay-6s">
          <h3 style={{fontSize:"36px"}}>2021</h3>
          <p style={{fontSize:"20px"}}>Nashik community members probably participated in regional conferences focused on preservation of Paithani weaving, heritage seminars and cultural exchange platforms.</p>
        </div>
      </div>

        <div className="timeline-container right">
        <div className="timeline-content animate__animated animate__flip animate__delay-7s">
          <h3 style={{fontSize:"36px"}}>2025</h3>
          <p style={{fontSize:"20px"}}>Active branches likely continued marriages meetings, spiritual gatherings, prize distributions and community welfare activities, documented in broader Sali Samaj websites.</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
    </>
  );
}

export default AboutPage;
