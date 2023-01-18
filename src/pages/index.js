import Layout from "../../components/layouts";
import Intro from "../../components/Intro";
import About from "../../components/About";
import Services from "../../components/Services";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <About />
      <Services />
      <Projects />
    </Layout>
  );
}
