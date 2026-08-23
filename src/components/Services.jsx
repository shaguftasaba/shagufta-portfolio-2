import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Website Design",
    description:
      "Modern, responsive, and visually engaging websites designed to turn ideas into a strong digital presence.",
    tags: ["Web Design", "Responsive", "UI Design"],
  },
  {
    number: "02",
    title: "Logo Designing",
    description:
      "Custom logo concepts created to give your brand a distinctive, memorable, and professional visual identity.",
    tags: ["Brand Identity", "Logo", "Creative Design"],
  },
  {
    number: "03",
    title: "Card Designing",
    description:
      "Creative and personalized card designs for business, invitations, events, visiting cards, and special occasions.",
    tags: ["Business Cards", "Invitations", "Custom Design"],
  },
  {
    number: "04",
    title: "Customized Gifts",
    description:
      "Personalized gifting concepts designed to make special moments more meaningful, memorable, and unique.",
    tags: ["Personalized", "Gifting", "Creative"],
  },
  {
    number: "05",
    title: "AI Cinematic Video Creation",
    description:
      "AI-assisted cinematic videos created for brands, events, memories, promotions, and creative storytelling.",
    tags: ["AI Video", "Cinematic", "Storytelling"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-5 pb-28 pt-36 text-white md:px-10 lg:px-14"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[5%] right-[-10%] h-96 w-96 rounded-full bg-[#38BDF8]/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#38BDF8]" />

            <span className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
              My Services
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            What I can
            <span className="text-[#38BDF8]"> create for you.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            From digital experiences and brand visuals to personalized
            creations and AI-powered cinematic videos, I combine creativity,
            technology, and AI to turn ideas into something meaningful.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.08,
              }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/[0.04]"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-5xl font-semibold text-[#38BDF8]/25">
                  {service.number}
                </span>

                <span className="text-2xl text-[#38BDF8]/50 transition-all duration-300 group-hover:text-[#38BDF8]">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-8 text-2xl font-semibold">
                {service.title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {service.description}
              </p>

              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#38BDF8] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-white/10 pt-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
            Have an idea?
          </p>

          <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Let&apos;s turn your idea into
            <span className="text-[#38BDF8]"> something real.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            Whether you need a website, a creative design, a customized gift,
            or an AI cinematic video, I would love to hear about your idea.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-8 inline-flex items-center gap-3 rounded-lg border border-[#38BDF8]/70 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#38BDF8] hover:text-black hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
          >
            Let&apos;s Work Together
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;