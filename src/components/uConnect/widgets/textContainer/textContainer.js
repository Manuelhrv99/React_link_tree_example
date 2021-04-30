import './textContainer.css';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

const TitleText = "Curriculum Vitae";
const SubtitleText = "IBM Data Analyst";
const TagText = "Experiencia";
const FillText = "Recopile e interpreté grandes cantidades de datos; logré una gestion precisa y satisfactoria.";

//Titulo
const TitleStyle = {
    font: '4vw',
    color: 'white'
  };

const Title = styled.p`
  color: ${TitleStyle.color};
  font-size: ${TitleStyle.font};
`;

//Subtitulo
const SubtitleStyle = {
    font: '3vw',
    color: 'white'
  };

const Subtitle = styled.p`
  color: ${SubtitleStyle.color};
  font-size: ${SubtitleStyle.font};
`;

//Etiqueta de la derecha
const TagStyle = {
    font: '2vw',
    color: 'rgb(182, 182, 182)'
  };

const Tag = styled.p`
  color: ${TagStyle.color};
  font-size: ${TagStyle.font};
`;

//Texto del contenedor
const TextStyle = {
    font: '2.5vw',
    color: 'rgb(182, 182, 182)'
  };

const Text = styled.p`
  color: ${TextStyle.color};
  font-size: ${TextStyle.font};
`;

const Divider = () => (
    <hr className="Solid" />
);

export default function TextContainer (){
    return (
        <div>
            <Container>

                <Title id="ContainerTitle">{TitleText}</Title>

                <div className="Indentation">
                    
                    <div className="InLine">
                        <div id="ContainerSubtitle">
                            <Subtitle>{SubtitleText}</Subtitle>
                        </div>
                        <div id="ContainerTag">
                            <Tag>{TagText}</Tag>
                        </div>
                    </div>
                    
                    <Text>{FillText}</Text>

                    <Divider />
                    
                </div>
            </Container>
        </div>
    );
}