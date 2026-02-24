import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home }from "./home/page";
import { About } from "./about/page";
import {Contact} from "./contact/page";

function App() {

  return (
    <BrowserRouter>
    <Routes>   
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
