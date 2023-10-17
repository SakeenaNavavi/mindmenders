import {Container, Row, Col} from 'react-bootstrap';
import professionals from './professionals.PNG';
const Home2=()=>{
    return(
        <div>
            <section>
                <Container fluid className="home-directory">
                    <Row>
                        <Col md={4} className="professionals-pic">
                            <img src={professionals} className="img-fluid" alt="mental health professionals animation"/>
                        </Col>
                        <Col md={8} className="directory-about">
                            <p className="directory-about-description">
                            Explore our curated directory of highly credentialed and devoted mental health professionals <br/>
                            who share our unwavering commitment to your emotional and psychological well-being.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default Home2;