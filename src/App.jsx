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
import Footer from "./Footer";

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= HOME INTRO ================= */}
      <HomeIntro />

      {/* ================= CINEMATIC VIDEO SHOWCASE ================= */}
      <section className="relative bg-[#050505] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="group relative aspect-[21/9] overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_70px_rgba(56,189,248,0.08)]">

            {/* ================= VIDEO ================= */}
            <video
              src="/visual-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
            />

            {/* ================= DARK SIDE OVERLAY ================= */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

            {/* ================= BOTTOM SOFT FADE ================= */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* ================= TEXT CONTENT ================= */}
            <div className="relative z-10 flex h-full items-center">
              <div className="max-w-xl px-8 sm:px-12 lg:px-16">

                {/* SMALL LABEL */}
                <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#38BDF8]/30 bg-black/30 px-4 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />

                  <span className="text-xs uppercase tracking-[0.25em] text-[#38BDF8]">
                    AI • CREATIVITY • CINEMA
                  </span>
                </div>

                {/* HEADING */}
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Turning ideas
                  <br />
                  <span className="text-[#38BDF8]">
                    into visual stories.
                  </span>
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                  Exploring how AI can transform imagination into cinematic
                  visuals, creative experiences and meaningful digital stories.
                </p>

                {/* BUTTON */}
                <a
                  href="/projects"
                  className="mt-7 inline-flex items-center gap-3 rounded-lg border border-[#38BDF8]/50 bg-[#38BDF8]/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#38BDF8] hover:text-black"
                >
                  Explore My Work
                  <span>→</span>
                </a>

              </div>
            </div>

            {/* ================= CINEMATIC BORDER GLOW ================= */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#38BDF8]/10" />

          </div>
        </div>
      </section>
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

        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= MAIN PAGES ================= */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />

        {/* ================= BLOG ================= */}
        <Route path="/blog" element={<ZaynabBlog />} />

        <Route
          path="/blog/zaynab-bint-jahsh"
          element={<ZaynabBlog />}
        />

      </Routes>

      <Footer />
    </main>
  );
}

export default App;