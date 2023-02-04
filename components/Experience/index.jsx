import Image from "next/image";

import SectionIntro from "components/utils/section-intro";
import styles from "./experience.module.scss";
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

                <div className={styles["project--link"]}>
                  <h5>Project links: </h5>
                  <ul>
                    <li>
                      <span className="tag">Speedhome: </span>
                      <a
                        className="link"
                        target="_blank"
                        href="https://speedhome.com/"
                        rel="noreferrer"
                      >
                        https://speedhome.com/
                      </a>
                    </li>
                    <li>
                      <span className="tag">Speedmanage: </span>
                      <a
                        className="link"
                        target="_blank"
                        href="https://speedmanage.com/"
                        rel="noreferrer"
                      >
                        https://speedmanage.com/
                      </a>
                    </li>
                    <li className={styles["app-link"]}>
                      <span className="tag">App Speedhome: </span>
                      <span>
                        <a
                          className="link"
                          target="_blank"
                          href="https://play.google.com/store/apps/details?id=com.speedrent&hl=en&gl=US"
                          rel="noreferrer"
                        >
                          <Image
                            src="/img/playstore.png"
                            height={40}
                            width={40}
                            alt="playstore"
                            className={styles["app-link-store"]}
                          ></Image>
                        </a>

                        <a
                          className="link"
                          target="_blank"
                          href="https://apps.apple.com/my/app/speedrent-property-rental/id998232868"
                          rel="noreferrer"
                        >
                          <Image
                            src="/img/appstore.png"
                            height={40}
                            width={40}
                            alt="appstore"
                            className={styles["app-link-store"]}
                          ></Image>
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div
            className={`${styles["section__projects--item--img--container"]} ${styles["section__projects--item--img--container--1"]}`}
          >
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
              <div
                className={styles["timeline"]}
                style={{
                  width: "1.3rem !important"
                }}
              ></div>
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
