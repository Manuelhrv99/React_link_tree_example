import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GetUserAction } from '../../redux/loginDucks';
import "./login.css";
import Login_img from "../Logo.png";
// import { auth } from "./firebase";
import {
    //BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    useHistory,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    text: {
        color: 'black',
        marginTop: '24px',
        marginBottom: '20px',
        fontFamily: 'Helvectica, Arial, sans-serif',
        textAlign: 'center',
    }
}));

function Login() {

    const dispatch = useDispatch();

    const user = useSelector(store => store.users.array)

    // var userArray = user.map(function (obj) {
    //     var rObj = {};
    //     rObj[obj.correoElectronico] = obj.contraseña;
    //     return rObj;
    // });
    // console.log(userArray)

    const classes = useStyles();

    const history = useHistory("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //user.forEach(element => console.log(element.correoElectronico));

    function auth (email, password) {
        user.forEach(element => {
            if (element.correoElectronico === email) {
                if (element.contraseña === password) {
                    history.push("/user");
                }
                else{
                    alert("La contraseña es incorrecta")
                }
            }
        });
    }
    

    return (
        <div className="login">
            <img src={Login_img} className="login__logo" alt="Comapany logo" />
            <div className="login__container">
                <h5 className={classes.text}>Log in to Uconnect</h5>
                <form>
                    <center>
                        <input
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Email Address"
                        />

                    </center>
                    <center>
                        <input
                            style={{ backgroundColor: "white", borderRadius: "5px" }}
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Password"
                        />
                    </center>
                    <center>
                        <button type="button" className="login__login" onClick={() => {dispatch(GetUserAction()); auth(email, password);}}>
                            Log In
                        </button>
                    </center>
                    <center>
                        <div className="sideinfo">
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                <h6 className="rtd">Sign up to Uconnect</h6>
                            </Link>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    );
}

export default Login;