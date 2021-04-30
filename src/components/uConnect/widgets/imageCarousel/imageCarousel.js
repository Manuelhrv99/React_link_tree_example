import './imageCarousel.css';
import {Carousel, Container} from 'react-bootstrap';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

const Divider = () => (
    <hr className="Solid" />
);

export default function ImageCarousel (){
    return (
        
        <div className="center">

            <Container id="Carousel">

                <Divider />

                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            
        </div>
    );
}