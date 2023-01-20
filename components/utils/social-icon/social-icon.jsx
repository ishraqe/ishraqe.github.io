import Image from "next/image";
import styles from "./social-icon.module.scss";

const socialDB = [
  {
    name: "github",
    link: "https://github.com/ishraqe"
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/anamul-haque-ishraqe/"
  },
  {
    name: "medium",
    link: "https://medium.com/@ishraqemanjur"
  },
  {
    name: "twitter",
    link: "https://twitter.com/ishraqe_manjur"
  }
];

const SocialIconBlock = () => {
  return (
    <div className={styles["social-icons-block"]}>
      {socialDB.map(({ name, link }) => (
        <a key={name} href={link} className={styles["social-link"]}>
          <div className="contact-icon-svg">
            <Image
              src={`/img/social/${name}.svg`}
              height={38}
              width={38}
              alt={name}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIconBlock;
