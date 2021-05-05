import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    indentation: {
        padding: '0vw 2vw 0vw 2vw',
    },
    title: {
        fontSize: '5vw',
        color: 'white',
        align: 'center',
    },
    text: {
        fontSize: '3vw',
        color: 'rgb(182, 182, 182)',
        align: 'center',
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

export default function Link(props) {

    const classes = useStyles();

    return (
        <Fragment>
            <Container>
                <div className={classes.indentation}>

                    <Row>
                        <Col className={classes.image}>
                            <a href={props.link}>
                                <img style={{ width: "12vw" }} alt="Icon from a social media" src={props.src} />
                            </a>
                        </Col>
                        <Col xs={7}>
                            <a style={{color: "#845460"}} href={props.link}>
                                <p className={classes.title}>{props.title}</p>
                            </a>
                            <a style={{color: "#845460"}} href={props.link}>
                                <p className={classes.text}>{props.text}</p>
                            </a>
                        </Col>
                    </Row>

                    <Divider />

                </div>
            </Container>

        </Fragment>
    );
}