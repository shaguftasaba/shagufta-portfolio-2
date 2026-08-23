import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Shagufta Saba Portfolio",
    category: "Personal Portfolio",
    description:
      "A personal portfolio website created to showcase my journey, skills, creative work, services, and projects in one professional digital space.",
    role: "Design & Development",
    link: "https://tinyurl.com/bdddey82",
  },
  {
    number: "02",
    title: "Spice & Garden Restaurant",
    category: "Restaurant Website",
    description:
      "A restaurant website concept designed to present the restaurant, its food experience, and important information through an attractive digital presence.",
    role: "Website Design & Development",
    link: "https://tinyurl.com/29whurw2",
  },
  {
    number: "03",
    title: "College Event Fest",
    category: "Event Website",
    description:
      "A college event and fest website concept created to present event information in an engaging and organized digital format.",
    role: "Website Design & Development",
    link: "https://tinyurl.com/ym6wt85k",
  },
  {
    number: "04",
    title: "Clinic Website",
    category: "Healthcare Website",
    description:
      "A clinic website concept focused on creating a clean and informative online presence for visitors looking for healthcare-related information.",
    role: "Website Design & Development",
    link: "https://tinyurl.com/3r5cdkwk",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
              Selected Work
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            Ideas I&apos;ve
            <span className="text-[#38BDF8]"> turned into projects.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            A collection of websites and digital projects I have created while
            learning, experimenting, and turning ideas into real experiences.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-20 space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.08,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/[0.03] md:p-8"
            >
              <div className="grid gap-8 md:grid-cols-[120px_1fr_auto] md:items-center">

                {/* Number */}
                <div>
                  <span className="text-6xl font-semibold text-[#38BDF8]/20">
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#38BDF8]">
                    {project.category}
                  </span>

                  <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                    {project.title}
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400 md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-300">
                      My Role
                    </span>

                    <span className="rounded-lg border border-[#38BDF8]/20 bg-[#38BDF8]/5 px-3 py-1.5 text-xs text-[#38BDF8]">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* View Project */}
                <div className="md:justify-self-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl border border-[#38BDF8]/60 px-5 py-3 text-sm text-white transition-all duration-300 hover:bg-[#38BDF8] hover:text-black hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]"
                  >
                    View Project
                    <span className="text-lg">↗</span>
                  </a>
                </div>
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#38BDF8] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-white/10 pt-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
            Still Creating
          </p>

          <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            These are only the
            <span className="text-[#38BDF8]"> beginning.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            I am continuously learning, experimenting, and working on new
            projects. More work will be added as my journey grows.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;