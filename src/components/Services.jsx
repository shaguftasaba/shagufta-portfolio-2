import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Modern, responsive, and engaging websites designed and developed to turn ideas into a strong and memorable digital presence.",
    tags: ["Web Design", "Development", "Responsive"],
  },
  {
    number: "02",
    title: "AI Video Generation",
    description:
      "Creative AI-generated videos crafted for different storytelling needs, from 2D and 3D animation to cinematic visual experiences.",
    tags: ["2D Animation", "3D Animation", "Cinematic"],
  },
  {
    number: "03",
    title: "AI Video Ads",
    description:
      "Attention-grabbing AI-powered video advertisements designed to present products, brands, and ideas through engaging visual storytelling.",
    tags: ["AI Ads", "Product Videos", "Promotion"],
  },
  {
    number: "04",
    title: "Graphic Design",
    description:
      "Creative visual designs that help ideas and brands communicate clearly, including carousels, logos, flyers, and more.",
    tags: ["Carousel Design", "Logo Design", "Flyer Design"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-5 pb-28 pt-36 text-white md:px-10 lg:px-14"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[5%] right-[-10%] h-96 w-96 rounded-full bg-[#38BDF8]/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================
            SERVICES INTRO
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#38BDF8]" />

            <span className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
              My Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-8 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            What I can
            <span className="text-[#38BDF8]"> create for you.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            I combine design, technology, and AI to create digital
            experiences, visual content, and creative solutions that bring
            ideas to life.
          </p>
        </motion.div>

        {/* =========================
            SERVICE CARDS
        ========================== */}
        <div className="mt-20 grid gap-5 md:grid-cols-2">
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
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/[0.04] md:p-8"
            >
              {/* Number + Arrow */}
              <div className="flex items-start justify-between">
                <span className="text-5xl font-semibold text-[#38BDF8]/25">
                  {service.number}
                </span>

                <span className="text-2xl text-[#38BDF8]/50 transition-all duration-300 group-hover:text-[#38BDF8]">
                  ↗
                </span>
              </div>

              {/* Service Title */}
              <h2 className="mt-8 text-2xl font-semibold md:text-3xl">
                {service.title}
              </h2>

              {/* Service Description */}
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                {service.description}
              </p>

              {/* Service Tags */}
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

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#38BDF8] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* =========================
            CTA SECTION
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-white/10 pt-12"
        >
          {/* CTA Label */}
          <p className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
            Let&apos;s Create Something
          </p>

          {/* CTA Heading */}
          <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Have an idea?
            <br />
            <span className="text-[#38BDF8]">
              Let&apos;s bring it to life.
            </span>
          </h2>

          {/* CTA Description */}
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            Whether you need a website, AI video, video ad, or creative
            graphic design, I&apos;d love to hear your idea and explore what
            we can create together.
          </p>

          {/* Gmail CTA Button */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shaguftasaba2424@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-lg border border-[#38BDF8]/70 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#38BDF8] hover:text-black hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
          >
            Start a Conversation
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;