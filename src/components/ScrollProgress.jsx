import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[9999]
                   bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                   shadow-[0_0_20px_rgba(168,85,247,0.8)]"
      />

      {/* Glow */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-2 origin-left z-[9998]
                   bg-purple-500/30 blur-md"
      />
    </>
  );
}