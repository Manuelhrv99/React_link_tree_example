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
const cardImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQzMi4wMjQgNDg3LjQyOGgtNDE2Ljk4OGMtMTAuNzg5LjMyNS0xOC41NDMtMTIuMTgtMTMuNDItMjEuNjk4bDMxLjE1NS02Mi40MWMyLjUzOS01LjA4NyA3LjczNS04LjMgMTMuNDItOC4zaDM1NC42NzdjNS42ODQgMCAxMC44ODEgMy4yMTQgMTMuNDIgOC4zbDMxLjE1NSA2Mi40MWM1LjExNyA5LjUxOS0yLjYxOSAyMi4wMjItMTMuNDE5IDIxLjY5OHoiIGZpbGw9IiNiNmI2YjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjIzLjUzIDI5OC40OTdjLTM5Ljg2OCAwLTczLjEzOSAyOC43MDMtODAuMjg0IDY2LjUyNWgxNjAuNTY4Yy03LjE0NS0zNy44MjItNDAuNDE2LTY2LjUyNS04MC4yODQtNjYuNTI1eiIgZmlsbD0iI2I2YjZiNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNDguNjg5IDI3MS41NzljMC04LjI4NC02LjcxNS0xNC45OTktMTQuOTk5LTE0Ljk5OWgtNjQuNjk3Yy04LjI4NCAwLTE0Ljk5OSA2LjcxNS0xNC45OTkgMTQuOTk5czYuNzE1IDE0Ljk5OSAxNC45OTkgMTQuOTk5aDIyLjc5NmM4LjE2MSAxNi4xMjYgMTkuMTU1IDMwLjUzNSAzMi4zOTIgNDIuNTc3IDQuNjc0LTkuMDU2IDEwLjU1My0xNy4zOTIgMTcuNDItMjQuODAyLTUuNTcyLTUuNDA5LTEwLjYwNC0xMS4zNjEtMTUuMDE4LTE3Ljc3NWg3LjEwN2M4LjI4MyAwIDE0Ljk5OS02LjcxNiAxNC45OTktMTQuOTk5eiIgZmlsbD0iI2I2YjZiNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im00NTYuOTM1IDEyNC44MDctMjQuNzIyLTY4LjAyOWMtMi44MjktNy43ODUtMTEuNDM1LTExLjgwNC0xOS4yMTgtOC45NzVsLTE2Ny40NDkgNjAuODRjLTcuNjI4IDIuNjA0LTExLjg3NiAxMS43MDEtOC45NzUgMTkuMjJsMjQuNzIzIDY4LjAzYzIuODE5IDcuODYyIDExLjYzOCAxMS43ODkgMTkuMjE4IDguOTc1bDU1LjI4NC0yMC4wODdjMy41NDkgMTEuMzIgNS4zNDQgMjMuMTA2IDUuMzQ0IDM1LjE3OSAwIDMyLjA3OC0xMy4zNTQgNjIuNDczLTM1LjczNyA4NC4zMzMgNi44ODQgNy40MTcgMTIuNzc3IDE1Ljc2NSAxNy40NjEgMjQuODM2IDkuNTQtOC42ODYgMTcuOTY3LTE4LjYxNCAyNS4wMDktMjkuNTk4IDE1LjIyLTIzLjczOCAyMy4yNjQtNTEuMjU0IDIzLjI2NC03OS41NyAwLTE1LjU5Ny0yLjQwMS0zMC44MjEtNy4xMzEtNDUuNDI5bDgzLjk1My0zMC41MDRjNy42MjktMi42MDQgMTEuODc4LTExLjcwMiA4Ljk3Ni0xOS4yMjF6IiBmaWxsPSIjYjZiNmI2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTIxMC40MDggMTYyLjgwMWMtNy43NyAyLjg3LTExLjc0MyAxMS40OTYtOC44NzIgMTkuMjY3IDIuMjM4IDYuMDU2IDcuOTcxIDkuODA1IDE0LjA3MiA5LjgwNSAxLjcyNSAwIDMuNDgyLS4zIDUuMTk1LS45MzRsNS45NzMtMi4yMDYtMTAuMjQ2LTI4LjE5M3oiIGZpbGw9IiNiNmI2YjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNTA2LjI2NiAyNy43NjljLTQuMDk4LTMuMjE5LTkuNTcxLTQuMDgtMTQuNDYzLTIuMjc0bC0zNS4yNTIgMTMuMDIzYzEuNTMgMi41MDcgMi44MjkgNS4xODYgMy44NTcgOC4wMTQgMCAwIDI2LjkzMiA3NS42NjggMjcuMjcxIDc5LjU1OGw2LjQzOC0yLjM3OGM1LjMwMy0xLjk1OSA5LjA1NS02LjczNSA5LjcwMi0xMi4zNTFsOC4wODEtNzAuMDc5Yy41OTgtNS4xNzYtMS41MzUtMTAuMjkzLTUuNjM0LTEzLjUxM3oiIGZpbGw9IiNiNmI2YjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==";

