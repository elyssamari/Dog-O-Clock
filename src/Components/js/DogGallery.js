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

function DogGallery(image, size, rows = 1, cols = 1) {
  return (
    <div className="DogGallery">
      <Typography className="dog-gallery-title" variant="h3" sx={{ flexGrow: 1 }} style={{ fontFamily: "Fredoka One", margin: 50 }}> Dog Gallery </Typography>

      <ImageList
        sx={{ width: 1150, height: 2430}}
        variant="quilted"
        cols={4}
        rowHeight={400}
      >
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
    title: 'puggle',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.dog.ceo/breeds/stbernard/n02109525_15376.jpg",
    title: 'stbernard',
  },
  {
    img: "https://images.dog.ceo/breeds/labrador/n02099712_5941.jpg",
    title: 'labrador',
  },
  {
    img: "https://images.dog.ceo/breeds/african/n02116738_3819.jpg",
    title: 'african',
    cols: 2,
  },
  {
    img:  "https://images.dog.ceo/breeds/spitz-japanese/tofu.jpg",
    title: 'spitz-japanese',
    cols: 2,
  },
  {
    img: "https://images.dog.ceo/breeds/terrier-border/n02093754_3428.jpg",
    title: 'terrier-border',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.dog.ceo/breeds/hound-basset/n02088238_11113.jpg",
    title: 'hound-basset',
  },
  {
    img: "https://images.dog.ceo/breeds/pitbull/pitbull_dog.jpg",
    title: 'pitbull',
  },
  {
    img:   "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
    title: 'finnish-lapphund',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.dog.ceo/breeds/brabancon/n02112706_1114.jpg",
    title: 'brabancon',
  },
  {
    img: "https://images.dog.ceo/breeds/leonberg/n02111129_974.jpg",
    title: 'leonberg',
  },
  {
    img: "https://images.dog.ceo/breeds/frise-bichon/5.jpg",
    title: 'frise-bichon',
    cols: 2,
  },
];