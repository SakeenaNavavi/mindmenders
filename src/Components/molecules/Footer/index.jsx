import React, { useState } from 'react';
import { Row, Col, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaWhatsapp, FaStar,FaPhone } from 'react-icons/fa';
import './index.css';
import Swal from 'sweetalert2';


const YourComponent = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleFormSubmit = () => {
    Swal.fire({
      title: 'MindMender',
      text: "Thank You For You'r Feadback",
    });
  };
 

  return (
    <footer style={{ backgroundColor: '#70663E' }} className="text-white">
      <div className="container p-4">
        <section>
          <Row>
            <Col md={3} xs={6}>
              <h5 className="h5">
                <b>Quick Links</b>
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/Home" className="text-white">
                    Home
                  </a>
                </li>
                <br />
                <li>
                  <a href="/privacy-policy" className="text-white">
                    Privacy Policy
                  </a>
                </li>
               <br />
                <li>
                  <a href="/terms-and-conditions" className="text-white">
                    Terms and Conditions
                  </a>
                </li> <br /> 
                <OverlayTrigger
  trigger="hover"
  placement="right"
  overlay={
    <Popover id="popover-right" className="custom-popover">
      <div className="crisis-helping">
        <h3>Crisis Helpline</h3>
        <h5> Hotline: 1990</h5>
      </div>
    </Popover>
  }
>
  <button type="button" className="custom-button faphone-button">
    <FaPhone size={30} className="faphone-icon" /> <p className="faphonep">Crisis Helpling</p>
  </button>
</OverlayTrigger>

              </ul>
            </Col>

            <Col md={3} xs={6}>
              <h5 className="h5">
                <b>Contact Us</b>
              </h5>

              <ul className="list-unstyled">
                <li>
                  <h5>Email:
                    <a className="text-white" href="https://mdbootstrap.com/">
                      MindMenders@gmail.com
                    </a>
                  </h5>
                </li> <br />
                <li>
                  <h5>Phone: +94 770 765 680</h5>
                </li> <br />
                <li>
                  <h5>Address: Galle</h5>
                </li> 
              </ul>
            </Col>

            <Col md={3} xs={6}>
              <div className="rating-box">
                <div className="border p-3">
                  <h5>Rate our service</h5>
                  <div className="form-outline form-white mb-4">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <FaStar
                        key={rating}
                        size={30}
                        className={selectedRating >= rating ? "checked" : ""}
                        onClick={() => handleRatingChange(rating)}
                      />
                    ))}
                    <br /> <br />
                    <textarea id="reviewInput" className="form-control mb-3" placeholder="Write your review here"></textarea>
                    <button type="submit" className="custom-submit-button" onClick={handleFormSubmit}>
                      Submit
                    </button>

                  </div>
                </div>
              </div>
            </Col>

            <Col md={3} xs={6}>
              <div>
                <FaFacebook size={30} /> <p>Facebook page </p><br />
                <FaTwitter size={30} /><p>Twitter page </p> <br />
                <FaWhatsapp size={30} /><p>+94 770 765 680 </p> <br />
              </div>
            </Col>
          </Row>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <p className="footer-p">© 2023 Copyright:  <a className="text-white" href="https://mdbootstrap.com/">
          MindMenders.com
        </a></p>
        
      </div>
    </footer>
  );
};

export default YourComponent;
