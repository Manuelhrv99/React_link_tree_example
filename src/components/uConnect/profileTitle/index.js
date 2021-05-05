import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    title: {
        marginTop: '20px',
        marginBottom: '0',
        fontSize: '6vw',
        color: 'white',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    }
}));



export default function ProfileTitle(props) {

    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.center}>
                <p className={classes.title}>{props.text}</p>
            </div>
        </Fragment>
    );
}