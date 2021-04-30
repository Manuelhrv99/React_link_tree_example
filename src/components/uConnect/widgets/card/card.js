import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const CardTitle = "Investigación biológica";
const CardText = "Asistí en la investigación sobre clonacion del ADN en el año 2018.";
const CardImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQzMi4wMjQgNDg3LjQyOGgtNDE2Ljk4OGMtMTAuNzg5LjMyNS0xOC41NDMtMTIuMTgtMTMuNDItMjEuNjk4bDMxLjE1NS02Mi40MWMyLjUzOS01LjA4NyA3LjczNS04LjMgMTMuNDItOC4zaDM1NC42NzdjNS42ODQgMCAxMC44ODEgMy4yMTQgMTMuNDIgOC4zbDMxLjE1NSA2Mi40MWM1LjExNyA5LjUxOS0yLjYxOSAyMi4wMjItMTMuNDE5IDIxLjY5OHoiIGZpbGw9IiNiNmI2YjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjIzLjUzIDI5OC40OTdjLTM5Ljg2OCAwLTczLjEzOSAyOC43MDMtODAuMjg0IDY2LjUyNWgxNjAuNTY4Yy03LjE0NS0zNy44MjItNDAuNDE2LTY2LjUyNS04MC4yODQtNjYuNTI1eiIgZmlsbD0iI2I2YjZiNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNDguNjg5IDI3MS41NzljMC04LjI4NC02LjcxNS0xNC45OTktMTQuOTk5LTE0Ljk5OWgtNjQuNjk3Yy04LjI4NCAwLTE0Ljk5OSA2LjcxNS0xNC45OTkgMTQuOTk5czYuNzE1IDE0Ljk5OSAxNC45OTkgMTQuOTk5aDIyLjc5NmM4LjE2MSAxNi4xMjYgMTkuMTU1IDMwLjUzNSAzMi4zOTIgNDIuNTc3IDQuNjc0LTkuMDU2IDEwLjU1My0xNy4zOTIgMTcuNDItMjQuODAyLTUuNTcyLTUuNDA5LTEwLjYwNC0xMS4zNjEtMTUuMDE4LTE3Ljc3NWg3LjEwN2M4LjI4MyAwIDE0Ljk5OS02LjcxNiAxNC45OTktMTQuOTk5eiIgZmlsbD0iI2I2YjZiNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im00NTYuOTM1IDEyNC44MDctMjQuNzIyLTY4LjAyOWMtMi44MjktNy43ODUtMTEuNDM1LTExLjgwNC0xOS4yMTgtOC45NzVsLTE2Ny40NDkgNjAuODRjLTcuNjI4IDIuNjA0LTExLjg3NiAxMS43MDEtOC45NzUgMTkuMjJsMjQuNzIzIDY4LjAzYzIuODE5IDcuODYyIDExLjYzOCAxMS43ODkgMTkuMjE4IDguOTc1bDU1LjI4NC0yMC4wODdjMy41NDkgMTEuMzIgNS4zNDQgMjMuMTA2IDUuMzQ0IDM1LjE3OSAwIDMyLjA3OC0xMy4zNTQgNjIuNDczLTM1LjczNyA4NC4zMzMgNi44ODQgNy40MTcgMTIuNzc3IDE1Ljc2NSAxNy40NjEgMjQuODM2IDkuNTQtOC42ODYgMTcuOTY3LTE4LjYxNCAyNS4wMDktMjkuNTk4IDE1LjIyLTIzLjczOCAyMy4yNjQtNTEuMjU0IDIzLjI2NC03OS41NyAwLTE1LjU5Ny0yLjQwMS0zMC44MjEtNy4xMzEtNDUuNDI5bDgzLjk1My0zMC41MDRjNy42MjktMi42MDQgMTEuODc4LTExLjcwMiA4Ljk3Ni0xOS4yMjF6IiBmaWxsPSIjYjZiNmI2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTIxMC40MDggMTYyLjgwMWMtNy43NyAyLjg3LTExLjc0MyAxMS40OTYtOC44NzIgMTkuMjY3IDIuMjM4IDYuMDU2IDcuOTcxIDkuODA1IDE0LjA3MiA5LjgwNSAxLjcyNSAwIDMuNDgyLS4zIDUuMTk1LS45MzRsNS45NzMtMi4yMDYtMTAuMjQ2LTI4LjE5M3oiIGZpbGw9IiNiNmI2YjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNTA2LjI2NiAyNy43NjljLTQuMDk4LTMuMjE5LTkuNTcxLTQuMDgtMTQuNDYzLTIuMjc0bC0zNS4yNTIgMTMuMDIzYzEuNTMgMi41MDcgMi44MjkgNS4xODYgMy44NTcgOC4wMTQgMCAwIDI2LjkzMiA3NS42NjggMjcuMjcxIDc5LjU1OGw2LjQzOC0yLjM3OGM1LjMwMy0xLjk1OSA5LjA1NS02LjczNSA5LjcwMi0xMi4zNTFsOC4wODEtNzAuMDc5Yy41OTgtNS4xNzYtMS41MzUtMTAuMjkzLTUuNjM0LTEzLjUxM3oiIGZpbGw9IiNiNmI2YjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==";
//Titulo
const TitleStyle = {
    font: '3vw',
    color: 'white'
};

const Title = styled.p`
  color: ${TitleStyle.color};
  font-size: ${TitleStyle.font};
`;

//Texto de relleno
const TextStyle = {
    font: '2.5vw',
    color: 'rgb(182, 182, 182)'
};

const Text = styled.p`
  color: ${TextStyle.color};
  font-size: ${TextStyle.font}
`;

//Iconos o imagenes
const ImgStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const Divider = () => (
    <hr style={{ margin: "0" }} className="Solid" />
);

export default function Card() {
    return (
        <div style={{ marginBottom: "5vw", marginTop: "5vw" }}>
            <Container>
                <div className="Indentation">

                    <Row>
                        <Col style={ImgStyle}>
                            <img style={{ width: "10vw" }} alt="Microscope" src={CardImage} />
                        </Col>
                        <Col xs={9}>
                            <Title>{CardTitle}</Title>
                            <Text>{CardText}</Text>
                            <Divider />
                        </Col>
                    </Row>

                </div>
            </Container>

        </div>
    );
}
