import SinusPng from '../../../../assets/sinus.png';
import TrianglePng from '../../../../assets/dreieck.png';

const MenuLinks = () => {
  const Icon = ({ href, src, alt, txt }) => (
    <a
      href={href}
      className="w-32 p-4 flex flex-col items-center justify-center hover:text-blue-300 text-lg cursor-pointer"
    >
      <img className="h-10 w-auto self-center" src={src} alt={alt} />
      {txt}
    </a>
  );

  return (
    <div className="flex items-center justify-center bg-blue-900 rounded-3xl bg-opacity-80 text-white w-auto">
      <Icon href="/dreieck" src={TrianglePng} alt="triangle" txt="Dreieck" />
      <Icon
        href="/"
        src="https://assets.codepen.io/907368/home.svg"
        alt="home"
        txt="Home"
      />
      <Icon
        href="/trigonomie"
        src={SinusPng}
        alt="trigonomie"
        txt="Trigonomie"
      />
    </div>
  );
};

export default MenuLinks;
