import './background.css';
import '../form.css';
import Logo from '../logo';
import Inputs from '../inputs';
import LoginButton from '../loginButton';
import RegisterButton from '../registerButton';

export default function Background() {
    return (
        <div className="center">

            <div id="formBackground">
                <Logo />
                <Inputs />
                <LoginButton />
                <RegisterButton />
            </div>

        </div>
    );
}