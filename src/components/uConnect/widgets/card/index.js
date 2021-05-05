import { Container, Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    indentation: {
        padding: '0vw 2vw 0vw 2vw',
    },
    title: {
        fontSize: '3vw',
        color: 'white',
    },
    text: {
        fontSize: '2.5vw',
        color: 'rgb(182, 182, 182)',
    },
    image: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}));

const Divider = () => (
    <hr style={{ margin: "0", borderTop: '1px solid #bbb' }} />
);

export default function Card(props) {

    const classes = useStyles();

    return (
        <div style={{ marginBottom: "5vw", marginTop: "5vw" }}>
            <Container>
                <div className={classes.indentation}>

                    <Row>
                        <Col className={classes.image}>
                            <img style={{ width: "10vw" }} alt="Microscope" src={props.src} />
                        </Col>
                        <Col xs={9}>
                            <p className={classes.title}>{props.title}</p>
                            <p className={classes.text}>{props.text}</p>
                            <Divider />
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    );
}