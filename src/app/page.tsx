import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="divide-y divide-solid divide-smoke-200">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
