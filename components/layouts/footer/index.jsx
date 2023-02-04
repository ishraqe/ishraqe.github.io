import styles from "./footer.module.scss";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className={`section-padding ${styles["footer"]}`}>
      <div className="container">
        <div className={styles["footer__container"]}>
          <div className={styles["footer__text"]}>
            <div className={styles["logo-footer-div"]}>
              <Logo />
            </div>
          </div>
          <div className={styles["footer__copyright"]}>
            <p className="footer-copywright-p">
              © {new Date().getFullYear()} Anamul Haque
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
