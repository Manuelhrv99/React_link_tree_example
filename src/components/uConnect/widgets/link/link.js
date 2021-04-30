import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const LinkTitle = "Facebook";
const LinkText = "Sigueme en Facebook!";
const LinkImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik00NDgsMEg2NEMyOC43MDQsMCwwLDI4LjcwNCwwLDY0djM4NGMwLDM1LjI5NiwyOC43MDQsNjQsNjQsNjRoMzg0YzM1LjI5NiwwLDY0LTI4LjcwNCw2NC02NFY2NCAgQzUxMiwyOC43MDQsNDgzLjI5NiwwLDQ0OCwweiIgZmlsbD0iI2I2YjZiNiIgZGF0YS1vcmlnaW5hbD0iIzE5NzZkMiIgY2xhc3M9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik00MzIsMjU2aC04MHYtNjRjMC0xNy42NjQsMTQuMzM2LTE2LDMyLTE2aDMyVjk2aC02NGwwLDBjLTUzLjAyNCwwLTk2LDQyLjk3Ni05Niw5NnY2NGgtNjR2ODBoNjQgIHYxNzZoOTZWMzM2aDQ4TDQzMiwyNTZ6IiBmaWxsPSIjZmFmYWZhIiBkYXRhLW9yaWdpbmFsPSIjZmFmYWZhIj48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=";
const LinkRef = "https://www.facebook.com/sundar.pichai";

//Titulo
const TitleStyle = {
    font: '5vw',
    color: 'white',
    align: 'center'
};

const Title = styled.p`
  color: ${TitleStyle.color};
  font-size: ${TitleStyle.font};

`;

//Texto de relleno
const TextStyle = {
    font: '3vw',
    color: 'rgb(182, 182, 182)',
    align: 'center'
};

const Text = styled.p`
  color: ${TextStyle.color};
  font-size: ${TextStyle.font};
`;

//Iconos o imagenes
const ImgStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export default function Link() {
    return (
        <div style={{ marginBottom: "5vw", marginTop: "5vw" }}>
            <Container>
                <div className="Indentation">

                    <Row>
                        <Col style={ImgStyle}>
                            <a href={LinkRef}>
                                <img style={{ width: "12vw" }} alt="Icon from a social media" src={LinkImage} />
                            </a>
                        </Col>
                        <Col xs={7}>
                            <a style={{color: "#845460"}} href={LinkRef}>
                                <Title>{LinkTitle}</Title>
                            </a>
                            <a style={{color: "#845460"}} href={LinkRef}>
                                <Text>{LinkText}</Text>
                            </a>
                        </Col>
                    </Row>

                </div>
            </Container>

        </div>
    );
}