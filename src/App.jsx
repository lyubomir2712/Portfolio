import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import IntroductionSection from "./Components/IntroductionSection/IntroductionSection.jsx";
import CertificationSection from "./Components/CertificationSection/CertificationSection.jsx";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection.jsx";
import ContactSection from "./Components/ContactSection/ContactSection.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
import MarqueeTechStack from "./Components/MarqueeTechStackSection/MarqueeTechStack.jsx";
import EducationSection from "./Components/EducationSection/EducationSection.jsx";
import ExperienceSection from "./Components/ExperienceSection/ExperienceSection.jsx";

function App() {

  return (
    <>
        <Navbar/>
        <IntroductionSection/>
        <CertificationSection/>
        <ProjectsSection/>
        <ExperienceSection/>
        <MarqueeTechStack/>
        <EducationSection/>
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default App
