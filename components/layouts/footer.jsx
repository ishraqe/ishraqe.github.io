import Image from "next/image";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={`section-padding ${styles["footer"]}`}>
      <div className="container">
        <div className={styles["footer__container"]}>
          <div className={styles["footer__text"]}>
            <div className={styles["logo-footer-div"]}>
              <Image
                className={styles["logo"]}
                src="/img/logo.svg"
                alt="logo"
                height={45}
                width={45}
              />
              <p>
                Kristina Volcheck
                <br />
                Senior Product Designer
              </p>
            </div>
          </div>
          <div className={styles["footer__copyright"]}>
            <p class="footer-copywright-p">
              © {new Date().getFullYear()} Anamul Haque
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
