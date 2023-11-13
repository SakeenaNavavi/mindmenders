import {Container, Row, Col, Button} from 'react-bootstrap';
import professionals from './professionals.png';
import { Link } from 'react-router-dom';
const Home2=()=>{
    return(
        <div>
            <section>
                <Container fluid className="home-directory">
                    <Row>
                        <Col md={6} className="professionals-pic">
                            <img src={professionals} className="img-fluid" alt="mental health professionals"/>
                        </Col>
                        <Col md={6} className="directory-about">
                            <p className="directory-about-description">
                            Take a look at our curated directory of highly credentialed and devoted mental health professionals <br/>
                            who share our unwavering commitment to your emotional and psychological well-being.
                            </p>
                             <div className="getstart-button-container">
                                 <button className="getstart-button">
                                     <Link to="/ProfessionalDirectory" className="custom-link">
                                        Get Started
                                     </Link>
                                 </button>
                             </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default Home2;