import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import Image from "next/image";
import NavMenu from "./NavMenu";
import styles from "./header.module.scss";
import Logo from "../logo/Logo";
import { CV_LINK } from "@/const";

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
          <Logo />
          <div className={styles["nav-menu"]}>
            <NavMenu toggleMobileMenu={() => {}} />
            <a
              href={CV_LINK}
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
