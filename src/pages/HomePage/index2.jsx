import { Container, Row, Col, Button } from 'react-bootstrap';
import quiz from './quiz.png';
import { Link } from 'react-router-dom';

const Home3 = () => {
    return (
        <section>
        
            <Container fluid className="home-quizzes">
                <Row>
                    <Col md={6} className="quiz-about">
                        <p className="quiz-about-description">To assess your mental well-being with accuracy and authenticity,<br />
                            we invite you to engage in our reliable and professionally crafted mental health assessments.</p>
                        <div className="quizzes-button-container">
                            <button className="quizzes-button">
                                <Link to="/Quizzes" className="custom-link">
                                    Start Now!
                                </Link>
                            </button>
                        </div>
                    </Col>
                    <Col md={6} className="quiz-picture">
                        <img src={quiz} class="img-fluid" alt="quiz assessments" />
                    </Col>
                </Row>
            </Container>
           
        </section>
    );
}
export default Home3;