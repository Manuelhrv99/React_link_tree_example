import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    text: {
        fontSize: '2vw',
        color: 'rgb(182, 182, 182)',
    },
    center: {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '50px',
        paddingTop: '50px',
    }
}));

export default function Footer() {

    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.center}>
                <p className={classes.text}>¿Quieres tu propia página? Registrate</p>
            </div>
        </Fragment>
    )
}