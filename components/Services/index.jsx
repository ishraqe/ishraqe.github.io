import Image from "next/image";
import styles from "./services.module.scss";

const index = () => {
  return (
    <section className="section-padding" id="services-section">
      <h2 className="section-intro">What I&apos;m comfortable working with </h2>
      <div className={styles["services__card"]}>
        <div className={styles["services__card--item"]}>
          <Image
            className={styles["services__card--img"]}
            src="/img/web.png"
            width={55}
            height={55}
            alt="service img"
          />

          <h4 className={styles["services__card--heading"]}>Web Development</h4>
          <div className={styles["services__card--p"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sunt
            porro, numquam saepe eius eaque, laudantium, doloremque neque
            voluptatem obcaecati vero tempore omnis rem sit itaque aperiam
            nesciunt repellendus quasi.
          </div>
          <ul>
            <li>JavaScript</li>
            <li>React </li>
            <li>NextJs</li>
            <li>Redux</li>
            <li>Redux-toolkit</li>
          </ul>
        </div>
        <div className={styles["services__card--item"]}>
          <Image
            className={styles["services__card--img"]}
            src="/img/app.png"
            width={55}
            height={55}
            alt="service img"
          />

          <h4 className={styles["services__card--heading"]}>App Development</h4>
          <div className={styles["services__card--p"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur molestiae temporibus eaque maiores fuga beatae aliquid!
            A neque, nihil mollitia quis accusantium iste et perspiciatis eum,
            placeat, voluptatem totam. Nisi.
          </div>
          <ul>
            <li>React-Native</li>
            <li>Redux</li>
            <li>Redux-toolkit</li>
          </ul>
        </div>
        <div className={styles["services__card--item"]}>
          <Image
            className={styles["services__card--img"]}
            src="/img/server.png"
            width={55}
            height={55}
            alt="service img"
          />

          <h4 className={styles["services__card--heading"]}>Back-End</h4>
          <div className={styles["services__card--p"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
            beatae. Enim illum rerum quisquam sint dolorum neque, qui expedita
            reiciendis. Qui excepturi consequatur error quasi repellat et,
            corporis saepe veniam!
          </div>
          <ul>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Php</li>
            <li>Laravel</li>
          </ul>
        </div>
        <div className={styles["services__card--item"]}>
          <Image
            className={styles["services__card--img"]}
            src="/img/other.png"
            width={55}
            height={55}
            alt="service img"
          />

          <h4 className={styles["services__card--heading"]}>Other</h4>
          <div className={styles["services__card--p"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quis consequatur laudantium animi eius optio obcaecati, libero, nemo
            nisi necessitatibus architecto deserunt consectetur laboriosam totam
            facilis commodi atque minus dolor?
          </div>
          <ul>
            <li>Git</li>
            <li>Bitbucket CI/CD</li>
            <li>Jest/Cypress</li>
            <li>Webpack</li>
            <li>Sql/NoSql</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
