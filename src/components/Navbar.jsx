import { FaGithub, FaLinkedin } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const links = [
  { name: "Mission", id: "mission" },
  { name: "Education", id: "education" },
  { name: "Products", id: "products" },
  { name: "Capabilities", id: "capabilities" },
  { name: "Tech Stack", id: "techstack" },
  { name: "Journey", id: "journey" },
  { name: "Vision", id: "vision" },
  { name: "GitHub", id: "github" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#top"
          className="text-3xl font-black tracking-wide gradient-text hover:scale-105 transition"
        >
          Murali
        </a>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-7">

          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="
                relative
                text-white
                font-medium
                hover:text-purple-400
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-purple-400
                hover:after:w-full
                after:transition-all
                after:duration-300
              "
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Resume Button */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              hidden
              md:flex
              items-center
              px-5
              py-2.5
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-indigo-600
              hover:from-purple-700
              hover:to-indigo-700
              transition
              duration-300
              font-semibold
              shadow-lg
            "
          >
            Resume
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/MuraliManavi"
            target="_blank"
            rel="noreferrer"
            className="
              hidden
              md:flex
              items-center
              justify-center
              w-11
              h-11
              rounded-full
              glass
              hover:bg-purple-600
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaGithub size={20} />
          </a>

          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/murali-vara-prasad-4b32012bb"
            target="_blank"
            rel="noreferrer"
            className="
              hidden
              md:flex
              items-center
              justify-center
              w-11
              h-11
              rounded-full
              glass
              hover:bg-blue-600
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaLinkedin size={20} />
          </a>

          {/* Mobile Menu */}

          <div className="lg:hidden">
            <MobileMenu links={links} />
          </div>

        </div>

      </div>

    </nav>
  );
}