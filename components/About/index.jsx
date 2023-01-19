import styles from "./about.module.scss";
import SectionIntro from "components/utils/section-intro";

const index = () => {
  return (
    <section
      className={`container section-padding ${styles["section__about"]}`}
    >
      <div className={styles["section__about--intro"]}>
        <SectionIntro text="About" />
        <p className={styles["section__about--intro--desc"]}>
          I wasn’t always a designer. In a previous chapter of my life I worked
          for large tech companies as a director of marketing - managing a
          marketing team of over 50 people.
          <br></br>
          <br></br>
          In 2019, I quit my job, became a freelance designer and co-founded
          Alioned Agency. I wanted to help small businesses find their voice and
          establish a professional but friendly online presence. I love that my
          work really makes a difference for entrepreneurs and family-owned
          businesses
          <br></br>
          <br></br>
          All my design work passes through the lens of my experience as a
          marketer. I call it marketing design. It’s about analyzing the
          effectiveness of a design using objective marketing data - not just
          opinion.
          <br></br>
          <br></br>
          eCommerce is a field where this is especially effective. I love that a
          thoughtful redesign can directly increase a stores revenue. Check out
          my article: Designing for Conversions.
          <br></br>
          <br></br>
          Heart Icon | Good Design I love good design, photography, wine,
          travel, sport, languages and books
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
