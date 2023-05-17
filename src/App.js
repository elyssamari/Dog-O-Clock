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

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import NavBar from './Components/js/NavBar';
// import Home from './Pages/Home';
// import Hano from './Pages/Hano';
// import Mariet from './Pages/Mariet';
// import Yaron from './Pages/Yaron';
// import Process from './Pages/Process';

// function App() {
//   return (
//     <div className="App">
//     <BrowserRouter basename='/side-hustle-project'>
//     <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/mariet" element={<Mariet />} />
//         <Route path="/hano" element={<Hano />} />
//         <Route path="/yaron" element={<Yaron />} />
//         <Route path="/process" element={<Process />} />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;
