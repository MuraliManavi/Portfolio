import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#090B18]">

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#131933] to-[#090B18]" />

      {/* Glow 1 */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-32 w-[550px] h-[550px] rounded-full bg-purple-600/20 blur-[170px]"
      />

      {/* Glow 2 */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-[-180px] w-[650px] h-[650px] rounded-full bg-cyan-500/20 blur-[180px]"
      />

      {/* Glow 3 */}
      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, 90, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] left-1/3 w-[500px] h-[500px] rounded-full bg-pink-600/10 blur-[170px]"
      />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Dots */}
      {[...Array(25)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: Math.random() * 5 + 2,
            height: Math.random() * 5 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

    </div>
  );
}