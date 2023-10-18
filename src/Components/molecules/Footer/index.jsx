import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#70663E' }} className="text-white">

      <div className="container p-4">
        <section>
          <div className="row">
            <Col md={3} xs={6}>
              <h5 style={{  fontSize: '18px', fontWeight: 'bold',textAlign: 'left'}}><b>Quick Links</b></h5>
              <ul className="list-unstyled"style={{ textAlign: 'left' }}>
                <li>
                  <a href="/Home" className="text-white">Home</a>
                </li>
                <li>
                <a href="/privacy-policy" className="text-white">Privacy Policy</a>
                </li>
                <li>
                <a href="/terms-and-conditions" className="text-white">Terms and Conditions</a>
                </li>
                
              </ul>
            </Col>

            <Col md={3} xs={6}>
            <h5 style={{  fontSize: '18px', fontWeight: 'bold',textAlign: 'left' }}><b>Contact Us</b></h5>

              <ul className="list-unstyled" style={{ textAlign: 'left' }}>
                <li>
                  <h5>Email: mindmenders@gmail.com</h5>
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
        <input type="number" id="ratingInput" className="form-control" min="1" max="5" />
        <label className="form-label" htmlFor="ratingInput">
  Rate (1-5) ⭐️
</label>

        
        <textarea id="reviewInput" className="form-control mb-3" placeholder="Write your review here"></textarea>
        
        <button type="submit" className="btn btn-outline-light">
          Submit
        </button>
      </div>
    </div>
  </div>
</Col>



<Col md={3} xs={6}>
  <div className="creative-box" style={{ position: 'relative', backgroundColor: 'transparent' }}>
    <div
      style={{
        
        width: '300px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        top: '0', // Change 'top' to 'bottom'
        right: '0',
      }}
    >
      <h5 className="text-box-header">Hotline: 1919</h5>
      <br />
      
      <div>
        <FaFacebook size={30} />
        <FaTwitter size={30} />
        <FaGoogle size={30} />
        <FaInstagram size={30} />
        <FaLinkedin size={30} />
        <FaGithub size={30} />
      </div>
    </div>
  </div>
</Col>


          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MindMenders.com</a>
        
      </div>
     
    </footer>
  );
};

export default Footer;
