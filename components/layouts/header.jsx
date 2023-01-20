import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  function logit() {
    setScrollY(window.pageYOffset);
  }

  return (
    <header
      className={`${styles["header"]} ${scrollY > 0 ? styles["active"] : ""}`}
    >
      <div className="container" style={{ height: "100%" }}>
        <div className={styles["nav__container"]}>
          <div className={styles["logo-container"]}>
            <span className={styles["logo"]}>Anamul</span>
          </div>
          <div className={styles["nav-menu"]}>
            <ul className={styles["nav-list"]}>
              <li>
                <a href="#about-section">About</a>
              </li>
              <li>
                <a href="#services-section">Services</a>
              </li>
              <li>
                <a href="#portfolio-section">Portfolio</a>
              </li>
              <li>
                <a href="#contact-section">Contact</a>
              </li>
            </ul>
            <button className="btn btn-filled">Resume</button>
            <a className={styles["nav-menu-icon"]}>
              <Hamburger toggled={isOpen} toggle={toggleMobileMenu} />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${styles["nav-mobile-menu"]} ${
          isOpen ? styles["nav-mobile-menu-open"] : ""
        }`}
      >
        <Hamburger toggled={isOpen} toggle={toggleMobileMenu} />
        <ul className={styles["nav-list"]}>
          <li>
            <a onClick={toggleMobileMenu} href="#about-section">
              About
            </a>
          </li>
          <li>
            <a onClick={toggleMobileMenu} href="#services-section">
              Services
            </a>
          </li>
          <li>
            <a onClick={toggleMobileMenu} href="#portfolio-section">
              Portfolio
            </a>
          </li>
          <li>
            <a onClick={toggleMobileMenu} href="#contact-section">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
