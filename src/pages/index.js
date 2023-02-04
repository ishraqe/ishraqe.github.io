import Layout from "../../components/layouts";
import Intro from "../../components/Intro";
import About from "../../components/About";
import Services from "../../components/Stacks";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <About />
      <Services />
      <Experience />
      <Contact />
    </Layout>
  );
}
