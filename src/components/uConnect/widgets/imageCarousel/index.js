import { Fragment } from 'react';
import {Carousel, Container} from 'react-bootstrap';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

const Divider = () => (
    <hr style={{borderTop: '1px solid #bbb'}} />
);

export default function ImageCarousel (props){
    return (
        
        <Fragment>

            <Container style={{marginBottom: '20px'}} >

                <Divider />

                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        //props
                        src={img1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        //props
                        src={img2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        //props
                        src={img3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            
        </Fragment>
    );
}