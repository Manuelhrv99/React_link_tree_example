import ProfileImg from '../../components/uConnect/profileImg';
import ProfileTitle from '../../components/uConnect/profileTitle';
import ProfileSubtitle from '../../components/uConnect/profileSubtitle';
import ImageCarousel from '../../components/uConnect/widgets/imageCarousel';
import TextContainer from '../../components/uConnect/widgets/textContainer';
import Card from '../../components/uConnect/widgets/card';
import Link from '../../components/uConnect/widgets/link';
import Qr from '../../components/uConnect/qr';
import Footer from '../../components/uConnect/footer';

//***Props***
//ProfileImg
const imgSrc = 'https://snz04pap002files.storage.live.com/y4mtsLqweEgUYS7iKw85wMKT5WTCYc_cZz0xxoaVt126x3X3gBlAGnITSipwn7CyyWS4eCuKPhuQzT1Qg8yr2_Zx_cEnv8TeZmmGgJTDo_0xZmdz62Fvd5tHweik7DAkCVbuS-IwJCZZDqdRmuClLuoV57v-yKtLcq0G3P7keZsdZTZFrgKq_ERh9WCS-MI0ZhM?width=2600&height=2600&cropmode=none';
//ProfileTitle
const title = 'Hugo Angeles';
//ProfileSubtitle
const subtitle = 'Software Engineer';
//Carrusel
const img1 = '';
const img2 = '';
const img3 = '';
//TextContainer
const containerTitle = "Curriculum Vitae";
const containerSubtitle = "IBM Data Analyst";
const containerTag = "Experiencia";
const containerText = "Recopile e interpreté grandes cantidades de datos; logré una gestion precisa y satisfactoria.";
//Cards
const cardTitle = "Investigación biológica";
const cardText = "Asistí en la investigación sobre clonacion del ADN en el año 2018.";
const cardImage = "https://www.flaticon.es/svg/vstatic/svg/3597/3597179.svg?token=exp=1620333364~hmac=b24275b3838eee1782ff6b437cb4dc28";

const cardTitle2 = "Ciencia nuclear";
const cardText2 = "Tuve la fortuna de participar en una investigion de atomos.";
const cardImage2 = "https://www.flaticon.es/svg/vstatic/svg/4593/4593871.svg?token=exp=1620333421~hmac=dd4f85c668aab25e7b4a5f4c132b4652";

const cardTitle3 = "Entrenamiento de robots";
const cardText3 = "Ayude a crear la inteligencia artificial de un robot en Japon.";
const cardImage3 = "https://www.flaticon.es/svg/vstatic/svg/3597/3597179.svg?token=exp=1620333364~hmac=b24275b3838eee1782ff6b437cb4dc28";
//Links
const linkTitle = "Facebook";
const linkText = "Sigueme en Facebook!";
const linkImage = "https://www.flaticon.es/svg/vstatic/svg/1051/1051309.svg?token=exp=1620333170~hmac=e7efa81143ba890095a861bcbb3e81e6";
const linkRef = "https://www.facebook.com/sundar.pichai";

const linkTitle2 = "Youtube";
const linkText2 = "Sigueme en Youtube!";
const linkImage2 = "https://www.flaticon.es/premium-icon/icons/svg/3536/3536438.svg";
const linkRef2 = "https://www.youtube.com/channel/UCK8sQmJBp8GCxrOtXWBpyEA";

const linkTitle3 = "Twitter";
const linkText3 = "Sigueme en Twitter!";
const linkImage3 = "https://www.flaticon.es/svg/vstatic/svg/25/25347.svg?token=exp=1620333206~hmac=f369dd3eb4f597fe6254878e8f741a5e";
const linkRef3 = "https://twitter.com/sundarpichai?lang=es";
//Qr
const qrImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADeAQMAAABoqSz0AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABSElEQVRYhe2X2Q3EIAxELVEAJdF6SqIAJK89k5BjGxgkLJQQHh/BGh+Ybdu2pnnaUXorfliNkd9DFea7HiOWzUo3TnRh9VjwXHazFhvjZOowrDdsWQCWVEpKRh1CJiHqOf/TkBBkCI46x398CsHrQI2ifi/LQTobvx8ZzlMv7rIQkRcaIfHrTKIwIi+Xs3R4JoyX4+Vg/DufsQvJ2DERhflFjeAc9PpQhZmDQynRQWT8tcwZdyDKwXhDJvC9R31G76MKUTfgcooFtW6oQlYMg7+vzHGfUw0a1pJcuS2HMkR64y72PrKQQkZWmweapgfRpBd0PaUD3o6XgzReLNj2ejdThWwn7ax1ja26LJzteSjF4PLx7eOVIK5BDEQ+H42PKDx7yXoWujUgSrQ/+ng5SJlU592dd4uhChmCSBXtLCDf+BSC27atZj/Kd6w+pngWagAAAABJRU5ErkJggg==';

const bgColor = "#292929";
document.body.style = 'background:' + bgColor + ';';

export default function uConnect() {
  return (
    <div>
      <ProfileImg src={imgSrc} />
      <ProfileTitle text={title} />
      <ProfileSubtitle text={subtitle} />
      <ImageCarousel src1={img1} src2={img2} src3={img3} />
      <TextContainer title={containerTitle} subtitle={containerSubtitle} tag={containerTag} text={containerText} />
      <Card title={cardTitle} text={cardText} src={cardImage} />
      <Card title={cardTitle2} text={cardText2} src={cardImage2} />
      <Card title={cardTitle3} text={cardText3} src={cardImage3} />
      <Link title={linkTitle} text={linkText} src={linkImage} link={linkRef} divider={true} />
      <Link title={linkTitle2} text={linkText2} src={linkImage2} link={linkRef2} divider={true} />
      <Link title={linkTitle3} text={linkText3} src={linkImage3} link={linkRef3} divider={false} />
      <Qr src={qrImage} />
      <Footer />
    </div>
  );
}