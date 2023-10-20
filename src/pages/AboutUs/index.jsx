import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <Container className="about-content">
        <Row>
          <Col>
            <h2>MindMenders Overview..</h2>
            <p>At MindMendors, we are dedicated to providing compassionate and comprehensive 
                mental healthcare services to help individuals
                regain control of their lives. 
                Our mission is to empower people to overcome mental health challenges, 
                find their inner strength, and lead fulfilling, meaningful lives.</p>

                <p>
              We understand that mental health is an integral part of overall
              well-being, and our commitment is to make a positive impact on the
              lives of our clients. With a team of experienced and caring
              professionals, we strive to offer personalized and evidence-based
              treatments to address a wide range of mental health concerns.
            </p>
          </Col>
        </Row>
        {/* Add other sections here */}
      </Container>
    </div>
  );
};

export default AboutUs;
