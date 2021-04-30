import './background.css';
//import '../signIn.css';
import ProfileImg from '../profileImg';
import Inputs from '../inputs';
import SignInButton from '../signInButton';

export default function Background() {
    return (
        <div className="center">

            <div id="formBackgroundSignIn">
                <ProfileImg />
                <Inputs />
                <SignInButton />
            </div>

        </div>
    );
}