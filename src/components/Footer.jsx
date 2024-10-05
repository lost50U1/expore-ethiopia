import { Link } from "react-router-dom";
import { logoblackImg } from "../utils";

const Footer = () => {
  return (
    <footer>
      <div className="container w-full px-4 sm:px-0">
        <hr className="border-lightgray" />
        <div className="py-8">
          <div className="flex gap-2 items-center mb-5">
            <div>
              <img src={logoblackImg} alt="logo" />
            </div>
            <div>
              <p className="font-bold">Explore Ethiopia</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <p className="text-lightergray font-medium">
              &copy; 2024 Explore Ethiopia
            </p>
            <div>
              <nav className="font-bold text-darkgray">
                <ul className="flex flex-wrap gap-7 ">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Tours</Link>
                  </li>
                  <li>
                    <Link to="/">Destinations</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
