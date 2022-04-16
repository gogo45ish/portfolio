import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import PageTwo from "./pages/PageTwo";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume";
import Header from "./components/Header/Header";
import { useRef } from "react";
import About from "./pages/About/About";
import Section from "./components/Section/Section";
import Contact from "./pages/Contact/Contact";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
function App() {

  const titleRef = useRef();

  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <ReactNotifications />
      <Header />
      <Home />
      <Section>
        <About />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Contact />
      </Section>

      {/* <About /> */}

      {/* <PageOne /> */}
      {/* <PageTwo titleRef={titleRef} /> */}
      {/* <button onClick={handleBackClick}>Back to the top</button> */}


    </>
  );
}

export default App;
