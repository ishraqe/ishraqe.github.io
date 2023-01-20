import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import Image from "next/image";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

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
              <Image
                src="/img/nav-menu.png"
                alt="nav-menu"
                height={40}
                width={40}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
