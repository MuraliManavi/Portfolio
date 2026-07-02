import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAndroid,
  FaPython,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

import {
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
  SiArduino,
} from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "#61DAFB", top: "10%", left: "5%", duration: 8 },
  { Icon: SiFirebase, color: "#FFA611", top: "18%", right: "8%", duration: 10 },
  { Icon: FaGithub, color: "#ffffff", top: "45%", left: "3%", duration: 12 },
  { Icon: FaAndroid, color: "#3DDC84", top: "65%", right: "6%", duration: 9 },
  { Icon: FaNodeJs, color: "#83CD29", top: "80%", left: "8%", duration: 11 },
  { Icon: SiTailwindcss, color: "#38BDF8", top: "25%", left: "45%", duration: 7 },
  { Icon: SiMongodb, color: "#47A248", top: "75%", right: "40%", duration: 9 },
  { Icon: FaPython, color: "#FFD43B", top: "55%", right: "25%", duration: 8 },
  { Icon: SiArduino, color: "#00979D", top: "38%", left: "80%", duration: 10 },
  { Icon: FaDatabase, color: "#A855F7", top: "12%", left: "70%", duration: 9 },
  { Icon: FaBrain, color: "#EC4899", top: "88%", left: "55%", duration: 13 },
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">

      {icons.map((item, index) => {
        const Icon = item.Icon;

        return (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{
              y: [-25, 25, -25],
              rotate: [0, 360],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            className="opacity-10"
          >
            <Icon
              size={70}
              style={{
                color: item.color,
                filter: `drop-shadow(0 0 15px ${item.color})`,
              }}
            />
          </motion.div>
        );
      })}

    </div>
  );
}