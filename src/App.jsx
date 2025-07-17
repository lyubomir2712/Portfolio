import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import IntroductionSection from "./Components/IntroductionSection/IntroductionSection.jsx";
import CertificationSection from "./Components/CertificationSection/CertificationSection.jsx";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection.jsx";
import ContactSection from "./Components/ContactSection/ContactSection.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import MarqueeTechStack from "./Components/MarqueeTechStackSection/MarqueeTechStack.jsx";
import EducationSection from "./Components/EducationSection/EducationSection.jsx";
import ExperienceSection from "./Components/ExperienceSection/ExperienceSection.jsx";
import AboutMeSection from "./Components/AboutMeSection/AboutMeSection.jsx";
import ScrollTopButton from "./Components/ScrollTopButton/ScrollTopButton.jsx";
import handPointer from './assets/Icons/hand-pointer.png';
import {useEffect} from "react";
import cursorImg from './assets/Icons/arrowhead-rounded-outline.png';


function App() {
    useEffect(() => {
        const pointerStyle = `url(${handPointer}) 4 4, pointer`; // 4 4 = cursor hotspot

        const applyCursor = (el) => {
            el.style.setProperty('cursor', pointerStyle, 'important');
        };

        const updateCursor = () => {
            const clickableElements = document.querySelectorAll('button, a, [role="button"]');
            clickableElements.forEach(applyCursor);
        };

        updateCursor(); // First time
        const observer = new MutationObserver(updateCursor);
        observer.observe(document.body, { childList: true, subtree: true });

        document.body.style.cursor = `url(${cursorImg}) 0 0, auto`;

        return () => {
            observer.disconnect();
            document.body.style.cursor = '';
        };
    }, []);
  return (
    <>
        <Navbar/>
        <IntroductionSection/>
        <AboutMeSection/>
        <CertificationSection/>
        <ProjectsSection/>
        <ExperienceSection/>
        <MarqueeTechStack/>
        <EducationSection/>
        <ContactSection/>
        <Footer/>
        <ScrollTopButton/>
    </>
  )
}

export default App
