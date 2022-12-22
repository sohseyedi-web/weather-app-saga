import "./Navbar.scss";
import * as RiIcon from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navs">
      <div className="container-fluid navs-container">
        <h3>Weather App Saga</h3>
        <a target={"_blank"} href="https://github.com/sohseyedi-web/weather-app-saga">
          <RiIcon.RiGithubLine size={28} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
