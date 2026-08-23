import { motion } from "framer-motion";

const HomeIntro = () => {
  return (
    <section
      id="home-intro"
      className="relative overflow-hidden bg-[#020406] px-5 py-24 text-white md:px-10 lg:px-14"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#38BDF8]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-[#38BDF8]" />

          <span className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
            A Little About Me
          </span>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Turning curiosity into
              <span className="text-[#38BDF8]"> creation.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              I’m Shagufta Saba, a commerce student with a growing passion
              for technology, artificial intelligence, creativity, and
              entrepreneurship.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              My interest in building websites started back in Class 9,
              long before I discovered AI. Today, I’m exploring how AI,
              technology, and creativity can come together to turn ideas
              into meaningful digital experiences.
            </p>

            {/* Button */}
            <motion.a
              href="#about"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#38BDF8]"
            >
              Discover My Story
              <span className="text-lg">→</span>
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE - QUICK STATS */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >

            {/* Card 1 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/5">
              <span className="text-3xl font-semibold text-[#38BDF8]">
                01
              </span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">
                Commerce
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Building a foundation in business and commerce.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/5">
              <span className="text-3xl font-semibold text-[#38BDF8]">
                02
              </span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">
                AI Learning
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Exploring AI tools, workflows, and practical applications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/5">
              <span className="text-3xl font-semibold text-[#38BDF8]">
                03
              </span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">
                Web Creation
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Turning ideas into modern digital experiences.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/5">
              <span className="text-3xl font-semibold text-[#38BDF8]">
                04
              </span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">
                Entrepreneurship
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Working towards building something of my own.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;