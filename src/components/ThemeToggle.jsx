import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("light");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.4 }}
      onClick={() => setDark(!dark)}
      className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-purple-600 transition"
    >
      {dark ? (
        <FaSun className="text-yellow-300" />
      ) : (
        <FaMoon className="text-purple-300" />
      )}
    </motion.button>
  );
}