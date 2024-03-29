import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaWhatsapp, FaStar, FaPhone } from 'react-icons/fa';
import './index.css';
import Swal from 'sweetalert2';
import supabase from '../../../supa/supabase/supabaseClient';
const YourComponent = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (Rating) => {
    setSelectedRating(Rating);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    // Ensure that the event target is a form element
    if (event.target instanceof HTMLFormElement) {
      const formData = new FormData(event.target);
  
      const Rating = formData.get('Rating');
      const Comment = formData.get('Comment');
  
      try {
        await supabase.from('tblFeedback').insert([
          { Rating, Comment },
        ]);
  
        // Clear the form inputs after submission
        event.target.reset();
  
        Swal.fire({
          title: 'MindMender',
          text: "Your feedback is the cornerstone of our progress: Thank you for your thoughtful feedback!",
          confirmButtonColor: '#443806'
        });
      } catch (error) {
        alert('Your Feedback did not get saved due to an error. Please try again later!');
      }
    } else {
      console.error('Event target is not a form element:', event.target);
    }
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
                  <a href="/" className="text-white">
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
                <h5 className="h5">
                <b>Crisis Healpline</b> <br /> <br />
                <a  href= "http://1333.lk/" className="text-white">
                <p> http://1333.lk/</p>
                  </a>
                  <a  href= "https://findahelpline.com/organizations/sri-lanka-sumithrayo" className="text-white">  <p>https://findahelpline.com/organizations/sri-lanka-sumithrayo</p>
                  </a>
              </h5>

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
            <Col md={3} xs={6}><br /> <br />
              <div className="rating-box">
                <div className="border p-3">
                  <h5>Rate our service</h5>
                  <div className="form-outline form-white mb-4">
                    {[1, 2, 3, 4, 5].map((Rating) => (
                      <FaStar
                        key={Rating}
                        size={30}
                        className={selectedRating >= Rating ? "checked" : ""}
                        onClick={() => handleRatingChange(Rating)}
                      />
                    ))}
                    <br /> <br />
                    <textarea id="Comment" className="form-control mb-3" placeholder="Write your review here"></textarea>
                    
                    <button type="submit" className="custom-submit-button" onClick={handleFormSubmit}>
                      Submit
                    </button>
          </div>
        </div>
      </div>
                </Col>
          
             
            <Col md={3} xs={6}>
              {" "}
              <br /> <br />


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
