import { motion } from "framer-motion";

const particles = [...Array(120)].map((_, i) => ({
  id: i,
  size: Math.random() * 5 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 12 + 8,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.5 + 0.2,
}));

export default function Particles() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">

      {particles.map((particle) => (

        <motion.span
          key={particle.id}
          className="absolute rounded-full"

          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            background:
              "linear-gradient(135deg,#a855f7,#06b6d4)",
            boxShadow:
              "0 0 20px rgba(168,85,247,.8)",
          }}

          animate={{
            y: [-40, 40, -40],
            x: [-20, 20, -20],
            opacity: [
              particle.opacity,
              1,
              particle.opacity,
            ],
            scale: [1, 1.5, 1],
          }}

          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}

        />

      ))}

    </div>
  );
}