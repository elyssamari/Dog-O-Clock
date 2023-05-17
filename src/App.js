import './App.css';
import Navbar from './Components/js/Navbar';
import Home from './Components/js/Home';
import About from './Components/js/About';
import Instructions from './Components/js/Instructions';
import DogGallery from './Components/js/DogGallery';
import Feedback from './Components/js/Feedback';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Instructions />
        <DogGallery />
        <Feedback />

    </div>
  );
}

export default App;
