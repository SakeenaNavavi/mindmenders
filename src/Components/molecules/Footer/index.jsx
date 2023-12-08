import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Location, useLocation } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaStar,
  FaPhone,
} from "react-icons/fa";
import "./index.css";
import Swal from "sweetalert2";
import supabase from "../../../supa/supabase/supabaseClient";


const Footer = () => {

  const location=useLocation();
  const [selectedRating, setSelectedRating] = useState(0);

  const [data, setData] = useState({
    Rating: '',
    comment: '',
    User_id: '',
  });

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);

    setData({ ...data, Rating: rating });
  };

  const handleInsert = async () => {
    try {
      // Replace 'your_table_name' with your actual table name
      const { data, error: insertError } = await supabase
        .from("tblFeedbacks")
        .insert([data]); // Assuming 'data' is the object you want to insert

      if (insertError) {
        alert('try again later:', insertError.message)
        // Handle error, show an alert, etc.
      } else {
        // You can perform any additional actions after successful insertion
        Swal.fire({
          title: "MindMender",
          text: "Your feedback is the cornerstone of our progress. Thank you for your thoughtful feedback!",
          confirmButtonColor: "#443806",
        });
      }
    } catch (error) {
      alert('Error inserting data:', error.message)
      // Handle error, show an alert, etc.
    }

  };

  // const handleInsert = async () => {
  //   try {
  //     // Assuming you have a user ID from somewhere, replace 'User_id' with the actual user ID
  //     const User_ID =location.state?.query; // Replace this with the actual user ID
  
  //     // Set the user ID in the data state
  //     setData({ ...data, UserID: UserID });
  
  //     // Replace 'your_table_name' with your actual table name
  //     const { data: insertedData, error: insertError } = await supabase
  //       .from("tblFeedbacks")
  //       .insert([data]);
  
  //     if (insertError) {
  //       console.error('Error inserting data:', insertError.message);
  //     } else {
  //       console.log('Inserted data:', insertedData);
  //       Swal.fire({
  //         title: "MindMender",
  //         text: "Your feedback is the cornerstone of our progress. Thank you for your thoughtful feedback!",
  //         confirmButtonColor: "#443806",
  //       });
  //     }
  //   } catch (error) {
  //     console.error('Error inserting data:', error.message);
  //   }
  // };
  

  return (

    <footer style={{ backgroundColor: "#70663E" }} className="text-white">
      <div className="container p-4 ratingbox">
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
                </li>{" "}
                <br />
                <h5 className="h5">
                  <b>Crisis Healpline</b> <br /> <br />
                  <a href="http://1333.lk/" className="text-white">
                    <p> http://1333.lk/</p>
                  </a>
                  <a
                    href="https://findahelpline.com/organizations/sri-lanka-sumithrayo"
                    className="text-white"
                  >
                    {" "}
                    <p>
                      https://findahelpline.com/organizations/sri-lanka-sumithrayo
                    </p>
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
                  <h5>
                    Email:
                    <a className="text-white" href="https://mdbootstrap.com/">
                      MindMenders@gmail.com
                    </a>
                  </h5>
                </li>{" "}
                <br />
                <li>
                  <h5>Phone: +94 770 765 680</h5>
                </li>{" "}
                <br />
                <li>
                  <h5>Address: Galle</h5>
                </li>
              </ul>
            </Col>

            <Col md={3} xs={6}>

              <br /> <br />
              <div className="rating-box">
                <div className="border p-3">
                  <h5>Rate our service</h5>
                  <form>
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
                      <textarea
                        id="reviewInput"
                        className="form-control mb-3"
                        placeholder="Write your review here"
                        value={data.comment}
                        onChange={(e) => setData({ ...data, comment: e.target.value })}
                      />
                      {/* Use state for input values */}
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Rating"
                        value={selectedRating}
                        readOnly
                      />
                      <button type="button" >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                </div>
                </Col>
          
             
            <Col md={3} xs={6}>
              {" "}
              <br /> <br />
              <div>
                <FaFacebook size={30} /> <p>Facebook page </p>
                <br />
                <FaTwitter size={30} />
                <p>Twitter page </p> <br />
                <FaWhatsapp size={30} />
                <p>+94 770 765 680 </p> <br />
              </div>
            </Col>
          </Row>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className="footer-p">
          © 2023 Copyright:{" "}
          <a className="text-white" href="https://mdbootstrap.com/">
            MindMenders.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;