import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../Components/molecules/Navbar/index.jsx";
import './index.css';

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
          <div className="about-container">
      <Container className="about-content">
        <Row>
          <Col>
            <h2 className="aboutush2">Let's mend minds and mend lives. Welcome to MindMendors.</h2>
            <p className="aboutusp">Feel free to customize this description to fit your website's style and tone. 
              <br />It should reflect your organization's mission and values, 
             <br /> ensuring that visitors to your website can connect with the compassionate and comprehensive services you provide.</p>

                <p className="aboutush2">Welcome to MindMenders, a digital haven dedicated to nurturing mental health, 
                   <br />eradicating stigma, and fostering a community of resilience. We are the 
                   culmination of an extraordinary journey, 
                   <br />initiated by four passionate undergraduates in pursuit of a common goal: 
                   <br />to provide compassionate and comprehensive mental healthcare services 
                 <br /> and empower individuals on their path to mental well-being. </p>

                  <h2 className="aboutush2">Our Vision: Illuminating the Path to Mental Well-Being</h2>
                  <p className="aboutusp">At MindMenders, we envision a world where mental health is not 
                    <br />just a concept but a way of life. We aspire to illuminate the path to mental well-being,
                    <br /> raising awareness about its significance and dispelling the myths and misconceptions 
                   <br />  that surround it. We believe that through knowledge and empathy,
                   <br />  we can transform the landscape of mental health, making it accessible, understood, and destigmatized.</p>

                     <h2 className="aboutush2">Our Mission: Empower, Support, Transform</h2>
                     <p className="aboutusp">Our mission is simple yet profound: to empower individuals to overcome mental health challenges,
                      <br /> discover their inner strength, and lead lives that are fulfilling and meaningful.
                      <br />  We're here to guide, support, and inspire transformation. We believe that each person has
                     <br /> the potential to mend and rebuild their mental well-being, and we are here to light the way.</p>

                      <h2 className="aboutush2">The Minds Behind MindMenders</h2>
                      <p className="aboutusp"> MindMenders is more than a website; it's the collective vision and determination of four dedicated undergraduate developers.
                        <br /> We are a team of forward-thinkers, software engineering enthusiasts, and advocates for mental health.
                       <br />   With the shared commitment to creating a positive impact on the lives of individuals, 
                      <br />  we have channeled our technical expertise and creativity into the creation of this platform.</p>

                        <h2 className="aboutush2">Join the MindMenders Movement</h2>
                        <p className="aboutusp">MindMenders is more than a website; it's a movement. We invite you to join us in this 
                         <br /> journey of understanding, resilience, and empowerment.
                           Together, we can mend minds, dispel stigma, and lead brighter, healthier lives.</p>
          </Col>
        </Row>
        {/* Add other sections here */}
      </Container>
    </div>
    </div>
  );
};

export default AboutUs;
