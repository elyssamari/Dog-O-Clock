/*
 * FILE: Instructions.js
 *
 * AUTHOR(S): Elyssa Mari Tapawan
 * 
 * PURPOSE: This file contains the Instructions Section with 
 * instructions on how to use the random dog generator and a button that goes it.
 */

import '../css/Instructions.css';
import * as React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import "@fontsource/fredoka-one";
import "@fontsource/inter";

function Instructions(props) {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

    return (
      <div className="Instructions" ref={props.instructions}>

      <Typography 
      className="instruction-title" 
      variant="h3" 
      sx={{ flexGrow: 1 }} 
      style={{ fontFamily: "Fredoka One", margin: 50}}>
        Instructions
      </Typography>

      <Stack className="blobs" spacing={0} direction="row">
        <div>
        <img alt="instruction-1" src="/blob1.png" style={{width:300, height:300}}/>
        <Typography className="desc" style={{ fontFamily: "Inter", marginTop: 20}}  sx={{ml:18, mr:18}}>
          Hit the generate button to randomize through various dogs. 
        </Typography>
        </div>

        <div>
        <img alt="instruction-2" src="/blob2.png" style={{width:300, height:300}}/>
        <Typography className="desc" style={{ fontFamily: "Inter", marginTop: 20}} sx={{ml:18, mr:18}}>
          Went to fast? Press the previous button to see the dog before. 
        </Typography>
        </div>

        <div>
        <img alt="instruction-3" src="/blob3.png" style={{width:300, height:300}}/>
        <Typography className="desc-1" style={{ fontFamily: "Inter", marginTop: 20}} sx={{ml:18, mr:18}}>
            Enjoy the photo you have generated and use it in your own way!
        </Typography>
        </div>
      </Stack>

      <Button variant="contained" style={{ fontFamily: "Inter", backgroundColor: "#2f2e41", margin: 30}} onClick={() => scrollToTop()}> Get Started </Button>

      </div>
    );
  }
  
  export default Instructions;