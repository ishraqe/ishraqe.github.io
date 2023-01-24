import styles from "./logo.module.scss";
const Logo = () => {
  return (
    <div className={styles["logo-container"]}>
      <span className={styles["logo-div"]}></span>
      <span className={styles["logo-text"]}>Anamul Haque</span>
    </div>
  );
};

export default Logo;
