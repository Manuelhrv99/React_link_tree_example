import React, { useState } from "react";
import { useDispatch } from 'react-redux';
//API
//import { useSelector } from 'react-redux';
import { GetUserAction } from '../../redux/loginDucks';
import "./login.css";
import Login_img from "../Logo.png";
// import { auth } from "./firebase";
import { useHistory,} from "react-router-dom";
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

    //API
    //const user = useSelector(store => store.users.array)

    const classes = useStyles();

    const history = useHistory("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Funcion con API
    /*function auth (email, password) {
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
    }*/

    function auth (email, password) {
        if (email === "Admin") {
            if (password === "1234") {
                history.push("/user");
            }
            else{
                alert("El usuario o la contraseña es incorrecta")
            }
        }
        else{
            alert("El usuario o la contraseña es incorrecta")
        }
    }
    

    return (
        <div className="login">
            <img src={Login_img} className="login__logo" alt="Comapany logo" />
            <div className="login__container">
                <h5 className={classes.text}>Login to Uconnect</h5>
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
                </form>
            </div>
        </div>
    );
}

export default Login;