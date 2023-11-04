import styles from "./experience.module.scss";
import Image from "next/image";

export const ExperienceItem = ({ portfolio }) => {
  console.log({ portfolio });
  return (
    <div className={styles["section__projects--item"]}>
      <div className={styles["section__projects--item--desc"]}>
        <h4>
          {portfolio.companyTitle} - {portfolio.location}
        </h4>
        <div className={styles["experience-container"]}>
          <div
            className={styles["timeline"]}
            style={{
              width: portfolio.experiences.length > 1 && "1.3rem !important"
            }}
          ></div>
          <div>
            {portfolio.experiences.length > 0 &&
              portfolio.experiences.map((experience, exIndex) => {
                return (
                  <div
                    className={styles["roles-container"]}
                    key={exIndex}
                    style={{
                      marginBottom: "2rem"
                    }}
                  >
                    <div className={styles["section__projects--item--tag"]}>
                      {experience.jobTitle} - {experience.duration.start} -
                      {experience.duration.end}
                    </div>
                    {experience.responsibilites.map((res, resIndex) => (
                      <p
                        key={resIndex}
                        style={{
                          marginBottom: "1.5rem"
                        }}
                      >
                        {res}
                      </p>
                    ))}
                  </div>
                );
              })}

            {portfolio.projects.web.length > 0 && (
              <div className={styles["project--link"]}>
                <h5>Project links: </h5>
                <ul>
                  {portfolio.projects.web.map((project, prIndex) => {
                    return (
                      <li key={prIndex}>
                        <span className="tag">{project.projectTitle}: </span>
                        <a
                          className="link"
                          target="_blank"
                          href={project.projectLink}
                          rel="noreferrer"
                        >
                          {project.projectLink}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {portfolio.projects.apps.length > 0 && (
              <div className={styles["project--link"]}>
                <ul>
                  <li className={styles["app-link"]}>
                    <span>
                      {portfolio.projects.apps.map((app) => {
                        return (
                          <a
                            className="link"
                            target="_blank"
                            href="https://play.google.com/store/apps/details?id=com.speedrent&hl=en&gl=US"
                            rel="noreferrer"
                            key={app.type}
                          >
                            <Image
                              src={app.link}
                              height={40}
                              width={40}
                              alt={app.type}
                              className={styles["app-link-store"]}
                            ></Image>
                          </a>
                        );
                      })}
                    </span>
                  </li>
                </ul>
              </div>
            )}
            <br />
            <br />
          </div>
        </div>
      </div>
      <div
        className={`${styles["section__projects--item--img--container"]} ${
          styles[
            `section__projects--item--img--container--${
              portfolio.experiences.length > 1 ? "1" : ""
            }`
          ]
        }`}
      >
        <div className={styles["section__projects--item--img--wrapper"]}>
          <Image
            className={`${styles["section__projects--item--img"]} ${
              styles[
                `section__projects--item--img--${
                  portfolio.experiences.length == 1 ? "2" : ""
                }`
              ]
            }`}
            src={portfolio.companyImage.link}
            alt={portfolio.companyImage.alt}
            fill
          />
        </div>
      </div>
    </div>
  );
};
