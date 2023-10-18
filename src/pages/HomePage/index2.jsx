import {Container, Row, Col, Button} from 'react-bootstrap';
import quiz from './quiz.PNG';
const Home3=()=>{
    return(
        <section>
            <Container fluid className="home-quizzes">
                <Row>
                    <Col md={6} className="quiz-about">
                        <p className="quiz-about-description">To assess your mental well-being with accuracy and authenticity,<br/>
                         we invite you to engage in our reliable and professionally crafted mental health assessments.</p>
                         <Button type="button" class="btn btn-primary" id="quiz-button">Start now!</Button>
                    </Col>
                    <Col md={6} className="quiz-picture">
                        <img src={quiz} class="img-fluid" alt="quiz assessments"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Home3;