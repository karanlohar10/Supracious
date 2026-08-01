import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Manufacturing from "@/pages/Manufacturing";
import Exports from "@/pages/Exports";
import QualityAssurance from "@/pages/QualityAssurance";
import Contact from "@/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/exports" element={<Exports />} />
            <Route path="/quality-assurance" element={<QualityAssurance />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
