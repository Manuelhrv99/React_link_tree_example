import './profileImg.css';
import img from './Hugo.jpeg'

export default function ProfileImg (){
    return (
        <div className="center">
            <img id="profileImg" src={img} alt="User"/>
        </div>
    );
}