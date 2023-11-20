import { useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [searchIcon, setSearchIcon] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <header className="header">
      <div className="header__warning">
        <div className="header__warning-container">
          <strong>WARNING:</strong>
          MINORS are prohibited from buying e-cigarette.
        </div>
      </div>
      <div className="header__content">
        <div className="header__content-container">
          <div className="header__inner">
            <div className="header__logo">
              <Link to="/">
                <img src="/img/header__logo.svg" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-ul">
                <li className="header__nav-li">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "header__nav-li-link header__nav-li-link--active"
                        : "header__nav-li-link--inactive"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="header__nav-li">
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive
                        ? "header__nav-li-link header__nav-li-link--active"
                        : "header__nav-li-link--inactive"
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li className="header__nav-li">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "header__nav-li-link header__nav-li-link--active"
                        : "header__nav-li-link--inactive"
                    }
                  >
                    About us
                  </NavLink>
                </li>
                <li className="header__nav-li">
                  <NavLink
                    to="/partner"
                    className={({ isActive }) =>
                      isActive
                        ? "header__nav-li-link header__nav-li-link--active"
                        : "header__nav-li-link--inactive"
                    }
                  >
                    Become a partner
                  </NavLink>
                </li>
                <li className="header__nav-li">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "header__nav-li-link header__nav-li-link--active"
                        : "header__nav-li-link--inactive"
                    }
                  >
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div
              className="header__search"
              onMouseEnter={() => setSearchIcon(true)}
              onMouseLeave={() => setSearchIcon(false)}
            >
              <input
                type="text"
                className="header__search-input"
                placeholder="Search something?"
                onClick={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
              <div
                className={`header__search-button ${
                  searchFocus && "header__search-button--border"
                }`}
              >
                <img
                  src="/img/search-white.svg"
                  className={`header__search-icon ${
                    searchIcon
                      ? "header__search-icon--block-toggle-in"
                      : "header__search-icon--hidden-toggle-out"
                  } `}
                />
                <img
                  src="/img/search.svg"
                  className={`header__search-icon ${
                    searchIcon
                      ? "header__search-icon--hidden-toggle-out"
                      : "header__search-icon--block-toggle-in"
                  }`}
                />
              </div>
            </div>
            <div className="header__burger header__burger--hidden"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
