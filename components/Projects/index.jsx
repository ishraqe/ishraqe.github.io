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
            <h4>Speedhome Sdn. Bhd. - Malaysia</h4>
            <div className={styles["experience-container"]}>
              <div className={styles["timeline"]}></div>
              <div>
                <div className={styles["roles-container"]}>
                  <div className={styles["section__projects--item--tag"]}>
                    Lead Front-End Developer - Feb 2021 - Present
                  </div>
                  <p>
                    Sweatcoin is an app with 100M+ users that rewards you for
                    steps. I joined Sweatcoin in May 2021 and since then
                    continue creating amazing features together with the Growth
                    Team.
                    <br />
                    <br />
                    Each feature we work on goes through a lot of testing &
                    experiments, making my work at Sweatcoin really dynamic and
                    interesting.
                  </p>
                </div>
                <br />
                <br />
                <div className={styles["roles-container"]}>
                  <div className={styles["section__projects--item--tag"]}>
                    Lead Front-End Developer - Feb 2021 - Present
                  </div>
                  <p>
                    Sweatcoin is an app with 100M+ users that rewards you for
                    steps. I joined Sweatcoin in May 2021 and since then
                    continue creating amazing features together with the Growth
                    Team.
                    <br />
                    <br />
                    Each feature we work on goes through a lot of testing &
                    experiments, making my work at Sweatcoin really dynamic and
                    interesting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["section__projects--item--img--container"]}>
            <div className={styles["section__projects--item--img--wrapper"]}>
              <Image
                className={styles["section__projects--item--img"]}
                src="/img/portfolio-1.jpeg"
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
                    Sweatcoin is an app with 100M+ users that rewards you for
                    steps. I joined Sweatcoin in May 2021 and since then
                    continue creating amazing features together with the Growth
                    Team.
                    <br />
                    <br />
                    Each feature we work on goes through a lot of testing &
                    experiments, making my work at Sweatcoin really dynamic and
                    interesting.
                    <br></br>
                    <br></br>
                    Sweatcoin is an app with 100M+ users that rewards you for
                    steps. I joined Sweatcoin in May 2021 and since then
                    continue creating amazing features together with the Growth
                    Team.
                    <br />
                    <br />
                    Each feature we work on goes through a lot of testing &
                    experiments, making my work at Sweatcoin really dynamic and
                    interesting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["section__projects--item--img--container"]}>
            <div className={styles["section__projects--item--img--wrapper"]}>
              <Image
                className={styles["section__projects--item--img"]}
                src="/img/portfolio-2.jpeg"
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
