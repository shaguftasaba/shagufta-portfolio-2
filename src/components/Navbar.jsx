```jsx
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

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
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-14">

        {/* LOGO — ONLY S SYMBOL */}
        <Link
          to="/"
          className="flex h-12 w-12 items-center justify-center"
          aria-label="Shagufta Saba Home"
        >
          <img
            src={logo}
            alt="Shagufta Saba Logo"
            className="h-11 w-11 object-contain"
          />
        </Link>

        {/* NAVIGATION */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-[#38BDF8]"
                    : "text-gray-300 hover:text-[#38BDF8]"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#38BDF8]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-[#38BDF8]/50 hover:text-[#38BDF8] md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
```
