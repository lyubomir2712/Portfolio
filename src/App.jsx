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

function App() {

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
