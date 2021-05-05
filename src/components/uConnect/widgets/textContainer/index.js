import { Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    indentation: {
        padding: '0vw 2vw 0vw 2vw',
    },
    containerTag: {
        marginBottom: '0',
        textAlign: 'right',
    },
    title: {
        fontSize: '4vw',
        color: 'white',
    },
    subtitle: {
        fontSize: '3vw',
        color: 'white',
    },
    tag: {
        fontSize: '2vw',
        color: 'rgb(182, 182, 182)',
    },
    text: {
        fontSize: '2.5vw',
        color: 'rgb(182, 182, 182)',
    }
}));

const Divider = () => (
    <hr style={{ borderTop: '1px solid #bbb' }} />
);

export default function TextContainer(props) {

    const classes = useStyles();

    return (
        <Fragment>
            <Container>

                <p className={classes.title}>{props.title}</p>

                <div className={classes.indentation}>

                    <Row>
                        <Col>
                            <p className={classes.subtitle}>{props.subtitle}</p>
                        </Col>
                        <Col className={classes.containerTag}>
                            <p className={classes.tag}>{props.tag}</p>
                        </Col>
                    </Row>

                    <p className={classes.text}>{props.text}</p>

                    <Divider />

                </div>
            </Container>
        </Fragment>
    );
}