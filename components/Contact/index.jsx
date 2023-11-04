import { useState } from "react";

import SectionIntro from "components/common/section-intro";
import styles from "./contact.module.scss";
import SocialIconBlock from "components/common/social-icon/social-icon";

const Contact = () => {
  const [body, setBody] = useState("");

  const changeFormValue = (e) => {
    const val = e.target.value;

    setBody(val);
  };

  return (
    <section className="section-padding" id="contact-section">
      <SectionIntro text={"Just say hi."} />
      <div className={styles["contact-container"]}>
        <div className={styles["contact-text"]}>
          <p>
            I am always open to discuss your project, improve your project
            presence or help with your project challenges.
          </p>
          <div className={styles["subtext-contact"]}>Email me at</div>
          <div className={styles["email-link-container"]}>
            <a
              target="_blank"
              href="mailto:anamul.ish@gmail.com"
              rel="noreferrer"
            >
              anamul.ish@gmail.com
            </a>
          </div>
          <div
            className={`${styles["social-icons-div"]} ${styles["contact-text-icons"]}`}
          >
            <SocialIconBlock />
          </div>
        </div>
        <div className={styles["contact-form"]}>
          <div className={styles["contact-form-container"]}>
            <div className={styles["contact-form-main"]}>
              <form
                action={`mailto:anamul.ish@gmail.com?body=${body}`}
                target="_blank"
                onSubmit={() => {
                  setBody("");
                }}
              >
                <h5 className={styles["form-heading-tablet"]}>
                  Or use the form below
                </h5>

                <textarea
                  required
                  placeholder="How can i help?*"
                  name="body"
                  onChange={changeFormValue}
                ></textarea>
                <button type="submit">Get In Touch</button>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`${styles["social-icons-div"]} ${styles["contact-form-icons"]}`}
        >
          <span>Follow</span>
          <SocialIconBlock />
        </div>
      </div>
    </section>
  );
};

export default Contact;
