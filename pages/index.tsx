import { useEffect, useState } from "react";
import Welcome from "../components/welcome";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Skills from "../components/skills";

export default function Home(): JSX.Element {
  const [isMounted, setisMounted] = useState<boolean>(false);
  
  useEffect(() => {
    setTimeout(() => {
      setisMounted(true);
    }, 4500);
  },[isMounted])
  

  if(isMounted) {
    return (
      <>
      <About />
      <Projects />
      <Skills />
      <Footer />
      </>
    );
  } 
  else
  return (
   <Welcome />
  );
}