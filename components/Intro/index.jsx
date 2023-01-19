import Image from "next/image";
import styles from "./intro.module.scss";
import SocialIconBlock from "components/utils/social-icon/social-icon";

const Intro = () => {
  return (
    <section className="section-padding">
      <div className={styles["intro-container"]}>
        <div className={styles["info-container"]}>
          <h3>Hi, my name is Anamul.</h3>
          <h1>
            I&apos;m a front-end develoepr with a ReactJs background
            specializing in NextJs & Redux.
          </h1>
          <div className={styles["social_icon_container"]}>
            <SocialIconBlock />
          </div>
          <div className={styles["btn__container"]}>
            <button className="btn btn-outline">My Work</button>
            <button className="btn btn-filled">Let&apos;s Talk</button>
          </div>
        </div>
        <div className={styles["image-container"]}>
          <div className={styles["image-wrapper"]}>
            <Image src="/img/intro-1.jpeg" alt=" intro image" fill />
          </div>
        </div>
      </div>
      <div className={styles["scroll-more"]}>
        <Image src="/img/scroll.png" height={55} width={55} alt="scroll" />
      </div>
    </section>
  );
};

export default Intro;
