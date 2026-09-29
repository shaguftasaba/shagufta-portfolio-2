import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeIntro from "./components/HomeIntro";
import About from "./components/About";

import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ZaynabBlog from "./components/ZaynabBlog";

function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main Sections */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />

        {/* Blog */}
        <Route path="/blog" element={<ZaynabBlog />} />
        <Route
          path="/blog/zaynab-bint-jahsh"
          element={<ZaynabBlog />}
        />
      </Routes>
    </main>
  );
}

export default App;