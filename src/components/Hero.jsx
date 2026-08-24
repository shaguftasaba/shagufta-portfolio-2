import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      {/* Left subtle glow */}
      <div className="pointer-events-none absolute left-[-15%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#38BDF8]/[0.06] blur-[150px]" />

      {/* Bottom right glow */}
      <div className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[550px] w-[550px] rounded-full bg-[#38BDF8]/[0.07] blur-[160px]" />

      {/* Small center glow */}
      <div className="pointer-events-none absolute left-[40%] top-[35%] h-[250px] w-[250px] rounded-full bg-[#38BDF8]/[0.025] blur-[120px]" />

      {/* =====================================================
          DOT MATRIX WAVE — TOP RIGHT
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute right-[-8%] top-[8%] z-0 h-[280px] w-[650px] opacity-70 md:h-[330px]"
      >
        <svg
          viewBox="0 0 700 330"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          {/* Main wave */}
          <path
            d="M0 165 C120 80 200 80 320 150 S500 240 700 90"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="1 9"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Wave 2 */}
          <path
            d="M0 185 C120 100 210 100 330 165 S510 255 700 105"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="1 9"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* Wave 3 */}
          <path
            d="M0 205 C120 120 220 120 340 180 S520 275 700 125"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="1 9"
            strokeLinecap="round"
            opacity="0.35"
          />

          {/* Wave 4 */}
          <path
            d="M0 225 C120 140 230 140 350 195 S530 295 700 145"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="1 9"
            strokeLinecap="round"
            opacity="0.2"
          />
        </svg>
      </motion.div>

      {/* =====================================================
          DOT MATRIX WAVE — BOTTOM RIGHT
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-[-5%] right-[-10%] z-0 h-[300px] w-[720px] opacity-75 md:h-[360px]"
      >
        <svg
          viewBox="0 0 720 360"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          {/* Main bottom wave */}
          <path
            d="M0 270 C130 180 210 180 330 250 S530 350 720 170"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="1 9"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* Wave 2 */}
          <path
            d="M0 290 C130 200 220 200 340 265 S540 360 720 190"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="1 9"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Wave 3 */}
          <path
            d="M0 310 C130 220 230 220 350 280 S550 370 720 210"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="1 9"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* Wave 4 */}
          <path
            d="M0 330 C130 240 240 240 360 295 S560 380 720 230"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="1 9"
            strokeLinecap="round"
            opacity="0.18"
          />
        </svg>
      </motion.div>

      {/* =====================================================
          SMALL FLOATING DOT FIELD
      ====================================================== */}

      <div
        className="pointer-events-none absolute right-[8%] top-[45%] z-0 hidden h-[120px] w-[180px] opacity-30 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(56,189,248,0.7) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage:
            "linear-gradient(to left, black, transparent)",
          WebkitMaskImage:
            "linear-gradient(to left, black, transparent)",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 pb-12 pt-28 md:px-8 lg:px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="relative z-20">

            {/* Arabic Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-20 mb-5 text-left text-3xl text-[#38BDF8] md:text-4xl"
            >
              السَّلَامُ عَلَيْكُمْ
            </motion.p>

            {/* =================================================
                QURAN VERSE
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative z-20 text-left"
            >
              <h1
                dir="rtl"
                className="relative z-20 text-left text-4xl font-semibold leading-relaxed md:text-6xl lg:text-7xl"
              >
                وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ
              </h1>

              <p className="relative z-20 mt-4 text-left text-lg italic text-gray-300 md:text-2xl">
                “My success is only by Allah.”
              </p>

              <p className="relative z-20 mt-2 text-left text-sm text-gray-500">
                Qur'an 11:88
              </p>
            </motion.div>

            {/* =================================================
                MAIN INTRO
            ================================================== */}

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="relative z-20 mt-12 text-left text-3xl font-semibold leading-tight md:text-4xl"
            >
              Aspiring Entrepreneur{" "}
              <span className="text-[#38BDF8]">&</span> Tech Creator
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="relative z-20 mt-5 max-w-2xl text-left text-base leading-8 text-gray-300 md:text-lg"
            >
              I’m a commerce student exploring technology, creativity,
              business and digital experiences — building skills today for the
              opportunities of tomorrow.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="relative z-20 mt-9 flex flex-wrap gap-4"
            >
              {/* VIEW MY WORK */}
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#38BDF8] px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]"
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

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative z-20 mt-12 flex gap-8 text-sm text-gray-300"
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

          {/* =================================================
              RIGHT QUOTE CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative z-20 hidden lg:block"
          >
            <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-[#38BDF8]/70 bg-[#080d10]/95 p-10 shadow-[0_0_45px_rgba(56,189,248,0.15)]">

              {/* Card Glow */}
              <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-[#38BDF8]/10 blur-3xl" />

              {/* Top Line */}
              <div className="relative z-10 mb-16 h-1 w-24 rounded-full bg-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.7)]" />

              {/* Quote Symbol */}
              <div className="relative z-10 text-5xl text-[#38BDF8]">
                “
              </div>

              {/* Quote Text */}
              <h3 className="relative z-10 mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Building today,
                <br />
                shaping a better
                <br />
                tomorrow.
              </h3>

              {/* Divider */}
              <div className="relative z-10 mt-14 h-px w-16 bg-[#38BDF8]" />

              {/* Card Footer */}
              <div className="relative z-10 mt-8 flex items-center justify-between text-sm text-gray-500">
                <span>Portfolio 2026</span>

                <span className="text-2xl text-[#38BDF8]">
                  ✦
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            SCROLL DOWN
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-4 text-xs tracking-[0.4em] text-gray-400 md:flex"
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