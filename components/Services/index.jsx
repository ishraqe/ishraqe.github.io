import Image from "next/image";
import styles from "./services.module.scss";

const index = () => {
  return (
    <section className={`section-padding`}>
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

          <h4 className={styles["services__card--heading"]}>Product Design</h4>
          <p className={styles["services__card--p"]}>
            Need help with designing your mobile app or website? I can create
            beautiful designs based on your content, or redesign old websites to
            improve your conversions and achieve your business goals.
          </p>
          <a className={styles["services__card--link"]}>Contact</a>
        </div>
        <div className={styles["services__card--item"]}>
          <Image
            className={styles["services__card--img"]}
            src="/img/e-commerce.svg"
            width={55}
            height={55}
            alt="service img"
          />

          <h4 className={styles["services__card--heading"]}>
            eCommerce Design
          </h4>
          <p className={styles["services__card--p"]}>
            Are you a Shopify store owner? I can help you design fully custom
            landing pages, product and collection pages. Please visit my agency
            website.
          </p>
          <a className={styles["services__card--link"]}>Learn more</a>
        </div>
        <div className={styles["services__card--item"]}>
          <Image
            className={styles["services__card--img"]}
            src="/img/education.svg"
            width={55}
            height={55}
            alt="service img"
          />

          <h4 className={styles["services__card--heading"]}>Education</h4>
          <p className={styles["services__card--p"]}>
            I&apos;ve recently become a mentor at Dribbble UI Design Course.
            From now on you can learn design together with me and other mentors
            at Dribbble.
          </p>
          <a className={styles["services__card--link"]}>Get 30% Off</a>
        </div>
      </div>
    </section>
  );
};

export default index;
