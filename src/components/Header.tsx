import Logo from "../assets/images/logo.svg";
import Hamburger from "../assets/images/icon-hamburger.svg";
import Close from "../assets/images/icon-close.svg";

interface IHeader {
  mobileNavVisible: boolean;
  setMobileNavVisible: (visible: boolean) => void;
}

const Header = ({ mobileNavVisible, setMobileNavVisible }: IHeader) => {
  return (
    <header className="bg-white  flex justify-center">
      <nav className="container flex justify-between my-6">
        <div className="flex justify-center items-center">
          <a href="#">
            <img src={Logo} alt="" className="logo" />
          </a>
        </div>
        {/* Desktop menu */}
        <menu className="hidden desktop:flex gap-2">
          <li>
            <a href="#" className="navLink">
              How we work
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Account
            </a>
          </li>
          <li>
            <a href="#" className="navLink featured">
              View plans
            </a>
          </li>
        </menu>

        {/* Mobile Nav Button */}
        <button
          className="flex desktop:hidden"
          onClick={() => setMobileNavVisible(!mobileNavVisible)}
        >
          <img src={mobileNavVisible ? Close : Hamburger} alt="" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
