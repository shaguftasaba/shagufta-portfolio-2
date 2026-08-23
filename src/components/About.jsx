import { motion } from "framer-motion";

const story = [
  {
    number: "01",
    title: "The Dream",
    subtitle: "It started in Class 9.",
    text: "My journey with technology did not begin with AI. It began when I was in Class 9. I had a strong desire to learn how websites were made. I wanted to develop the skill of building websites myself and hoped that one day it would become a part of who I am. At that time, I did not know about Artificial Intelligence, and AI was not something people around me were talking about.",
    highlight: "I simply knew one thing: I wanted to learn how to build websites.",
  },
  {
    number: "02",
    title: "The Confusion",
    subtitle: "Finding the right path after 12th.",
    text: "After completing my 12th, I wanted to pursue a course like BCA because I believed it would bring me closer to technology. However, the course was not available at the women's college where I wanted to study. My father also wanted me to study in a girls' college, so I eventually took admission at Ranchi Women's College.",
    text2:
      "Choosing a course was another difficult chapter. I was genuinely confused about what I should choose. After thinking, taking advice, and discussing it with people around me, I eventually decided to pursue B.Com.",
  },
  {
    number: "03",
    title: "The Dream Stayed",
    subtitle: "I never stopped wanting to learn.",
    text: "Even after choosing B.Com, my dream of learning web development never disappeared. I thought I could learn website development from an institute alongside college, but that also did not happen because my father was not comfortable with me joining another institute while continuing college.",
    highlight:
      "The path was difficult, but the desire to learn was still there.",
  },
  {
    number: "04",
    title: "Discovering AI",
    subtitle: "A new door opened.",
    text: "After my 12th, I started hearing more and more about Artificial Intelligence. As I learned about it, I discovered how powerful it could be — how AI could simplify complicated tasks, make work more efficient, and help turn ideas into practical results.",
    text2:
      "I also became curious about how AI could be connected with the things I had wanted to learn for years, especially website development and digital creation.",
  },
  {
    number: "05",
    title: "The Turning Point",
    subtitle: "Learning from someone close to me.",
    text: "My maternal uncle, Md. Naseem Ansari, is a technical engineer with around 8 years of experience and has also worked as a professor at an engineering college in the Maldives. I had seen websites and blogs he created, as well as books he worked on with the help of AI.",
    text2:
      "Seeing his work inspired me. I realized that if I could not find the right way to learn outside, I could learn from him. After a lot of effort and convincing, my father finally agreed, and that became the beginning of my AI learning journey.",
  },
  {
    number: "06",
    title: "From Dream to Reality",
    subtitle: "The moment everything changed.",
    text: "It has now been around three months since I started learning under my uncle's guidance. One of the biggest experiences for me was learning how to create a single-page website in around two hours with his guidance and AI-assisted development.",
    highlight:
      "A dream I had carried since Class 9 had started becoming a reality.",
    text2:
      "What I especially appreciate is that my uncle teaches with patience, kindness, and Islamic values. He explains things deeply, gently, and in a way that makes even difficult concepts easier to understand.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white md:px-10 lg:px-14"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[15%] h-96 w-96 rounded-full bg-[#38BDF8]/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[55%] h-96 w-96 rounded-full bg-[#38BDF8]/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#38BDF8]" />

            <span className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
              About Me
            </span>
          </div>

          <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            A dream that started in
            <span className="text-[#38BDF8]"> Class 9.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            My journey is not just about technology or AI. It is about a
            dream, a difficult path, the right guidance, and the moment that
            dream finally started becoming a reality.
          </p>
        </motion.div>

        {/* Story */}
        <div className="mt-24 space-y-20">
          {story.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[180px_1fr]"
            >
              {/* Number */}
              <div>
                <span className="text-5xl font-semibold text-[#38BDF8]/30 md:text-6xl">
                  {item.number}
                </span>

                <div className="mt-3 h-px w-10 bg-[#38BDF8]" />
              </div>

              {/* Content */}
              <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-[0.2em] text-[#38BDF8]">
                  Chapter {index + 1}
                </p>

                <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-lg text-white/70">
                  {item.subtitle}
                </p>

                <p className="mt-7 text-base leading-8 text-gray-400 md:text-lg">
                  {item.text}
                </p>

                {item.highlight && (
                  <div className="mt-7 border-l-2 border-[#38BDF8] pl-5">
                    <p className="text-lg italic leading-8 text-white md:text-xl">
                      “{item.highlight}”
                    </p>
                  </div>
                )}

                {item.text2 && (
                  <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
                    {item.text2}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Where I Am Today */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-28 rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
            Where I Am Today
          </p>

          <h3 className="mt-5 text-3xl font-semibold md:text-5xl">
            Still learning. Still building.
          </h3>

          <p className="mt-7 max-w-4xl text-base leading-8 text-gray-400 md:text-lg">
            Today, I am continuing to work on different projects, exploring
            AI, developing websites, learning AI-based video creation,
            improving my creative skills, and writing blogs about the things
            I learn.
          </p>

          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-400 md:text-lg">
            I am learning that AI is not simply about asking a tool to do
            something. It is also about learning how to think, create better
            prompts, solve problems, and turn an idea into something useful.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-[#38BDF8]">01</p>
              <p className="mt-3 font-medium">AI & Technology</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-[#38BDF8]">02</p>
              <p className="mt-3 font-medium">Web & Digital Creation</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-[#38BDF8]">03</p>
              <p className="mt-3 font-medium">Creativity & Business</p>
            </div>
          </div>
        </motion.div>

        {/* My Vision */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#38BDF8]" />

            <span className="text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
              My Vision
            </span>
          </div>

          <h3 className="mt-8 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            I want to build
            <span className="text-[#38BDF8]"> something of my own.</span>
          </h3>

          <p className="mt-7 max-w-4xl text-base leading-8 text-gray-400 md:text-lg">
            My dream is to build my own business, develop my own identity,
            create meaningful digital products, and bring together the things
            I love:
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Technology",
              "AI",
              "Creativity",
              "Business",
              "Entrepreneurship",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/5 px-5 py-2.5 text-sm text-[#38BDF8]"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-base leading-8 text-gray-400 md:text-lg">
            I do not know exactly where this journey will take me yet. But I
            know that I want to keep learning, keep building, and keep moving
            forward.
          </p>
        </motion.div>

        {/* Dua / Closing */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/10 pt-12"
        >
          <p className="max-w-4xl text-lg leading-9 text-white/80 md:text-xl">
            The dream I had as a Class 9 student —{" "}
            <span className="text-[#38BDF8]">
              “I want to learn how to build websites”
            </span>{" "}
            — is no longer just a dream.
          </p>

          <p className="mt-5 text-2xl font-medium text-white md:text-3xl">
            Alhamdulillah, it has started becoming a reality.
          </p>

          <p className="mt-8 max-w-3xl text-base leading-8 text-gray-400">
            May Allah bless us with success in both this world and the
            Hereafter, guide us towards what is best for us, and put barakah
            in our knowledge, efforts, and future.
          </p>

          <p className="mt-5 text-lg font-medium text-[#38BDF8]">
            Ameen, summa Ameen. 🤍
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;