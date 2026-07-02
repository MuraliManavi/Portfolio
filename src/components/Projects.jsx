import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ayurpulse from "../assets/ayurpulse.png";
import sharefood from "../assets/sharefood.png";
import farmshop from "../assets/farmshop.png";
import globalbuy from "../assets/globalbuy.png";
import anygoodsExchange from "../assets/anygoods-exchange.png";

const projects = [
  {
    title: "AyurPulse",
    category: "HealthTech Product",
    image: ayurpulse,
    description:
      "AI-powered healthcare monitoring system using ESP32, GPS, GSM, pulse sensors, and modern web technologies.",
    github: "https://github.com/MuraliManavi/ayurpulse-web",
    demo: "https://ayurpulse-web.vercel.app/",
    tech: ["React", "Firebase", "ESP32", "AI"],
  },
  {
    title: "ShareFood",
    category: "Social Impact Platform",
    image: sharefood,
    description:
      "Food-sharing platform connecting donors and beneficiaries to reduce food waste.",
    github: "https://github.com/MuraliManavi/ShareFood",
    demo: "https://share-food-indol.vercel.app/",
    tech: ["React", "Firebase", "Leaflet"],
  },
  {
    title: "FARM Shop",
    category: "AgriTech Marketplace",
    image: farmshop,
    description:
      "Digital marketplace connecting farmers directly with customers.",
    github: "https://github.com/MuraliManavi/farmtech",
    demo: "https://farmtech-ivory.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "GlobalBuy India",
    category: "Cross-Border Commerce",
    image: globalbuy,
    description:
      "Platform helping Indian users purchase products from international sellers.",
    github: "https://github.com/MuraliManavi/globalbuy-india",
    demo: "https://globalbuy-india.vercel.app/",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Any Goods Exchange",
    category: "Smart Marketplace",
    image: anygoodsExchange,
    description:
      "Marketplace for buying, selling and exchanging products built with React and Firebase.",
    github: "https://github.com/MuraliManavi/anygoods-exchange",
    demo: "https://anygoods-exchange.vercel.app/",
    tech: ["React", "Firebase", "Storage"],
  },
];

export default function Projects() {
  return (
    <section id="products" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-purple-400 font-semibold">
            Products
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Products I've Built
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
            Every product represents solving a real-world problem using
            Artificial Intelligence, IoT, Web Development and Modern Software Engineering.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
              className="glass rounded-[30px] overflow-hidden border border-white/10"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition duration-700 hover:scale-110"
                />

              </div>

              <div className="p-8">

                <span className="text-purple-400 uppercase text-sm tracking-widest">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold mt-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex flex-wrap gap-4 mt-8">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-xl transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    Source Code
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}