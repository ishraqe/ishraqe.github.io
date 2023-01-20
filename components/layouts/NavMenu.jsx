import styles from "./header.module.scss";

const NavMenu = ({ toggleMobileMenu }) => {
  return (
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
  );
};

export default NavMenu;
