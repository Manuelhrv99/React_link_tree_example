import './signInButton.css';
//import '../form.css';

export default function SignInButton() {
    return (
        <div className="center">

            <div className="grid">
                <form className="formSignIn login">

                    <div className="form__field">
                        <input type="submit" value="Sign In" />
                    </div>

                </form>
            </div>

        </div>
    );
}