import { motion } from "framer-motion";

const Navbar = () => {
const navItems = [
  "Home",
  "About",
  "Skills",
  "Services",
  "Projects",
  "Experience",
  "Testimonials",
  "Blog",

];

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full px-6 py-5 md:px-10 lg:px-14"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 2 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          <span className="text-[#38BDF8]">S</span>hagufta{" "}
          <span className="text-[#38BDF8]">S</span>aba
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-sm transition-colors duration-300 hover:text-[#38BDF8] ${
                index === 0 ? "text-[#38BDF8]" : "text-gray-300"
              }`}
            >
              {item}

              {index === 0 && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#38BDF8]" />
              )}
            </a>
          ))}
        </div>

        {/* Let's Connect */}
        <a
          href="#contact"
          className="hidden rounded-lg border border-[#38BDF8]/70 px-5 py-2.5 text-sm text-white transition-all duration-300 hover:bg-[#38BDF8] hover:text-black hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] md:block"
        >
          Let's Connect
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="rounded-lg border border-white/20 px-3 py-2 text-xl text-white md:hidden"
        >
          ☰
        </button>

      </nav>
    </motion.header>
  );
};

export default Navbar;