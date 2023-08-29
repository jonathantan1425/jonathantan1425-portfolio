import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="divide-y divide-solid divide-smoke-200">
      {/* <Hero /> */}
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
