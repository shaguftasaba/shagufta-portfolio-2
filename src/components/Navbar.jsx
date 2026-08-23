import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-14">

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-baseline gap-2"
        >
          <span
            className="text-[32px] font-medium italic leading-none text-[#38BDF8] transition-colors duration-300 group-hover:text-[#7dd3fc]"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
            }}
          >
            Shagufta
          </span>

          <span className="text-[11px] font-bold uppercase leading-none tracking-[0.22em] text-white">
            SABA
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors duration-300 ${
                  active
                    ? "text-[#38BDF8]"
                    : "text-gray-300 hover:text-[#38BDF8]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;