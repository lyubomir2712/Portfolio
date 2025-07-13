import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={"navbar"} position="sticky" sx={{ width: '100%', backgroundColor: 'transparent', paddingLeft: '0', marginTop: '0', border: "none", boxShadow: 'none'}}>

                <Toolbar sx={{padding: 0}}>


                       <a href="#"><span className="navbar-name hidden lg:block ml-[10rem] mr-[3rem]">
                           Lyubomir Georgiev</span></a>

                    <IconButton
                        aria-label="open navigation"
                        edge="start"
                        color="inherit"
                        onClick={handleOpenNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' }, mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        PaperProps={{ elevation: 0, sx: { bgcolor: '#0d1224', width: '100%', boxShadow: 'none' } }}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuItem
                            sx={{
                                bgcolor: 'transparent',
                                '&:hover': { bgcolor: 'transparent' }}}
                            onClick={handleCloseNavMenu}
                            component="a"
                            href="#"
                            disableRipple
                        >
                            <span className="navbar-name">Lyubomir&nbsp;Georgiev</span>
                        </MenuItem>
                        <MenuItem
                            className="nav-link"
                            disableRipple
                            sx={{ color: 'white', bgcolor: 'transparent', '&:hover': { bgcolor: 'transparent' } }}
                            onClick={handleCloseNavMenu}
                            component="a"
                            href="#introduction-section"
                        >
                            Intro
                        </MenuItem>
                        <MenuItem
                            className="nav-link"
                            disableRipple
                            sx={{ color: 'white', bgcolor: 'transparent', '&:hover': { bgcolor: 'transparent' } }}
                            onClick={handleCloseNavMenu}
                            component="a"
                            href="#projects-section"
                        >
                            Projects
                        </MenuItem>
                        <MenuItem
                            className="nav-link"
                            disableRipple
                            sx={{ color: 'white', bgcolor: 'transparent', '&:hover': { bgcolor: 'transparent' } }}
                            onClick={handleCloseNavMenu}
                            component="a"
                            href="#certification-section"
                        >
                            Certifications
                        </MenuItem>
                        <MenuItem
                            className="nav-link"
                            disableRipple
                            sx={{ color: 'white', bgcolor: 'transparent', '&:hover': { bgcolor: 'transparent' } }}
                            onClick={handleCloseNavMenu}
                            component="a"
                            href="#projects-section"
                        >
                            Projects
                        </MenuItem>
                        <MenuItem
                            className="nav-link"
                            disableRipple
                            sx={{ color: 'white', bgcolor: 'transparent', '&:hover': { bgcolor: 'transparent' } }}
                            onClick={handleCloseNavMenu}
                            component="a"
                            href="#experience-section"
                        >
                            Experience
                        </MenuItem>
                        <MenuItem
                            className="nav-link"
                            disableRipple
                            sx={{ color: 'white', bgcolor: 'transparent', '&:hover': { bgcolor: 'transparent' } }}
                            onClick={handleCloseNavMenu}
                            component="a"
                            href="#skills-section"
                        >
                            Skills
                        </MenuItem>
                        <MenuItem
                            className="nav-link"
                            disableRipple
                            sx={{ color: 'white', bgcolor: 'transparent', '&:hover': { bgcolor: 'transparent' } }}
                            onClick={handleCloseNavMenu}
                            component="a"
                            href="#contact-section"
                        >
                            Contact Me
                        </MenuItem>
                    </Menu>

                    <Typography variant="h6" component="div" sx={{flexGrow: 2}}></Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
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
                    </Box>
                </Toolbar>
            </AppBar>

        </Box>
    );
}