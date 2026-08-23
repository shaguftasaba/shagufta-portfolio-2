import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-24 pt-36 text-white md:px-10 lg:px-14"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[15%] h-[450px] w-[450px] rounded-full bg-[#38BDF8]/10 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[450px] w-[450px] rounded-full bg-[#38BDF8]/[0.07] blur-[160px]" />

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute left-[-5%] top-[28%] h-px w-[35%] rotate-[-15deg] bg-[#38BDF8]/40" />

      <div className="pointer-events-none absolute right-[-5%] top-[45%] h-px w-[30%] rotate-[25deg] bg-[#38BDF8]/40" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#38BDF8]">
            My Blog
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Thoughts, Stories
            <span className="block text-[#38BDF8]">
              & Reflections.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            A collection of reflections, lessons, stories and ideas about
            faith, creativity, technology, learning and personal growth.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* BLOG 01 */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d10] p-7 transition-all duration-500 hover:border-[#38BDF8]/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.12)]"
          >
            {/* Number */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium tracking-[0.2em] text-[#38BDF8]">
                BLOG 01
              </span>

              <span className="text-2xl text-[#38BDF8]/70">
                ✦
              </span>
            </div>

            {/* Category */}
            <p className="mt-10 text-xs uppercase tracking-[0.25em] text-gray-500">
              Islamic History • Character • Work
            </p>

            {/* Title */}
            <h2 className="mt-4 text-2xl font-semibold leading-tight transition-colors duration-300 group-hover:text-[#38BDF8]">
              Zaynab bint Jahsh (RA):
              <span className="block">
                Worship Through Hard Work
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 leading-7 text-gray-400">
              A reflection on how work, worship, generosity and helping others
              can become part of a meaningful life devoted to Allah.
            </p>

            {/* Divider */}
            <div className="mt-8 h-px w-full bg-white/10" />

            {/* Read Article */}
            <Link
              to="/blog/zaynab-bint-jahsh"
              className="group/link mt-6 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors duration-300 hover:text-[#38BDF8]"
            >
              Read Article

              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </Link>
          </motion.article>

          {/* BLOG 02 - Coming Soon */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="rounded-2xl border border-white/10 bg-[#080d10]/60 p-7"
          >
            <span className="text-sm tracking-[0.2em] text-gray-600">
              BLOG 02
            </span>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                Coming Soon
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-gray-500">
                Another story is
                <span className="block">
                  being written...
                </span>
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                New reflections, ideas and lessons will be added here soon.
              </p>
            </div>
          </motion.article>

          {/* BLOG 03 - Coming Soon */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="rounded-2xl border border-white/10 bg-[#080d10]/60 p-7"
          >
            <span className="text-sm tracking-[0.2em] text-gray-600">
              BLOG 03
            </span>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                Coming Soon
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-gray-500">
                More thoughts,
                <span className="block">
                  coming soon...
                </span>
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                This space will grow with new experiences, learning and
                reflections.
              </p>
            </div>
          </motion.article>

        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 flex items-center gap-4 text-sm text-gray-500"
        >
          <span className="h-px w-12 bg-[#38BDF8]/50" />

          <span>
            Learning • Reflecting • Sharing
          </span>

          <span className="h-px w-12 bg-[#38BDF8]/50" />
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;