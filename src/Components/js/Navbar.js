import '../css/Navbar.css';
import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import "@fontsource/fredoka-one";

function Navbar(props) {

    const scrollToAbout = (eleRef) => {
        window.scrollTo({
            top: eleRef.current.offsetTop - 175,
            behavior: 'smooth',
        })
    }

    const scrollToInstuctions = (eleRef) => {
        window.scrollTo({
            top: eleRef.current.offsetTop - 175,
            behavior: 'smooth',
        })
    }

    const scrollToDogGallery = (eleRef) => {
        window.scrollTo({
            top: eleRef.current.offsetTop - 80,
            behavior: 'smooth',
        })
    }

    const scrollToFeedback= (eleRef) => {
        window.scrollTo({
            top: eleRef.current.offsetTop,
            behavior: 'smooth',
        })
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="navbar">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: "#9FD4F2" }}>
                    <Toolbar>

                        <IconButton size="large" edge="start" sx={{ mr: 2}} onClick={() => scrollToTop()}>
                            <img alt="Dog O'Clock Logo" src="dog-oclock-logo-512.png" width="60px" height="60px" />
                        </IconButton>
                        <Typography className="dog-oclock-logo" variant="h4" sx={{ flexGrow: 1 }} style={{ fontFamily: "Fredoka One"}} onClick={() => scrollToTop()}>
                            Dog O'Clock
                        </Typography>

                        <Button 
                        color="inherit" 
                        style={{ fontFamily: "Fredoka One" }} 
                        sx={{":hover": { textDecoration: "underline", }, ml: 3, mr: 3, fontSize: 16}}
                        onClick={() => scrollToAbout(props.about)}>
                            About
                        </Button>

                        <Button 
                        color="inherit" 
                        style={{ fontFamily: "Fredoka One" }} 
                        sx={{":hover": { textDecoration: "underline", }, ml: 3, mr: 3, fontSize: 16}}
                        onClick={() => scrollToInstuctions(props.instructions)}>
                            Instructions
                        </Button>

                        <Button 
                        color="inherit" 
                        style={{ fontFamily: "Fredoka One" }} 
                        sx={{":hover": { textDecoration: "underline", }, ml: 3, mr: 3, fontSize: 16}}
                        onClick={() => scrollToDogGallery(props.gallery)}>
                            Dog Gallery
                        </Button>

                        <Button 
                        color="inherit" 
                        style={{ fontFamily: "Fredoka One" }} 
                        sx={{":hover": { textDecoration: "underline", }, ml: 3, mr: 3, fontSize: 16}}
                        onClick={() => scrollToFeedback(props.feedback)}>
                            Feedback
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Navbar;