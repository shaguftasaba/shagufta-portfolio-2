import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#38BDF8]/10 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#38BDF8]/[0.07] blur-[160px]" />

      {/* Decorative Blue Lines */}
      <div className="pointer-events-none absolute left-[-5%] top-[35%] h-[2px] w-[45%] rotate-[-15deg] bg-[#38BDF8]/70 shadow-[0_0_15px_rgba(56,189,248,0.6)]" />

      <div className="pointer-events-none absolute left-[42%] top-[8%] h-[2px] w-[28%] rotate-[52deg] bg-[#38BDF8]/70 shadow-[0_0_15px_rgba(56,189,248,0.6)]" />

      <div className="pointer-events-none absolute right-[-3%] top-[27%] h-[2px] w-[40%] rotate-[-35deg] bg-[#38BDF8]/60 shadow-[0_0_15px_rgba(56,189,248,0.6)]" />

      <div className="pointer-events-none absolute bottom-[15%] left-[30%] h-[2px] w-[40%] rotate-[-25deg] bg-[#38BDF8]/60 shadow-[0_0_15px_rgba(56,189,248,0.6)]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 pb-12 pt-28 md:px-8 lg:px-6">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT SIDE */}
          <div>

            {/* Arabic Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-left text-3xl text-[#38BDF8] md:text-4xl"
            >
              السَّلَامُ عَلَيْكُمْ
            </motion.p>

            {/* Quran Verse + Meaning */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-left"
            >
              {/* Quran Verse */}
              <h1
                dir="rtl"
                className="text-left text-4xl font-semibold leading-relaxed md:text-6xl lg:text-7xl"
              >
                وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ
              </h1>

              {/* English Meaning */}
              <p className="mt-4 text-left text-lg italic text-gray-300 md:text-2xl">
                “My success is only by Allah.”
              </p>

              {/* Reference */}
              <p className="mt-2 text-left text-sm text-gray-500">
                Qur'an 11:88
              </p>
            </motion.div>

            {/* Main Intro */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-12 text-left text-3xl font-semibold leading-tight md:text-4xl"
            >
              Aspiring Entrepreneur{" "}
              <span className="text-[#38BDF8]">&</span> Tech Creator
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-5 max-w-2xl text-left text-base leading-8 text-gray-300 md:text-lg"
            >
              I’m a commerce student exploring technology, creativity,
              business and digital experiences — building skills today for the
              opportunities of tomorrow.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-9 flex flex-wrap gap-4"
            >

              {/* VIEW MY WORK */}
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#38BDF8] px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
              >
                View My Work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              {/* DOWNLOAD CV */}
              <a
                href="/Shagufta-Saba-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-[#38BDF8]/60 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#38BDF8] hover:text-black"
              >
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex gap-8 text-sm text-gray-300"
            >
              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#38BDF8]"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#38BDF8]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#38BDF8]"
              >
                Instagram
              </a>
            </motion.div>
          </div>

          {/* RIGHT QUOTE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative mx-auto max-w-xl rounded-2xl border border-[#38BDF8]/70 bg-[#080d10]/90 p-10 shadow-[0_0_45px_rgba(56,189,248,0.15)]">

              {/* Top Line */}
              <div className="mb-16 h-1 w-24 rounded-full bg-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.7)]" />

              {/* Quote */}
              <div className="text-5xl text-[#38BDF8]">
                “
              </div>

              <h3 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Building today,
                <br />
                shaping a better
                <br />
                tomorrow.
              </h3>

              {/* Divider */}
              <div className="mt-14 h-px w-16 bg-[#38BDF8]" />

              {/* Card Footer */}
              <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
                <span>Portfolio 2026</span>

                <span className="text-2xl text-[#38BDF8]">
                  ✦
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-4 text-xs tracking-[0.4em] text-gray-400 md:flex"
        >
          <span className="h-px w-12 bg-[#38BDF8]" />

          SCROLL DOWN

          <span className="h-px w-12 bg-[#38BDF8]" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;