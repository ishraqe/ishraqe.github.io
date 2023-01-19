import Image from "next/image";
import styles from "./social-icon.module.scss";

const SocialIconBlock = () => {
  return (
    <div className={styles["social-icons-block"]}>
      <a className={styles["social-link"]}>
        <div className="contact-icon-svg">
          <Image
            src="/img/social/github.svg"
            height={38}
            width={38}
            alt="github"
          />
        </div>
      </a>
      <a className={styles["social-link"]}>
        <div className="contact-icon-svg">
          <Image
            src="/img/social/linkedin.svg"
            height={38}
            width={38}
            alt="linkedin"
          />
        </div>
      </a>
      <a className={styles["social-link"]}>
        <div className="contact-icon-svg">
          <Image
            src="/img/social/medium.svg"
            height={38}
            width={38}
            alt="medium"
          />
        </div>
      </a>
      <a className={styles["social-link"]}>
        <div className="contact-icon-svg">
          <Image
            src="/img/social/twitter.svg"
            height={38}
            width={38}
            alt="twitter"
          />
        </div>
      </a>
    </div>
  );
};

export default SocialIconBlock;
