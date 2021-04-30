import ProfileImg from '../../components/uConnect/profileImg';
import ProfileTitle from '../../components/uConnect/profileTitle';
import ProfileSubtitle from '../../components/uConnect/profileSubtitle';
import ImageCarousel from '../../components/uConnect/widgets/imageCarousel';
import TextContainer from '../../components/uConnect/widgets/textContainer';
import Card from '../../components/uConnect/widgets/card';
import Link from '../../components/uConnect/widgets/link';

const bgColor = "#292929";
document.body.style = 'background:' + bgColor + ';';

export default function uConnect() {
  return (
    <div>
      <ProfileImg />
      <ProfileTitle />
      <ProfileSubtitle />
      <ImageCarousel />
      <TextContainer />
      <Card />
      <Card />
      <Card />
      <Link />
    </div>
  );
}