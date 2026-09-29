import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },

    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-14">

        {/* LOGO + NAME */}
        <Link
          to="/"
          className="flex items-center"
          aria-label="Shagufta Saba Home"
        >
          {/* S LOGO */}
          <img
            src={logo}
            alt="S Logo"
            className="h-10 w-10 object-contain"
          />

          {/* DIVIDER */}
          <span className="mx-4 h-9 w-px bg-white/25"></span>

          {/* NAME */}
          <div className="flex items-baseline gap-3">

            {/* SHAGUFTA */}
            <span
              className="text-[30px] italic leading-none text-white"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Shagufta
            </span>

            {/* SABA */}
            <span className="text-[13px] font-semibold uppercase tracking-[0.28em] text-white">
              SABA
            </span>

          </div>
        </Link>

        {/* NAVIGATION */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={
                  active
                    ? "relative text-sm text-[#38BDF8]"
                    : "relative text-sm text-gray-300 hover:text-[#38BDF8]"
                }
              >
                {link.name}

                {active && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#38BDF8]"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;