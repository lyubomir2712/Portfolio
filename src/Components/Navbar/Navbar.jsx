import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={"navbar"} position="sticky" sx={{ width: '100%', backgroundColor: 'transparent', paddingLeft: '0', marginTop: '0', border: "none", boxShadow: 'none'}}>
                <Toolbar sx={{padding: 0}}>
                    <div className="logo-name-container"><i className="bi bi-code-slash logo"></i>
                    <span className={"navbar-name"}>Lyubomir Georgiev</span>
                    </div>
                    <Typography variant="h6" component="div" sx={{flexGrow: 2}}>
                    </Typography>
                    <a className="nav-link" href="#introduction-section"><Button className={"navbar-item"} color="white"
                                                                                 style={{
                                                                                     fontSize: "1.1rem",
                                                                                     textTransform: "none"
                                                                                 }}>Intro</Button></a>
                    <a className="nav-link" href="#projects-section"><Button className={"navbar-item"} color="white"
                                                                             style={{
                                                                                 fontSize: "1.1rem",
                                                                                 textTransform: "none"
                                                                             }}>Projects</Button></a>
                    <a className="nav-link" href="#certification-section"><Button className={"navbar-item"} color="white"
                                                                             style={{
                                                                                 fontSize: "1.1rem",
                                                                                 textTransform: "none"
                                                                             }}>Certifications</Button></a>
                    <a className="nav-link" href="#projects-section"><Button className={"navbar-item"} color="white"
                                                                                  style={{
                                                                                      fontSize: "1.1rem",
                                                                                      textTransform: "none"
                                                                                  }}>Projects</Button></a>
                    <a className="nav-link" href="#experience-section"><Button className={"navbar-item"} color="white"
                                                                             style={{
                                                                                 fontSize: "1.1rem",
                                                                                 textTransform: "none"
                                                                             }}>Experience</Button></a>
                    <a className="nav-link" href="#skills-section"><Button className={"navbar-item"} color="white"
                                                                               style={{
                                                                                   fontSize: "1.1rem",
                                                                                   textTransform: "none"
                                                                               }}>Skills</Button></a>
                    <a className="nav-link" href="#contact-section"><Button className={"navbar-item"} color="white"
                                                                            style={{
                                                                                fontSize: "1.1rem",
                                                                                textTransform: "none"
                                                                            }}>Contact Me</Button></a>
                </Toolbar>
            </AppBar>

        </Box>
    );
}