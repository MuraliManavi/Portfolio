import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        animate={{
          x: position.x - 180,
          y: position.y - 180,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 0.5,
        }}
      >
        <div className="w-[360px] h-[360px] rounded-full bg-purple-500/10 blur-[140px]" />
      </motion.div>

      {/* Inner Cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
        }}
      >
        <div className="w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_20px_#8b5cf6]" />
      </motion.div>

      {/* Cursor Ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden lg:block"
        animate={{
          x: position.x - 22,
          y: position.y - 22,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
        }}
      >
        <div className="w-11 h-11 rounded-full border border-purple-400/60" />
      </motion.div>
    </>
  );
}