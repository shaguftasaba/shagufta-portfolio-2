import { motion } from "framer-motion";

const ZaynabBlog = () => {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-20 pt-32 text-white md:px-10 lg:px-14">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
            Blog 01
          </p>

          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Zaynab bint Jahsh (RA):
            <span className="block text-[#38BDF8]">
              Worship Through Hard Work
            </span>
          </h1>

          <p className="mt-6 text-lg italic text-gray-400">
            A Woman Who Worked to Give
          </p>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-14 space-y-12 text-base leading-8 text-gray-300 md:text-lg"
        >

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
              A Woman Who Worked to Give
            </h2>

            <p>
              Zaynab bint Jahsh (RA) was a cousin of Prophet Muhammad ﷺ and was
              known for her generosity and dedication to helping others. She
              believed in working with her own hands to earn money and then
              using what she earned to help the poor. Her life beautifully
              combined practical work with charity.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
              Earning to Give
            </h2>

            <p>
              Zaynab (RA) had skills in manual work, including tanning leather
              and needlework. Rather than keeping the money she earned for
              herself, she spent it on charity.
            </p>

            <p className="mt-5">
              The Prophet ﷺ praised her generosity by describing her as having{" "}
              <strong className="text-[#38BDF8]">
                “long hands,”
              </strong>{" "}
              referring to the extent of her generosity.
            </p>

            <p className="mt-5">
              Her example shows that work can become a means of helping others
              when we use what we earn responsibly.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
              A Heart Free of Grudges
            </h2>

            <p>
              Zaynab (RA) was also known for her honesty and pure heart. She
              was willing to speak positively about others and stand by what
              was right.
            </p>

            <p className="mt-5">
              When she made a mistake, she was quick to repent and ask for
              forgiveness. This shows the importance of being honest with
              ourselves and not allowing pride to prevent us from correcting
              our mistakes.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
              Dedication to Prayer and Guidance
            </h2>

            <p>
              Zaynab (RA) devoted time to worship and had a small place of
              prayer in her home.
            </p>

            <p className="mt-5">
              She also believed strongly in seeking guidance from Allah
              through{" "}
              <strong className="text-[#38BDF8]">
                Istikharah
              </strong>{" "}
              when making important decisions. This included the decision
              concerning her marriage to the Prophet ﷺ.
            </p>

            <p className="mt-5">
              Her example shows how worship and everyday decisions can be
              connected.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
              What Can We Learn From Zaynab (RA)?
            </h2>

            <p>
              There are several lessons we can take from her life.
            </p>

            <div className="mt-6 space-y-5">
              <p>
                <strong className="text-white">
                  First, working to help others can be a form of worship.
                </strong>{" "}
                Zaynab (RA) used her own skills to earn money and then gave
                what she earned to those in need.
              </p>

              <p>
                <strong className="text-white">
                  Second, we should seek Allah's guidance when making important
                  decisions.
                </strong>{" "}
                Her example reminds us to turn to Allah rather than relying
                only on ourselves.
              </p>

              <p>
                <strong className="text-white">
                  Third, we should keep our hearts free from grudges.
                </strong>{" "}
                Honesty, forgiveness, and being willing to admit our mistakes
                can help us develop better character.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
              A Unique Place in Islamic History
            </h2>

            <p>
              The source describes Zaynab's (RA) marriage to the Prophet ﷺ as a
              significant event connected with{" "}
              <strong className="text-[#38BDF8]">
                Surah Al-Ahzab (33:37)
              </strong>
              . It also mentions the revelation of{" "}
              <strong className="text-[#38BDF8]">
                33:53
              </strong>{" "}
              on the occasion of her wedding.
            </p>

            <p className="mt-5">
              These verses are presented in the source as part of the important
              events surrounding her life.
            </p>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
              Conclusion
            </h2>

            <p>
              Zaynab bint Jahsh (RA) shows us that a life devoted to Allah can
              include both{" "}
              <strong className="text-[#38BDF8]">
                worship and practical service to others
              </strong>
              .
            </p>

            <p className="mt-5">
              She worked with her own hands, gave generously to people in need,
              sought Allah's guidance, and tried to keep her heart free from
              resentment.
            </p>

            <p className="mt-5">
              Her story reminds us that true generosity is not only about what
              we possess. It is also about how willing we are to use our time,
              skills, and blessings to benefit others.
            </p>
          </div>

          {/* Source */}
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-lg font-semibold text-white">
              📚 Source
            </h3>

            <p className="mt-3 text-gray-400">
              <em>
                Great Women of Islam Who Were Given the Good News of Paradise
              </em>{" "}
              — Mahmood Ahmad Ghadanfar, <strong>pp. 93–103.</strong>
            </p>
          </div>

        </motion.article>

      </div>
    </section>
  );
};

export default ZaynabBlog;