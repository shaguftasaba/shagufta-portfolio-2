import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-28 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-[#38BDF8]/5 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-150px] bottom-10 h-[350px] w-[350px] rounded-full bg-[#38BDF8]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#38BDF8]">
            About Me
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            The person behind
            <br />
            <span className="text-white/40">the vision.</span>
          </h1>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-16 max-w-4xl border-l-2 border-[#38BDF8]/60 pl-6 sm:pl-8"
        >
          <p className="text-xl leading-9 text-white/75 sm:text-2xl lg:text-3xl lg:leading-[1.6]"
          >
            “Life is a grand classroom, and we are but its eager students;
            <span className="text-[#38BDF8]">
              {" "}
              age is nothing but a number on a page.
            </span>
            ”
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-14 max-w-3xl"
        >
          <p className="text-base leading-8 text-white/55 sm:text-lg">
            I’m{" "}
            <span className="font-medium text-white">
              Shagufta Saba
            </span>{" "}
            — an AI learner, creative thinker, and aspiring entrepreneur
            exploring how technology can turn ideas into possibilities.
          </p>
        </motion.div>

        {/* Three Focus Areas */}
        <div className="mt-24 grid gap-5 md:grid-cols-3">

          {/* Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group border-t border-white/10 pt-6 transition-all duration-300 hover:border-[#38BDF8]/50"
          >
            <span className="text-xs tracking-[0.2em] text-[#38BDF8]">
              01
            </span>

            <h3 className="mt-5 text-xl font-medium">
              Learning
            </h3>

            <p className="mt-3 text-sm text-white/40">
              Artificial Intelligence
            </p>
          </motion.div>

          {/* Creating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group border-t border-white/10 pt-6 transition-all duration-300 hover:border-[#38BDF8]/50"
          >
            <span className="text-xs tracking-[0.2em] text-[#38BDF8]">
              02
            </span>

            <h3 className="mt-5 text-xl font-medium">
              Creating
            </h3>

            <p className="mt-3 text-sm text-white/40">
              AI • Visuals • Creative Technology
            </p>
          </motion.div>

          {/* Building */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group border-t border-white/10 pt-6 transition-all duration-300 hover:border-[#38BDF8]/50"
          >
            <span className="text-xs tracking-[0.2em] text-[#38BDF8]">
              03
            </span>

            <h3 className="mt-5 text-xl font-medium">
              Building
            </h3>

            <p className="mt-3 text-sm text-white/40">
              A future of my own
            </p>
          </motion.div>

        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-24 border-t border-white/10 pt-8"
        >
          <p className="text-sm tracking-wide text-white/35 sm:text-base">
            Still learning.
            <span className="mx-3 text-[#38BDF8]/50">•</span>
            Still creating.
            <span className="mx-3 text-[#38BDF8]/50">•</span>
            Still dreaming bigger.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;