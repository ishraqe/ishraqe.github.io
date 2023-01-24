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
          Experienced Front-End Developer with more than 4 years in the
          industry. Proficient with React ecosystem and frameworks(NextJs,
          React-Native). Having a great passion for front- end development with
          a good problem-solving aptitude to enhance application performance. I
          follow the best practices , clean code, writing unit tests.
          <br></br>
          <br></br>Im confident with Javascript, ReactJs, NextJs, React-Native ,
          Typescript, Webpack, Vite, Tailwind CSS, Bootstrap, SPA, SSR and PWA.
          I also enjoy building API and have good skills in Node.Js, Express.Js
          , MySQL, MongoDB and other backend development tools.
          <br></br>
          <br></br>
          Most of the time, I&apos;ve worked for Startups so that I can work
          under pressure and know the importance of deadlines. I love to work in
          a friendly environment where I can learn and contribute to the
          company&apos;s growth. So far I&apos;m experienced with the following
          skills:
          <br></br>
          <br></br>
          <ul>
            <li>
              * Front-End Development with HTML5, CSS3, JavaScript, ReactJs,
              NextJs, TypeScript, VueJs, VueX.
            </li>
            <li>
              * Web Application / Restful API development with NodeJs , Express,
              Laravel.
            </li>
            <li>* Mobile Application with React-Native</li>
          </ul>
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
