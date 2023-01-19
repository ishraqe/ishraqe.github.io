import { useState, useEffect } from "react";
import styles from "./header.module.scss";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  console.log("scrollY", scrollY);

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
              <li>01. About</li>
              <li>02. Services</li>
              <li>03. Portfolio</li>
              <li>04. Contact</li>
            </ul>
            <button className="btn btn-filled">Resume</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
