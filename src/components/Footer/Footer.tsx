import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <div className="footer">
        <div className="footer__col-one">
          <h1>Product Verification</h1>
          <p>
            Hillme Product Verification Center Enter or paste the security code
          </p>
          <div className="footer__input">
            <input type="text" placeholder="Security code number" />
            <button>submit</button>
          </div>
          <p className="footer__copyright">
            Copyright {currentYear} INTERNATIONAL,INC.
          </p>
        </div>
        <nav className="footer__col-second">
          <ul>
            <li>Company</li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "footer__link footer__link--active"
                    : "footer__link--inactive"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "footer__link footer__link--active"
                    : "footer__link--inactive"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "footer__link footer__link--active"
                    : "footer__link--inactive"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partner"
                className={({ isActive }) =>
                  isActive
                    ? "footer__link footer__link--active"
                    : "footer__link--inactive"
                }
              >
                Become a Partner
              </NavLink>
            </li>
            <li>
              <img src="/img/header__logo.svg" alt="Logo" title="Logo" />
            </li>
          </ul>
        </nav>
        <nav className="footer__col-third">
          <ul>
            <li>Contact Us</li>
            <li>tel: +861881095851</li>
            <li>Email: @861881095851</li>
            <li>Monday-Friday GMT+8</li>
            <li>
              9:00am-12:00am,
              <br /> 1:30pm-6:00pm
            </li>
            <li>
              <a href="#">
                <img
                  src="/img/Instagram.svg"
                  alt="Instagram"
                  title="Instagram"
                />
              </a>
              <a href="#">
                <img src="/img/TikTok.svg" alt="Tiktok" title="Tiktok" />
              </a>
              <a href="#">
                <img src="/img/YouTube.svg" alt="Youtube" title="Youtube" />
              </a>
              <a href="#">
                <img src="/img/VK.svg" alt="VK" title="VK" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
