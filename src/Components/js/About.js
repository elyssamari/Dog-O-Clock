import '../css/About.css';
import * as React from 'react';
import { Typography } from '@mui/material';
import "@fontsource/fredoka-one";
import "@fontsource/inter";

function About(props) {
  return (
    <div className="About" ref={props.about}>
      <Typography className="about-title" variant="h3" sx={{ flexGrow: 1 }} style={{ fontFamily: "Fredoka One", margin: 50}}>About</Typography>
      
      <div className="about-text">
        <Typography className="description" variant="h6" style={{fontFamily: "Inter"}}>
          Trying to find a dog that speaks to you? Use our random dog generator, Dog O’Clock! There are tons of ways you can use Dog O’Clock. 
        </Typography>
        <br></br><br></br>
        <Typography className="description" variant="h6" style={{fontFamily: "Inter"}}>
         With Dog O’Clock, you can discover more breeds out there. From big dogs to small dogs, our randomizer offers all type of different breeds. 
         Use the generator to find your next fluffy best friend or explore more on what types of animals are out there. If that doesn’t
         suit you, feel free to use Dog O’Clock for other things, such as reference art, playing a game, or simply practicing you knowledge.
        </Typography>
        <br></br>
        <Typography className="description" variant="h6" style={{fontFamily: "Inter"}}>
          If you don’t like the dog breed you get, just keep hitting the button until you do!
        </Typography>
      </div>
    </div>
  );
}

export default About;
