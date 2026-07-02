import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#090B18]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="relative flex flex-col items-center">

        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-28 h-28 rounded-full border-[5px] border-purple-500 border-t-transparent"
        />

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-10 text-5xl font-black"
        >
          <span className="text-white">Murali</span>{" "}
          <span className="gradient-text">Portfolio</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-4 tracking-[8px] uppercase text-purple-400 text-sm"
        >
          Building Products...
        </motion.p>

      </div>
    </motion.div>
  );
}