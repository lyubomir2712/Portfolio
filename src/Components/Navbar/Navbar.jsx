import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={"navbar"} position="fixed" sx={{left: '50%', transform: 'translateX(-50%)', width: '51%', backgroundColor: '#100d1ead', paddingLeft: '0'}}>
                <Toolbar sx={{padding: 0}}>
                    <div className="logo-name-container"><i className="bi bi-code-slash logo"></i>
                    <h3 className={"navbar-name"}>Lyubomir Georgiev</h3>
                    </div>
                    <Typography variant="h6" component="div" sx={{flexGrow: 2}}>
                    </Typography>
                    <a className="nav-link" href="#introduction-section"><Button className={"navbar-item"} color="white"
                                                                                 style={{
                                                                                     fontSize: "1.25rem",
                                                                                     textTransform: "none"
                                                                                 }}>Intro</Button></a>
                    <a className="nav-link" href="#projects-section"><Button className={"navbar-item"} color="white"
                                                                             style={{
                                                                                 fontSize: "1.25rem",
                                                                                 textTransform: "none"
                                                                             }}>Projects</Button></a>
                    <a className="nav-link" href="#contact-section"><Button className={"navbar-item"} color="white"
                                                                            style={{
                                                                                fontSize: "1.25rem",
                                                                                textTransform: "none"
                                                                            }}>Contact Me</Button></a>
                </Toolbar>
            </AppBar>

        </Box>
    );
}