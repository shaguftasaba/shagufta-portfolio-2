import { motion } from "framer-motion";

const journey = [
  {
    number: "01",
    period: "Class 9",
    title: "The First Spark",
    description:
      "My interest in websites started when I was in Class 9. I wanted to learn how websites were made and dreamed of developing this skill myself. At that time, I did not know about AI, and AI was not yet a major part of everyday conversations.",
  },
  {
    number: "02",
    period: "After Class 12",
    title: "A Different Beginning",
    description:
      "After completing Class 12, I wanted to pursue a course like BCA. However, the course was not available at the women's college where I wanted to study. After a lot of confusion, thought, and advice, I eventually chose B.Com and continued looking for a way to learn website development alongside my studies.",
  },
  {
    number: "03",
    period: "Discovering AI",
    title: "A New Possibility",
    description:
      "As AI became increasingly popular, I started learning more about it. I discovered how AI could simplify tasks, speed up work, and open new possibilities for learning and creativity. This made me realize that AI could become a powerful way for me to finally pursue the skills I had wanted to learn for years.",
  },
  {
    number: "04",
    period: "A New Mentor",
    title: "Learning From My Mama",
    description:
      "I had already seen the websites, blogs, and books created by my mama, Md. Naseem Ansari, who has technical engineering experience and has also worked as a professor at an engineering college in the Maldives. Seeing his work inspired me to learn from him. After a lot of effort, my family agreed, and I finally started learning AI under his guidance.",
  },
  {
    number: "05",
    period: "The First 3 Months",
    title: "From Learning to Creating",
    description:
      "Within my first three months of learning, I began working on real projects. With guidance, I learned how AI could help me create a website in a fraction of the time that traditional development might take. One of my early experiences was creating a single-page website in around two hours with guidance and AI assistance.",
  },
  {
    number: "06",
    period: "Today",
    title: "Still Learning. Still Building.",
    description:
      "Today, I am continuing to work on different projects, writing blogs, exploring AI, creating websites, and developing creative skills. Things that once seemed difficult have become much more approachable through learning, practice, and the right guidance.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-5 pb-28 pt-36 text-white md:px-10 lg:px-14"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[-10%] h-96 w-96 rounded-full bg-[#38BDF8]/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#38BDF8]" />

            <span className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
              My Journey
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-semibold leading-tight md:text-6xl">
            From a dream to
            <span className="text-[#38BDF8]"> creation.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            My journey into technology did not begin with AI. It began with a
            simple curiosity about websites — and slowly grew into a journey
            of learning, creating, and discovering new possibilities.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-10">
            {journey.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.08,
                }}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[10px] top-8 hidden h-[19px] w-[19px] rounded-full border-4 border-[#050505] bg-[#38BDF8] shadow-[0_0_18px_rgba(56,189,248,0.45)] md:block" />

                <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/[0.03] md:p-8">

                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-[0.25em] text-[#38BDF8]">
                        {item.period}
                      </span>

                      <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                        {item.title}
                      </h2>
                    </div>

                    <span className="text-5xl font-semibold text-[#38BDF8]/15">
                      {item.number}
                    </span>
                  </div>

                  <p className="mt-5 max-w-4xl text-sm leading-8 text-gray-400 md:text-base">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-0 bg-[#38BDF8] transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Today */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-24 rounded-3xl border border-[#38BDF8]/20 bg-[#38BDF8]/[0.035] p-8 md:p-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
            Where I Am Today
          </p>

          <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            The dream I had years ago is
            <span className="text-[#38BDF8]"> becoming real.</span>
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-400 md:text-lg">
            I am still at the beginning of my journey, but today I can create
            websites, work with AI, write blogs, explore creative projects,
            and continue learning skills that once felt far away from me.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/10 pt-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
            Looking Ahead
          </p>

          <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            My next chapter is about
            <span className="text-[#38BDF8]"> building my own era.</span>
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-400 md:text-lg">
            My dream is to build something of my own — to keep learning,
            create meaningful work, develop my skills, and eventually build my
            own business and my own identity in the digital world.
          </p>
        </motion.div>

        {/* Dua */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto h-px w-20 bg-[#38BDF8]" />

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            May Allah bless our efforts, guide us towards what is best, and
            grant success in both this world and the Hereafter.
          </p>

          <p className="mt-5 text-lg font-medium text-[#38BDF8]">
            Ameen, summa ameen.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;