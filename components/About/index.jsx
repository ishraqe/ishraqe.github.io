import styles from "./about.module.scss";
import SectionIntro from "components/utils/section-intro";

const index = () => {
  return (
    <section
      className={`container section-padding ${styles["section__about"]}`}
      id="about-section"
    >
      <div className={styles["section__about--intro"]}>
        <SectionIntro text="About" />
        <p className={styles["section__about--intro--desc"]}>
          Front-end developer with more than 4 years of experience ,
          successfully managed and launched three (NextJs web application) and
          one React Native App. Strength in NextJs and React - Redux ecosystem.
          <br></br>
          <br></br>I started my career with TGA Limited (Fromerly known as
          Freemig Inc.) as a junior front-end developer.
          <br></br>
          <br></br>
          In 2019 I moved from Banglades to Malaysia to persue my career in
          Speedhome Sdn. Bhd. where grew the most. When I joined there as a
          junior dev having knowledge of basic html , css , js and react -
          redux. Gradually I was introduced to lots of aspects to developments ,
          technically and managerial. I later learned NextJs, Redux-toolkit,
          Rtk-query, Tailwind, Material Ui. I learned various architecture
          related stuff, how to improve web application performance, and how to
          work in an agile and kanban way. How to manage a team and lots of soft
          skills.
          <br></br>
          <br></br>
          The projects that benefited from me will be{" "}
          <a
            className="external_link"
            href="https://speedhome.com"
            target="_blank"
            rel="noreferrer"
          >
            speedhome.com
          </a>{" "}
          and{" "}
          <a
            className="external_link"
            href="https://speedmanage.com"
            target="_blank"
            rel="noreferrer"
          >
            speedmanage.com
          </a>
          I This websites includes a few features like chat request, insurance
          amount calculation, live chat (built with socket.io), dashboard
          management, collecting rent (for landlords) etc. We used NextJs,
          Redux-toolkit , material ui to name a few technologies. For testing we
          used Jest and Cypress. We did lots of performance improvements
          throughout the project to serve the website as fast as possible (we
          achieved around 17% improvement on google pagespeed score).
        </p>
      </div>
      <div
        style={{ backgroundImage: `url("/img/about.JPG")` }}
        className={styles["section__about--img--container"]}
      ></div>
    </section>
  );
};

export default index;
