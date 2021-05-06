import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    image: {
        width: '8vw',
        height: '8vw',
        position: 'fixed',
        right: '0px',
        bottom: '0px',
        marginRight: '20px',
        marginBottom: '20px',
    }
}));

export default function Qr(props) {

    const classes = useStyles();

    return (
        <Fragment>
            <img className={classes.image} src={props.src} alt="Qr code" />
        </Fragment>
    )
}