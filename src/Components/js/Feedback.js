import '../css/Feedback.css';
import * as React from 'react';
import { Card, CardContent, Typography, Button} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import "@fontsource/fredoka-one";
import "@fontsource/inter";

function Feedback(props) {
  return (
    <div className="Feedback" ref={props.feedback}>
      <Card sx={{ width: 1200, height: 830 }} style={{ margin: 100, backgroundColor: "#D0F4DE" }} >
        <CardContent >
          <Typography className="feedback-title" variant="h3" sx={{ flexGrow: 1 }} style={{ fontFamily: "Fredoka One", margin: 25 }}>Feedback</Typography>
          <Typography className="feedback-subtitle" variant="h5" style={{ fontFamily: "Inter", margin: 5 }}>We would like to hear your feedback!</Typography>

          <FormControl className="form-control" sx={{ width: '100ch' }}>
            <Typography variant="h6" style={{ fontFamily: "Inter" }} sx={{ margin: '0.5rem 0' }}>Name</Typography>
            <input type="text" placeholder="Name" />
            <Typography variant="h6" style={{ fontFamily: "Inter" }} sx={{ margin: '0.5rem 0' }}>Email</Typography>
            <input type="text" name="email" placeholder="Email" />
            <Typography variant="h6" style={{ fontFamily: "Inter" }} sx={{ margin: '0.5rem 0' }}>Subject</Typography>
            <input type="text" placeholder="Subject"
              sx={{ margin: '0.5rem' }} />
            <Typography variant="h6" style={{ fontFamily: "Inter" }} sx={{ margin: '0.5rem 0' }}>Message</Typography>
            <textarea className="message" type="text" placeholder="Message"></textarea>
          </FormControl>
        </CardContent>
        <Button type="submit" variant="contained" style={{ fontFamily: "Inter", backgroundColor: "#2f2e41", margin: 5 }}> Submit </Button>
      </Card>
    </div>
  );
}

export default Feedback;
