import SectionIntro from "@/components/common/section-intro";
import styles from "./experience.module.scss";
import { Portfolio } from "../../const";
import { ExperienceItem } from "./experience-item";
const index = () => {
  return (
    <section className="section-padding" id="portfolio-section">
      <SectionIntro text="Work Experience" />
      <div className={styles["section__projects--conatiner"]}>
        {Portfolio.map((portfolio, index) => {
          return <ExperienceItem portfolio={portfolio} key={index} />;
        })}
      </div>
    </section>
  );
};

export default index;
