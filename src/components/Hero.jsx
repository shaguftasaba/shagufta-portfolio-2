import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#38BDF8]/10 blur-[140px]" />

        <div className="absolute right-[-100px] top-[15%] h-[400px] w-[400px] rounded-full bg-[#38BDF8]/5 blur-[120px]" />
      </div>

      {/* ================= DOT MATRIX WAVE ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute right-[-10%] top-[5%] h-[700px] w-[700px]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(56,189,248,0.45) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              maskImage:
                "radial-gradient(ellipse at center, black 20%, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 20%, transparent 72%)",
            }}
          />
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >

            {/* ================= SALAM ================= */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              dir="rtl"
              className="mb-2 text-left text-base font-medium tracking-wide text-white/80 sm:text-lg"
            >
              اَلسَّلَامُ عَلَيْكُمْ
            </motion.p>

            {/* ================= SMALL LABEL ================= */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />

              <span className="text-xs uppercase tracking-[0.25em] text-[#38BDF8]">
                AI • CREATIVITY • FUTURE
              </span>
            </div>

            {/* ================= MAIN HEADING ================= */}
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Aspiring
              <br />

              <span className="text-white">
                Entrepreneur
              </span>

              <br />

              <span className="text-[#38BDF8]">
                & Tech Creator
              </span>
            </h1>

            {/* ================= DESCRIPTION ================= */}
            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              A commerce background girl building her own era with AI.
              Learning, creating and exploring how artificial intelligence
              can turn hours of work into minutes.
            </p>

            {/* ================= QURAN VERSE ================= */}
            <div className="mt-8 border-l-2 border-[#38BDF8]/50 pl-5">
              <p
                dir="rtl"
                className="text-xl leading-9 text-white/90 sm:text-2xl"
              >
                وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ
              </p>

              <p className="mt-1 text-sm text-white/40">
                “My success is only by Allah.”
              </p>

              <p className="mt-1 text-xs text-[#38BDF8]/70">
                Qur’an 11:88
              </p>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-lg bg-[#38BDF8] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#7dd3fc] hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]"
              >
                View My Work
              </Link>

              <a
                href="/Shagufta-Saba-CV.pdf"
                download
                className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/10"
              >
                Download CV
              </a>
            </div>

            {/* ================= SOCIAL LINKS ================= */}
            <div className="mt-8 flex items-center gap-5 text-sm text-white/40">
              <a
                href="https://github.com/shaguftasaba"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#38BDF8]"
              >
                GitHub
              </a>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <a
                href="#contact"
                className="transition-colors hover:text-[#38BDF8]"
              >
                Contact
              </a>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span>Ranchi, India</span>
            </div>
          </motion.div>

          {/* ================= RIGHT PHOTO ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center lg:translate-x-16 xl:translate-x-24"
          >

            {/* Outer Glow */}
            <div className="absolute h-[630px] w-[630px] rounded-full bg-[#38BDF8]/10 blur-3xl" />

            {/* Main Circle */}
            <div className="group relative h-[600px] w-[600px] max-w-[85vw] max-h-[85vw] overflow-hidden rounded-full border border-[#38BDF8]/50 bg-[#071016] shadow-[0_0_80px_rgba(56,189,248,0.18)]">

              {/* Image */}
              <img
                src="/shagufta-new.jpg"
                alt="Shagufta Saba"
                className="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Dark Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              {/* Inner Circle Ring */}
              <div className="pointer-events-none absolute inset-4 rounded-full border border-[#38BDF8]/20" />

              {/* Top Cyan Accent */}
              <div className="absolute left-1/2 top-7 h-1 w-20 -translate-x-1/2 rounded-full bg-[#38BDF8] shadow-[0_0_18px_#38BDF8]" />

              {/* Name Label */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="rounded-full border border-white/15 bg-black/50 px-5 py-2 text-xs font-medium tracking-[0.25em] text-white/80 backdrop-blur-md">
                  SHAGUFTA SABA
                </span>
              </div>
            </div>

            {/* Floating Cyan Dot */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[3%] top-[15%] h-4 w-4 rounded-full bg-[#38BDF8] shadow-[0_0_25px_#38BDF8]"
            />

            {/* Floating Small Circle */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[18%] left-[2%] h-3 w-3 rounded-full border border-[#38BDF8] shadow-[0_0_15px_#38BDF8]"
            />
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default Hero;