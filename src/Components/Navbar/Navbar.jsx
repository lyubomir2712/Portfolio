import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import Logo from "./Logo.jsx";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={"navbar"} position="fixed" sx={{left: '50%', transform: 'translateX(-50%)', width: '60%', backgroundColor: 'black', paddingLeft: '0'}}>
                <Toolbar sx={{padding: 0}} >
                    <Logo/>
                    <h3 className={"navbar-name"}>Lyubomir Georgiev</h3>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                    </Typography>
                    <Button className={"navbar-item"} color="white" style={{fontSize: "1.5rem", textTransform: "none"}}>Intro</Button>
                    <Button className={"navbar-item"} color="white" style={{fontSize: "1.5rem", textTransform: "none"}}>Projects</Button>
                    <Button className={"navbar-item"} color="white" style={{fontSize: "1.5rem", textTransform: "none"}}>Contact Me</Button>
                </Toolbar>
                </AppBar>

        </Box>
    );
}