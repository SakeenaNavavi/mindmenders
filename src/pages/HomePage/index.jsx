import { Container, Row, Col } from "react-bootstrap";
import './index.css';
import Home2 from './index1.jsx';
import Home3 from "./index2";
import animation from './videoplayback.mp4';
const Home=()=>
{
    return(
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={6} className="home-header">
                            <h1 className="heading">MindMenders</h1>
                            <p className="heading-content">Guiding Your Path to Mental Wellness<br/> 
                            Your Trusted Mental Health Support Network</p>
                        </Col>
                        <Col md={6} className="home-animation">
                            <video className="home-video"  loop autoPlay muted>
                                <source src={animation} type="video/mp4"/>
                            </video>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2/>
            <Home3/>
        </section>
    )
}
export default Home;