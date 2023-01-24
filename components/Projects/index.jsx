import Image from "next/image";

import SectionIntro from "components/utils/section-intro";
import styles from "./projects.module.scss";
const index = () => {
  return (
    <section className="section-padding" id="portfolio-section">
      <SectionIntro text="Work Experience" />
      <div className={styles["section__projects--conatiner"]}>
        <div className={styles["section__projects--item"]}>
          <div className={styles["section__projects--item--desc"]}>
            <h4>Speedhome Sdn. Bhd - Malaysia</h4>
            <div className={styles["experience-container"]}>
              <div className={styles["timeline"]}></div>
              <div>
                <div className={styles["roles-container"]}>
                  <div className={styles["section__projects--item--tag"]}>
                    Lead Front-End Developer - Feb 2021 - Present
                  </div>
                  <p>
                    Helped design, code, and modify web pages that are focused
                    on and contained within the standards, guidelines, and
                    requirements, Worked with Product Owners, Stakeholders, and
                    other team members as appropriate.
                    <br />
                    <br />
                    Improved application performance in several areas at
                    different extents up to ~35%
                    <br />
                    <br />
                    Spearheaded and coached a team developing API integration
                    with other enterprises and maintaining high-traffic,
                    feature-rich web applications.
                    <br />
                    <br />
                    Tested, coded, reviewed, and delivered software with 100%
                    on-time record and according to service level objectives.
                    <br />
                    <br />
                    Overhauled Bitbucket CI/CD pipeline which increased code
                    delivery speed.
                    <br />
                    <br />
                    Implemented automated testing tools such as Jest and Cypress
                    to improve the accuracy of the project.
                  </p>
                </div>
                <br />
                <br />
                <div className={styles["roles-container"]}>
                  <div className={styles["section__projects--item--tag"]}>
                    Sr. Front-End Developer - May 2019 - January 2021
                  </div>
                  <p>
                    Converted and Re-written two projects with NextJs from Java
                    Thymeleaf.
                    <br />
                    <br />
                    Implemented functional tests, and debugging tools for web
                    applications.
                    <br />
                    <br />
                    Introduced centralized state management tools like Redux,
                    Redux toolkit, and Rtk query.
                    <br />
                    <br />
                    Helped develop the hybrid mobile application with
                    React-Native.
                  </p>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className={styles["section__projects--item--img--container"]}>
            <div className={styles["section__projects--item--img--wrapper"]}>
              <Image
                className={styles["section__projects--item--img"]}
                src="/img/sh-app.webp"
                alt="Portfolio images"
                fill
              />
            </div>
          </div>
        </div>
        <div className={styles["section__projects--item"]}>
          <div className={styles["section__projects--item--desc"]}>
            <h4>Tga Limited - Bangladesh</h4>
            <div className={styles["experience-container"]}>
              <div className={styles["timeline"]}></div>
              <div>
                <div className={styles["roles-container"]}>
                  <div className={styles["section__projects--item--tag"]}>
                    Lead Front-End Developer - Feb 2021 - Present
                  </div>
                  <p>
                    Developed web application with VueJs
                    <br />
                    <br />
                    Managed complex states with VueX
                    <br></br>
                    <br></br>
                    Worked with the UI/UX and backend team closely, converting
                    the design to mockup & web pages and integrating front-end &
                    backend with API
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["section__projects--item--img--container"]}>
            <div className={styles["section__projects--item--img--wrapper"]}>
              <Image
                className={`${styles["section__projects--item--img"]} ${styles["section__projects--item--img--2"]}`}
                src="/img/tga.webp"
                alt="Portfolio images"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
