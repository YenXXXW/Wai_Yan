import { useEffect, useRef, useState } from "react";
import { Navbar } from "./components/navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/hero";
import Projects from "./pages/projects";
import Skills from "./pages/Skills";

function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const [visiblePage, setVisiblePage] = useState<null | string>(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.35],
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisiblePage(entry.target.id); // Assuming each page has a unique ID
        }
      }, options);
    }, options);

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // ... (similar logic for other pages)

    return () => {
      observer.disconnect(); // Cleanup on unmount
    };
  }, [heroRef, aboutRef, contactRef, projectsRef, skillsRef]);

  return (
    <div className="scroll-smooth">
      <Navbar visiblePage={visiblePage} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
