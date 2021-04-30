import './registerButton.css';
import '../form.css';
import { Link } from 'react-router-dom';

export default function RegisterButton() {
    return (
        <div className="center">

            <div className="grid">
                <form className="form login">

                    <div className="form__field">
                        <Link style={{ inlineSize: "100%" }} as={Link} to="/register">
                            <input id="register" type="submit" value="Register" />
                        </Link>
                    </div>

                </form>
            </div>

        </div>
    );
}