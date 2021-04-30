import './logo.css';
import '../form.css';
import LogoImg from './Logo.png';

export default function Logo() {
    return (
        <div className="center">

            <div id="formLogo">
                <img style={{maxWidth: "120px"}} src={LogoImg} alt="U-CONNECT logo" />
            </div>

        </div>
    );
}