import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
