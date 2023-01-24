import Image from "next/image";
import styles from "./services.module.scss";

const index = () => {
  return (
    <section className="section-padding" id="services-section">
      <h2 className="section-intro">What I do</h2>
      <div className={styles["services__card"]}>
        <div className={styles["services__card--item"]}>
          <Image
            className={styles["services__card--img"]}
            src="/img/product.svg"
            width={55}
            height={55}
            alt="service img"
          />

          <h4 className={styles["services__card--heading"]}>Web Development</h4>
          <div className={styles["services__card--p"]}>
            <ul>
              <li>JavaScript</li>
              <li>React </li>
              <li>NextJs</li>
              <li>Redux</li>
              <li>Redux-toolkit</li>
            </ul>
          </div>
        </div>
        <div className={styles["services__card--item"]}>
          <Image
            className={styles["services__card--img"]}
            src="/img/e-commerce.svg"
            width={55}
            height={55}
            alt="service img"
          />

          <h4 className={styles["services__card--heading"]}>App Development</h4>
          <div className={styles["services__card--p"]}>
            <ul>
              <li>React-Native</li>
              <li>Redux</li>
              <li>Redux-toolkit</li>
            </ul>
          </div>
        </div>
        <div className={styles["services__card--item"]}>
          <Image
            className={styles["services__card--img"]}
            src="/img/education.svg"
            width={55}
            height={55}
            alt="service img"
          />

          <h4 className={styles["services__card--heading"]}>Back-End</h4>
          <div className={styles["services__card--p"]}>
            <ul>
              <li>NodeJs</li>
              <li>Express</li>
              <li>Php</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
