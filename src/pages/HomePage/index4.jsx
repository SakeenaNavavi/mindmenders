import {Container, Row, Col, Button} from 'react-bootstrap';
import OnlineCommunity from './onlineCommunity.png';
import { Link } from 'react-router-dom';
const Home5=()=>{
    return(
        <section>
            <Container fluid className="home-quizzes">
                <Row>
                    <Col md={6} className="quiz-about">
                        <p className="quiz-about-description">Join our vibrant online community, where individuals 
                        come together to share experiences, offer support, and foster connections. This peer network 
                        provides a safe and nurturing space to connect with like-minded individuals on your mental health journey.</p>
                         <div className="quizzes-button-container">
                                 <button className="quizzes-button">
                                     <Link to="/OnlineCommunity" className="custom-link">
                                        Join Now!
                                     </Link>
                                 </button>
                             </div>
                    </Col>
                    <Col md={6} className="quiz-picture">
                        <img src={OnlineCommunity} class="img-fluid" alt="quiz assessments"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Home5;