import './loginButton.css';
import '../login.css';
import { Link } from 'react-router-dom';

export default function LoginButton() {
    return (
        <div className="center">

            <div className="grid">
                <form className="form login">

                    <div className="form__field">
                        <Link style={{ inlineSize: "100%" }} as={Link} to="/user">
                            <input type="submit" value="Login" />
                        </Link>
                    </div>

                </form>
            </div>

        </div>
    );
}