import './profileImg.css';
import { Container, Col, Row } from 'react-bootstrap';
import AddImg from './addImg.png';

export default function ProfileImg() {
    return (
            <Container>
                <Row>
                    <Col style={{display: 'flex',  justifyContent:'center'}}>
                        <p style={{marginBottom: "10px"}}>Profile Pic</p>
                    </Col>
                    <Col style={{display: 'flex',  justifyContent:'center'}}>
                        <p style={{marginBottom: "10px"}}>Background Img</p>
                    </Col>
                </Row>

                <Row>
                    <Col style={{display: 'flex',  justifyContent:'center'}}>
                        <div id="profilePic">
                            <img style={{ maxWidth: "120px" }} src={AddImg} alt="U-CONNECT logo" />
                        </div>
                    </Col>
                    <Col style={{display: 'flex',  justifyContent:'center'}}>
                        <div id="profileBackground">
                            <img style={{ maxWidth: "120px" }} src={AddImg} alt="U-CONNECT logo" />
                        </div>
                    </Col>
                </Row>
            </Container>
    );
}