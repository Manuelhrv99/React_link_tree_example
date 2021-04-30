import './loginButton.css';
import '../form.css';

export default function LoginButton() {
    return (
        <div className="center">

            <div className="grid">
                <form className="form login">

                    <div className="form__field">
                        <input type="submit" value="Login" />
                    </div>

                </form>
            </div>

        </div>
    );
}