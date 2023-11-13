import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ResourceLibrary from './resourceLibrary.png'
const Home4=()=>{
    return(
        <div>
            <section>
                <Container fluid className="home-directory">
                    <Row>
                        <Col md={6} className="professionals-pic">
                            <img src={ResourceLibrary} className="img-fluid" alt="mental health professionals animation"/>
                        </Col>
                        <Col md={6} className="directory-about">
                            <p className="directory-about-description">
                            Dive into our comprehensive Resource Library, your gateway to a wealth of informative and empowering materials.
                             Discover a curated collection of videos,articles, and books, meticulously selected to support your mental health and well-being.
                            </p>
                             <div className="getstart-button-container">
                                 <button className="lib-button">
                                     <Link to="/ResourceLibrary" className="custom-link">
                                        Start Exploring!
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
export default Home4;