import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAndroid,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiArduino,
  SiTensorflow,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: <FaReact size={50} />,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={50} />,
    color: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={50} />,
    color: "#38BDF8",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={50} />,
    color: "#FFA611",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={50} />,
    color: "#47A248",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={50} />,
    color: "#83CD29",
  },
  {
    name: "Python",
    icon: <FaPython size={50} />,
    color: "#FFD43B",
  },
  {
    name: "Java",
    icon: <FaJava size={50} />,
    color: "#F89820",
  },
  {
    name: "Android",
    icon: <FaAndroid size={50} />,
    color: "#3DDC84",
  },
  {
    name: "ESP32",
    icon: <SiArduino size={50} />,
    color: "#00979D",
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow size={50} />,
    color: "#FF6F00",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={50} />,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={50} />,
    color: "#ffffff",
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-purple-400">
            Technologies
          </p>

          <h2 className="text-6xl font-bold mt-4">
            Tech Stack
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies I use to design, develop and deploy modern
            software products.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {techStack.map((tech, index) => (

            <motion.div
              key={tech.name}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
              }}
              whileHover={{
                scale: 1.08,
                y: -10,
              }}
              className="glass rounded-[30px] p-8 flex flex-col items-center justify-center text-center border border-white/10"
            >

              <div
                style={{
                  color: tech.color,
                  filter: `drop-shadow(0 0 12px ${tech.color})`,
                }}
              >
                {tech.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {tech.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}