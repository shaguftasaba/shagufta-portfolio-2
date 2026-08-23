import { motion } from "framer-motion";

const skills = [
  {
    number: "01",
    title: "AI & Prompt Engineering",
    description:
      "Learning how to use AI effectively through well-structured prompts to turn ideas into useful and practical results.",
    tags: ["AI Tools", "Prompting", "AI Workflows"],
  },
  {
    number: "02",
    title: "AI-Assisted Web Development",
    description:
      "Using AI as a learning and development partner to create websites, understand code, solve problems, and bring website ideas to life.",
    tags: ["AI Development", "Websites", "AI-Assisted Work"],
  },
  {
    number: "03",
    title: "Website Design",
    description:
      "Creating modern and creative website designs and turning ideas into functional digital experiences with the help of AI.",
    tags: ["Website Design", "Creative Design", "Web Projects"],
  },
  {
    number: "04",
    title: "AI Cinematic Video Creation",
    description:
      "Creating cinematic and creative video concepts with the help of artificial intelligence for different storytelling and promotional purposes.",
    tags: ["AI Video", "Cinematic", "Creative Video"],
  },
  {
    number: "05",
    title: "Logo & Card Designing",
    description:
      "Creating creative visual designs such as logos, visiting cards, business cards, invitation cards, and other personalized designs.",
    tags: ["Logo Design", "Card Design", "Creative Design"],
  },
  {
    number: "06",
    title: "Blogging & Content Creation",
    description:
      "Writing blogs and creating content while sharing what I learn about AI, technology, creativity, and my journey.",
    tags: ["Blogging", "Writing", "Content"],
  },
  {
    number: "07",
    title: "Customized Gift Designing",
    description:
      "Creating personalized and customized gifting concepts designed to make special occasions more memorable and meaningful.",
    tags: ["Customized Gifts", "Personalization", "Creative Ideas"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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
              Skills & Expertise
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            What I am
            <span className="text-[#38BDF8]"> learning & creating.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            My skills are growing through continuous learning, experimentation,
            and real projects. I use AI as a powerful tool to learn faster,
            create better, and turn ideas into reality.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.number}
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
                  {skill.number}
                </span>

                <span className="text-2xl text-[#38BDF8]/50 transition-all duration-300 group-hover:text-[#38BDF8]">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-8 text-2xl font-semibold">
                {skill.title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
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

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-white/10 pt-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
            My Approach
          </p>

          <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Learn it. Build it.{" "}
            <span className="text-[#38BDF8]">Keep growing.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            My journey is still continuing. I believe that every project,
            every experiment, and every new skill brings me one step closer
            to the vision I have for myself.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <span className="text-3xl text-[#38BDF8]">01</span>
              <h3 className="mt-5 font-semibold">Explore</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Discover new tools, ideas, and possibilities.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <span className="text-3xl text-[#38BDF8]">02</span>
              <h3 className="mt-5 font-semibold">Create</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Turn what I learn into real projects and creations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <span className="text-3xl text-[#38BDF8]">03</span>
              <h3 className="mt-5 font-semibold">Grow</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Keep learning, improving, and moving towards my goals.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;