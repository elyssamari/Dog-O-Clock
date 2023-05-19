/*
 * FILE: Footer.js
 *
 * AUTHOR(S): Elyssa Mari Tapawan
 * 
 * PURPOSE: This file contains the Footer with 
 * information regarding who it was developed by,
 * supported by, and sources.
 */

import '../css/Footer.css';
import * as React from 'react';
import { Typography, Stack, Link } from '@mui/material';
import "@fontsource/fredoka-one";
import "@fontsource/inter";

function Footer() {
  return (
    <div className="Footer">

    <Stack spacing={25} direction="row">

        <div>
        <Typography variant="h6" sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 10}}>Developed By: </Typography>
        <div className="justify-content-md-center" id="footer-line1"></div>
        <Typography sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 25, marginTop: 50}}>Elyssa M. Tapawan </Typography>
        <Typography sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 5}}>Email: </Typography>
        <Typography sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 50}}>elyssatapawan@gmail.com </Typography>
        </div>

        <div>
        <Typography variant="h6" sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 10}}>Supported By: </Typography>
        <div className="justify-content-md-center" id="footer-line2"></div>
        <Typography sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 25, marginTop: 50}}>RevAmp </Typography>
        <Typography sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 5}}>Website: </Typography>
        <Link className="link" sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 50}}>https://www.superset.com/ </Link>
        </div>

        <div>
        <Typography variant="h6" sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 10}}>Sources: </Typography>
        <div className="justify-content-md-center" id="footer-line3"></div>
        <Stack direction={'column'}>
        <Link className="link" sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 20, marginTop: 50}}>https://dog.ceo/api/breeds/image/random </Link>
        <Link className="link" sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 20}}>https://www.blobmaker.app/</Link>
        <Link className="link" sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginLeft: 50, marginBottom: 100}}>https://undraw.co/illustrations</Link>
        </Stack>
        </div>

    </Stack>
    <img alt="Dog O'Clock Logo" src="dog-oclock-logo-512.png" width="180px" height="180px" />
    <Typography className="copyright" variant="h6" sx={{ flexGrow: 1 }} style={{ fontFamily: "Inter", marginBottom: 10}}>Dog O’Clock © 2023</Typography>

    </div>
  );
}

export default Footer;