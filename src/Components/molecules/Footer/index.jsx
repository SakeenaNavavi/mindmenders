import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';


const YourComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  }

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  }
  
    const [selectedRating, setSelectedRating] = useState(1);
  
    const handleRatingChange = (e) => {
      setSelectedRating(parseInt(e.target.value, 10));
    }
    const handleFormSubmit = () => {
      window.alert(`Thank you for your feedback`);
    }

  return (
    <footer style={{ backgroundColor: '#70663E' }} className="text-white">
      <div className="container p-4">
        <section>
          <Row>
            <Col md={3} xs={6}>
              <h5 style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'left' }}>
                <b>Quick Links</b>
              </h5>
              <ul className="list-unstyled" style={{ textAlign: 'left' }}>
                <li>
                  <a href="/Home" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="text-white">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white crisis-link"
                    onMouseOver={openPopup}
                    onMouseOut={closePopup}
                  >
                    Crisis Helplines
                  </a>
                  {isPopupOpen && (
                    <div className="popup">
                      <div className="popup-content">
                        <span className="close" onClick={closePopup}>
                          &times;
                        </span>
                        <h2>Crisis Helplines</h2> <br />
                        <h3>Hotline</h3> <br />
                        <p>Dr.Kulasooriya: 0766 544 322</p> <br />
                        <p>Dr.Kulasooriya: 0766 544 322</p> <br />
                        <p>Dr.Kulasooriya: 0766 544 322</p> <br />
                        <p>Dr.Kulasooriya: 0766 544 322</p> <br />
                        <p>Dr.Kulasooriya: 0766 544 322</p> <br />
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </Col>

            <Col md={3} xs={6}>
              <h5 style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'left' }}>
                <b>Contact Us</b>
              </h5>

              <ul className="list-unstyled" style={{ textAlign: 'left' }}>
                <li>
              <h5>  Email:
        <a className="text-white" href="https://mdbootstrap.com/">
          MindMenders.com
        </a> </h5>
                </li>
                <li>
                  <h5>Phone: +94 770 765 680</h5>
                </li>
                <li>
                  <h5>Address: Galle</h5>
                </li>
                {/* Additional contact information */}
              </ul>
            </Col>

            <Col md={3} xs={6}>
              <div className="rating-box" style={{ width: '300px', height: '250px' }}>
                <div className="border p-3" style={{ width: '100%', height: '100%' }}>
                <h5>Rate our service</h5>
                  <div className="form-outline form-white mb-4">
                    <select
                      id="ratingInput"
                      className="form-select"
                      value={selectedRating}
                      onChange={handleRatingChange}
                    >
                      <option value="1">⭐</option>
                      <option value="2">⭐⭐</option>
                      <option value="3">⭐⭐⭐</option>
                      <option value="4">⭐⭐⭐⭐</option>
                      <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>
<br /> 
                    <textarea id="reviewInput" className="form-control mb-3" placeholder="Write your review here"></textarea>

                    <button type="submit" className="btn btn-outline-light" onClick={handleFormSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3} xs={6}>
            <div >
  <FaFacebook size={30} /> <p>Facebook page </p><br /> 
  <FaTwitter size={30} /><p>Facebook page </p> <br />
  <FaWhatsapp size={30} /><p>+94 770 765 680 </p> <br />
  
  
</div>

            </Col>
          </Row>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MindMenders.com
        </a>
      </div>
    </footer>
  );
};

export default YourComponent;
