/*
 * FILE: DogGallery.js
 *
 * AUTHOR(S): Elyssa Mari Tapawan
 * 
 * PURPOSE: This file contains the Dog Gallery Section
 * showing a image list of set dogs.
 */

import '../css/DogGallery.css';
import * as React from 'react';
import { Typography, ImageList, ImageListItem } from '@mui/material';
import "@fontsource/fredoka-one";
import "@fontsource/inter";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

function DogGallery(props) {
  return (
    <div className="DogGallery" ref={props.gallery}>

      <Typography 
      className="dog-gallery-title" 
      variant="h3" 
      sx={{ flexGrow: 1 }} 
      style={{ fontFamily: "Fredoka One", margin: 60 }}> 
        Dog Gallery 
      </Typography>

      <ImageList
        sx={{ width: 1150, height: 2430, marginBottom: '9rem'}}
        variant="quilted"
        cols={4}
        rowHeight={400}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 400, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

    </div>
  );
}

export default DogGallery;

const itemData = [
  {
    img: "https://images.dog.ceo/breeds/puggle/IMG_174753.jpg",
    title: 'breed: puggle',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.dog.ceo/breeds/stbernard/n02109525_15376.jpg",
    title: 'breed: stbernard',
  },
  {
    img: "https://images.dog.ceo/breeds/labrador/n02099712_5941.jpg",
    title: 'breed: labrador',
  },
  {
    img: "https://images.dog.ceo/breeds/african/n02116738_3819.jpg",
    title: 'breed: african',
    cols: 2,
  },
  {
    img:  "https://images.dog.ceo/breeds/spitz-japanese/tofu.jpg",
    title: 'breed: spitz-japanese',
    cols: 2,
  },
  {
    img: "https://images.dog.ceo/breeds/terrier-border/n02093754_3428.jpg",
    title: 'breed: terrier-border',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.dog.ceo/breeds/hound-basset/n02088238_11113.jpg",
    title: 'breed: hound-basset',
  },
  {
    img: "https://images.dog.ceo/breeds/pitbull/pitbull_dog.jpg",
    title: 'breed: pitbull',
  },
  {
    img:   "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
    title: 'breed: finnish-lapphund',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.dog.ceo/breeds/brabancon/n02112706_1114.jpg",
    title: 'breed: brabancon',
  },
  {
    img: "https://images.dog.ceo/breeds/leonberg/n02111129_974.jpg",
    title: 'breed: leonberg',
  },
  {
    img: "https://images.dog.ceo/breeds/frise-bichon/5.jpg",
    title: 'breed: frise-bichon',
    cols: 2,
  },
];