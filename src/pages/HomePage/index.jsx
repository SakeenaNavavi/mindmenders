import Navbar from "../../Components/molecules/Navbar/index.jsx";
import { Container, Row, Col } from "react-bootstrap";
import './index.css';
import Home2 from './index1.jsx';
import Home3 from "./index2.jsx";
import Home4 from "./index3.jsx";
import Home5 from "./index4.jsx";
import animation from './videoplayback.mp4';
const Home=()=>
{
    return(
        
        <section>
        <Navbar/>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={6} className="home-header">
                            <h1 className="home-heading">MindMenders</h1>
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
            <Home4/>
            <Home5/>
            
        </section>
        
    )
}
export default Home;