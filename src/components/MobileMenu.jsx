import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Mission", href: "#mission" },
  { name: "Education", href: "#education" },
  { name: "Products", href: "#products" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Journey", href: "#journey" },
  { name: "Vision", href: "#vision" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-white z-[9999] relative"
      >
        <HiMenuAlt3 size={34} />
      </button>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-xl"
          >

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 18,
              }}
              className="absolute right-0 top-0 h-full w-[320px] bg-[#0B1020] border-l border-white/10 shadow-2xl"
            >

              {/* Header */}

              <div className="flex items-center justify-between p-6 border-b border-white/10">

                <h2 className="text-2xl font-bold gradient-text">
                  Murali
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="text-white"
                >
                  <HiX size={32} />
                </button>

              </div>

              {/* Navigation */}

              <div className="flex flex-col mt-10">

                {navLinks.map((item, index) => (

                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="px-8 py-5 text-lg border-b border-white/5 hover:bg-purple-500/10 hover:text-purple-400 transition"
                  >
                    {item.name}
                  </motion.a>

                ))}

              </div>

              {/* Footer */}

              <div className="absolute bottom-10 left-8 right-8">

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-purple-600 hover:bg-purple-700 transition py-4 rounded-2xl font-semibold"
                >
                  Download Resume
                </a>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}