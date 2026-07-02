import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-20 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-black gradient-text">
              Murali Vara Prasad
            </h2>

            <p className="mt-6 text-gray-400 leading-8">

              Artificial Intelligence Student,
              Product Builder and Technology Enthusiast
              passionate about building products that solve
              real-world problems.

            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <a href="#mission" className="hover:text-purple-400 transition">
                Mission
              </a>

              <a href="#education" className="hover:text-purple-400 transition">
                Education
              </a>

              <a href="#products" className="hover:text-purple-400 transition">
                Products
              </a>

              <a href="#capabilities" className="hover:text-purple-400 transition">
                Capabilities
              </a>

              <a href="#journey" className="hover:text-purple-400 transition">
                Journey
              </a>

              <a href="#vision" className="hover:text-purple-400 transition">
                Vision
              </a>

              <a href="#github" className="hover:text-purple-400 transition">
                GitHub
              </a>

              <a href="#certifications" className="hover:text-purple-400 transition">
                Certifications
              </a>

              <a href="#contact" className="hover:text-purple-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Connect
            </h3>

            <div className="flex gap-5 mb-8">

              <a
                href="https://github.com/MuraliManavi"
                target="_blank"
                rel="noreferrer"
                className="glass w-14 h-14 rounded-full flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/murali-vara-prasad-4b32012bb"
                target="_blank"
                rel="noreferrer"
                className="glass w-14 h-14 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:muralivaraprasad8@gmail.com"
                className="glass w-14 h-14 rounded-full flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaEnvelope size={22} />
              </a>

            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 transition px-7 py-4 rounded-2xl"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-400 flex items-center gap-2">

            © {year} Murali Vara Prasad

            <FaHeart className="text-red-500" />

            Built with React & Tailwind CSS

          </p>

          <a
            href="#top"
            className="glass w-14 h-14 rounded-full flex items-center justify-center hover:bg-purple-600 transition"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}