const cardTitle2 = "Ciencia nuclear";
const cardText2 = "Tuve la fortuna de participar en una investigion de atomos.";
const cardImage2 = "https://www.flaticon.com/svg/vstatic/svg/2933/2933803.svg?token=exp=1620197550~hmac=a09eec817e8e8a3212e7a0345ce7c106";

const cardTitle3 = "Entrenamiento de robots";
const cardText3 = "Ayude a crear la inteligencia artificial de un robot en Japon.";
const cardImage3 = "https://www.flaticon.com/svg/vstatic/svg/2432/2432846.svg?token=exp=1620197860~hmac=cd200cacdc182eb41a816580aabd201a";
//Links
const linkTitle = "Facebook";
const linkText = "Sigueme en Facebook!";
const linkImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik00NDgsMEg2NEMyOC43MDQsMCwwLDI4LjcwNCwwLDY0djM4NGMwLDM1LjI5NiwyOC43MDQsNjQsNjQsNjRoMzg0YzM1LjI5NiwwLDY0LTI4LjcwNCw2NC02NFY2NCAgQzUxMiwyOC43MDQsNDgzLjI5NiwwLDQ0OCwweiIgZmlsbD0iI2I2YjZiNiIgZGF0YS1vcmlnaW5hbD0iIzE5NzZkMiIgY2xhc3M9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik00MzIsMjU2aC04MHYtNjRjMC0xNy42NjQsMTQuMzM2LTE2LDMyLTE2aDMyVjk2aC02NGwwLDBjLTUzLjAyNCwwLTk2LDQyLjk3Ni05Niw5NnY2NGgtNjR2ODBoNjQgIHYxNzZoOTZWMzM2aDQ4TDQzMiwyNTZ6IiBmaWxsPSIjZmFmYWZhIiBkYXRhLW9yaWdpbmFsPSIjZmFmYWZhIj48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=";
const linkRef = "https://www.facebook.com/sundar.pichai";

const linkTitle2 = "Youtube";
const linkText2 = "Sigueme en Youtube!";
const linkImage2 = "https://www.flaticon.com/svg/vstatic/svg/1384/1384028.svg?token=exp=1620199020~hmac=47342d2913e3240f43660548aae4ed86";
const linkRef2 = "https://www.youtube.com/channel/UCK8sQmJBp8GCxrOtXWBpyEA";

const linkTitle3 = "Twitter";
const linkText3 = "Sigueme en Twitter!";
const linkImage3 = "https://www.flaticon.com/svg/vstatic/svg/25/25347.svg?token=exp=1620198986~hmac=ad3f7c9df9790e29a1ce9eec529db3a8";
const linkRef3 = "https://twitter.com/sundarpichai?lang=es";
//Qr
const qrImage = 'https://thumbs.dreamstime.com/t/retrato-lindo-del-gato-foto-cuadrada-105311158.jpg';

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