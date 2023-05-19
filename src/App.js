import './App.css';
import React, { useRef } from 'react';
import Navbar from './Components/js/Navbar';
import Home from './Components/js/Home';
import About from './Components/js/About';
import Instructions from './Components/js/Instructions';
import DogGallery from './Components/js/DogGallery';
import Feedback from './Components/js/Feedback';
import Footer from './Components/js/Footer';


function App() {

  const about = useRef(null);
  const instructions = useRef(null);
  const gallery = useRef(null);
  const feedback = useRef(null);

  return (
    <div className="App">
      <Navbar
        about={about}
        instructions={instructions}
        gallery={gallery}
        feedback={feedback}


      />
      <Home />
      <About
        about={about}
      />
      <Instructions
        instructions={instructions}
      />
      <DogGallery
        gallery={gallery}
      />
      <Feedback
        feedback={feedback}
      />
      <Footer/>

    </div>
  );
}

export default App;
