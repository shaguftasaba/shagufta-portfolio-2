import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030303] px-6 pt-32 text-white md:px-10 lg:px-16"
    >
      {/* =====================================================
          BLACK FOLDED PAPER BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#030303]">

        {/* Folded paper - left */}
        <div
          className="absolute -left-[12%] top-[5%] h-[80%] w-[60%] opacity-80"
          style={{
            background:
              "linear-gradient(135deg, #181818 0%, #070707 38%, #151515 39%, #050505 58%, #121212 59%, #030303 100%)",
            clipPath:
              "polygon(0 15%, 68% 0, 100% 43%, 75% 100%, 0 85%)",
            boxShadow: "40px 40px 100px rgba(0,0,0,0.95)",
          }}
        />

        {/* Folded paper - right */}
        <div
          className="absolute right-[-10%] top-[-8%] h-[82%] w-[62%] opacity-75"
          style={{
            background:
              "linear-gradient(155deg, #161616 0%, #070707 35%, #191919 36%, #080808 53%, #111111 54%, #030303 100%)",
            clipPath:
              "polygon(25% 0, 100% 13%, 90% 88%, 35% 100%, 0 44%)",
            boxShadow: "-40px 40px 100px rgba(0,0,0,0.95)",
          }}
        />

        {/* Lower folded paper */}
        <div
          className="absolute bottom-[-30%] left-[3%] h-[70%] w-[94%] opacity-70"
          style={{
            background:
              "linear-gradient(165deg, #151515 0%, #060606 34%, #1a1a1a 35%, #050505 51%, #121212 52%, #020202 100%)",
            clipPath:
              "polygon(0 35%, 25% 0, 78% 12%, 100% 60%, 72% 100%, 15% 85%)",
            boxShadow: "0 -30px 100px rgba(0,0,0,0.95)",
          }}
        />

        {/* =================================================
            SKY BLUE LIGHT COMING FROM THE FOLDS
        ================================================== */}

        {/* Main diagonal fold */}
        <motion.div
          className="absolute left-[-8%] top-[34%] h-[3px] w-[75%] rotate-[-17deg] rounded-full bg-[#38BDF8]"
          style={{
            boxShadow:
              "0 0 5px #38BDF8, 0 0 15px #38BDF8, 0 0 35px rgba(56,189,248,0.65)",
          }}
          animate={{
            opacity: [0.3, 0.9, 0.3],
            scaleX: [0.96, 1, 0.96],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Second diagonal fold */}
        <motion.div
          className="absolute right-[-10%] top-[49%] h-[2px] w-[72%] rotate-[18deg] rounded-full bg-[#7DD3FC]"
          style={{
            boxShadow:
              "0 0 6px #7DD3FC, 0 0 18px #38BDF8, 0 0 40px rgba(56,189,248,0.5)",
          }}
          animate={{
            opacity: [0.2, 0.75, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Long vertical fold */}
        <motion.div
          className="absolute left-[49%] top-[-15%] h-[130%] w-[2px] rotate-[19deg] rounded-full bg-[#38BDF8]/70"
          style={{
            boxShadow:
              "0 0 5px #38BDF8, 0 0 20px rgba(56,189,248,0.7)",
          }}
          animate={{
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small lower fold */}
        <motion.div
          className="absolute bottom-[18%] left-[17%] h-[2px] w-[48%] rotate-[8deg] rounded-full bg-[#7DD3FC]/70"
          style={{
            boxShadow:
              "0 0 5px #7DD3FC, 0 0 18px rgba(56,189,248,0.65)",
          }}
          animate={{
            opacity: [0.15, 0.55, 0.15],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue light leaking through left fold */}
        <motion.div
          className="absolute left-[10%] top-[25%] h-[350px] w-[550px] rounded-full bg-[#38BDF8]/10 blur-[110px]"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue light leaking through right fold */}
        <motion.div
          className="absolute right-[5%] top-[40%] h-[300px] w-[500px] rounded-full bg-[#38BDF8]/10 blur-[120px]"
          animate={{
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Paper grain */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.6px, transparent 0.6px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* Dark vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_100%)] opacity-60" />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT SIDE */}
          <div>

            <motion.p
              className="mb-5 text-sm font-medium uppercase tracking-[0.45em] text-[#7DD3FC]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Assalamu Alaikum
            </motion.p>

            <motion.h1
              className="max-w-4xl text-6xl font-bold leading-[0.95] tracking-[-0.04em] md:text-8xl lg:text-[clamp(5rem,9vw,9rem)]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
            >
              Shagufta
              <br />
              <span className="text-[#38BDF8]">Saba</span>
            </motion.h1>

            <motion.h2
              className="mt-7 text-xl font-medium text-white md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Future Business Tech Builder
            </motion.h2>

            <motion.p
              className="mt-5 max-w-xl text-base leading-7 text-gray-400 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              I’m a commerce student exploring technology, creativity,
              business and digital experiences — building skills today for
              the opportunities of tomorrow.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="mt-9 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
            >
              <a
                href="#projects"
                className="group rounded-lg bg-[#38BDF8] px-6 py-3.5 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-[#7DD3FC] hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]"
              >
                View My Work
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/resume.pdf"
                className="rounded-lg border border-white/20 bg-white/[0.03] px-6 py-3.5 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#38BDF8]/70 hover:bg-[#38BDF8]/10"
              >
                Download CV
              </a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              className="mt-10 flex items-center gap-5 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <span className="text-gray-600">Connect</span>

              <a
                href="#"
                className="transition-colors hover:text-[#38BDF8]"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="transition-colors hover:text-[#38BDF8]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition-colors hover:text-[#38BDF8]"
              >
                Instagram
              </a>
            </motion.div>
          </div>

          {/* =================================================
              QUOTE CARD
          ================================================== */}

          <motion.div
            className="relative mx-auto w-full max-w-sm lg:ml-auto"
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="absolute -inset-5 rounded-3xl bg-[#38BDF8]/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/80 p-8 shadow-2xl backdrop-blur-md">

              {/* Folded corner */}
              <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-[#38BDF8]/20 via-[#111111] to-transparent" />

              {/* Blue line */}
              <div className="mb-10 h-1 w-16 rounded-full bg-[#38BDF8]" />

              <p className="text-3xl font-semibold leading-tight text-white">
                “Building today,
                <br />
                shaping a better
                <br />
                tomorrow.”
              </p>

              <p className="mt-8 text-sm text-gray-500">
                — Shagufta Saba
              </p>

              <div className="mt-10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-[#7DD3FC]">
                  Portfolio 2026
                </span>

                <span className="text-2xl text-[#38BDF8]">
                  ✦
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-500 md:flex"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span className="h-px w-10 bg-[#38BDF8]/40" />

        Scroll Down

        <span className="h-px w-10 bg-[#38BDF8]/40" />
      </motion.div>
    </section>
  );
};

export default Hero;