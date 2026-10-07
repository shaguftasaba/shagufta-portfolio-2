import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Blog", to: "/blog" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/shaguftasaba", short: "GH" },
  { name: "Email", href: "mailto:shaguftasaba2424@gmail.com", short: "EM" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-0 h-[260px] w-[260px] rounded-full bg-[#38BDF8]/8 blur-[120px]" />
        <div className="absolute right-[-5%] top-10 h-[260px] w-[260px] rounded-full bg-[#67E8F9]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-5 shadow-[0_0_40px_rgba(56,189,248,0.08)] backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#38BDF8]">
                Let&apos;s build something meaningful
              </p>
              <h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Ready to turn an idea into a digital experience?
              </h3>
            </div>

            <a
              href="mailto:shaguftasaba2424@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#38BDF8] hover:text-black hover:shadow-[0_0_28px_rgba(56,189,248,0.25)]"
            >
              Start a Conversation
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-block text-2xl font-semibold tracking-tight">
              SHAGUFTA <span className="text-[#38BDF8]">SABA</span>
            </Link>

            <p className="mt-4 text-sm font-medium text-white/60">
              Aspiring Entrepreneur &amp; Tech Creator
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              Building my own era with AI — learning, creating and exploring how
              technology can turn ideas into meaningful digital experiences.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-white/60 transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/10 hover:text-white"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[10px] font-semibold text-[#38BDF8]">
                    {link.short}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#38BDF8]">
              Let&apos;s Connect
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/45">
              Have an idea, project or simply want to learn more about AI? Let&apos;s start a conversation.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/60">
              <p>Ranchi, India</p>
              <a
                href="mailto:shaguftasaba2424@gmail.com"
                className="inline-block transition-colors duration-300 hover:text-[#38BDF8]"
              >
                shaguftasaba2424@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col gap-4 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shagufta Saba. All rights reserved.</p>
          <p>
            Built with <span className="text-[#38BDF8]">AI</span> &amp; creativity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;