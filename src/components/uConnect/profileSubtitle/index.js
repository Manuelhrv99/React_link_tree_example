import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    subtitle: {
        fontSize: '4vw',
        color: 'rgb(182, 182, 182)',
        marginBottom: '0',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

export default function ProfileSubtitle(props) {

    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.center}>
                <p className={classes.subtitle}>{props.text}</p>
            </div>
        </Fragment>
    );
}