import './loginPage.css';
import Background from '../components/login/background';
import Buttons from '../components/login/buttons';

const bgColor = "#eeeeee";
document.body.style = 'background:' + bgColor + ';';

export default function LoginPage() {
  return (
    <div>
      <Background />
      <Buttons />
    </div>
  );
}