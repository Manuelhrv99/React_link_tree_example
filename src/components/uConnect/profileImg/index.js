import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    image: {
        marginTop: '5vh',
        width: '15%',
        height: 'auto',
        borderRadius: '50%',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

export default function ProfileImg(props) {

    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.center}>
                <img className={classes.image} src={props.src} alt="User" />
            </div>
        </Fragment>
    )
}