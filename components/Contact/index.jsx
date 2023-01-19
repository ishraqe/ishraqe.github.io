import SectionIntro from "components/utils/section-intro";
import styles from "./contact.module.scss";
import SocialIconBlock from "components/utils/social-icon/social-icon";
const index = () => {
  return (
    <section className="section-padding">
      <SectionIntro text={"Just say hi."} />
      <div className={styles["contact-container"]}>
        <div className={styles["contact-text"]}>
          <p>
            I am always open to discuss your project, improve your online
            presence or help with your design challenges.
          </p>
          <div className={styles["subtext-contact"]}>Email me at</div>
          <div className={styles["email-link-container"]}>
            <a>hi@kristina.marketing</a>
          </div>
          <div className={styles["social-icons-div"]}>
            <SocialIconBlock />
          </div>
        </div>
        <div className={styles["contact-form"]}>
          <div className={styles["contact-form-container"]}>
            <div className={styles["contact-form-main"]}>
              <form>
                <h5 className={styles["form-heading-tablet"]}>
                  Or use the form below
                </h5>
                <input type="text" placeholder="Your name*" />
                <input type="email" placeholder="Your email*" />
                <input type="text" placeholder="Your website (if exists)" />
                <textarea placeholder="How can i help?*"></textarea>
                <button>Get In Touch</button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles["social-icons-div"]}>
          <SocialIconBlock />
        </div>
      </div>
    </section>
  );
};

export default index;
