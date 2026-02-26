import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import BlogPage from "./blog/page";
import ContactPage from "./contact/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
