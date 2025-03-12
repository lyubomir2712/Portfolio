import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import IntroductionSection from "./Components/IntroductionSection/IntroductionSection.jsx";
import CertificationSection from "./Components/CertificationSection/CertificationSection.jsx";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection.jsx";
import ContactSection from "./Components/ContactSection/ContactSection.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <IntroductionSection/>
        <CertificationSection/>
        <ProjectsSection/>
        <ContactSection/>
    </>
  )
}

export default App
