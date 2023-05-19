/*
 * FILE: Home.js
 *
 * AUTHOR(S): Elyssa Mari Tapawan
 * 
 * PURPOSE: This file contains the page for the
 * random dog generator, which functionalities
 * consists of looking at previous dog images and
 * generating random dog images.
 */

import '../css/Home.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import "@fontsource/fredoka-one";
import "@fontsource/inter";

Home.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  
function Home(props) {

    const [imgURL, setImgURL] = useState('');
    const [previousImg, setPreviousImg] = useState([]);
    const [breedName, setBreedName] = useState('');


    useEffect(() => {
        fetchDogImage();
    }, []);

    const fetchDogImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setImgURL(data.message);
            const breed = data.message.split('/')[4];
            setBreedName(breed);
            setPreviousImg(prev => [...prev, data.message]); 
        })
        .catch(error => console.error('Error fetching dog images: ', error));
    };

    const getDogImage = () => {
        fetchDogImage();
    };

    const fetchPreviousImg = () => {
        if (previousImg.length > 1) {
          const previousImage = previousImg[previousImg.length - 2];
          setPreviousImg(prevImages => prevImages.slice(0, -1));
          setImgURL(previousImage);
        }
      };

    return (
        <div className="Home">

            <Typography 
            className="home-title" 
            variant="h3" 
            sx={{ flexGrow: 1 }} 
            style={{ fontFamily: "Fredoka One", margin: 30}}>
                Random Dog Generator
            </Typography>

            <img className="dog-img" style={{height:"35em"}} src={imgURL} alt="{breedName}"/>

            <Typography 
            className="breed-name" 
            variant="h4" 
            sx={{ flexGrow: 1 }} 
            style={{ fontFamily: "Inter", fontWeight: 600, margin: 30, color: "#2f2e41"}}>
                {breedName}
            </Typography>

            <Stack spacing={4} direction="row">
            <Button variant="contained" onClick={fetchPreviousImg} style={{ fontFamily: "Inter", color: "#5B5B5B", backgroundColor: "#D9D9D9"}}>Previous</Button>
            <Button variant="contained" onClick={getDogImage} style={{ fontFamily: "Inter", backgroundColor: "#2f2e41"}}>Generate</Button>
            </Stack>

        </div>
    );
};

export default Home;
