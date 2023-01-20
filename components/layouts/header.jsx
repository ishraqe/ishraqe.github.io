import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";

import NavMenu from "./NavMenu";
import styles from "./header.module.scss";

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

  function toggleMobileMenu() {
    setOpen(!isOpen);
  }

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
            <NavMenu toggleMobileMenu={() => {}} />
            <a
              href="https://drive.google.com/file/d/1Z34TlXQpZeQ-W_BK2D0KfTAsadCUnRTS/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-filled"
            >
              Resume
            </a>
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
        <NavMenu toggleMobileMenu={toggleMobileMenu} />
      </div>
    </header>
  );
};

export default Header;
