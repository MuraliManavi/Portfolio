import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

import pearson from "../assets/certificates/pearson.jpg";
import google from "../assets/certificates/google.jpg";
import forge from "../assets/certificates/forge.jpg";

const certificates = [
  {
    title: "Pearson MePro Level 10",
    issuer: "Pearson",
    year: "2025",
    image: pearson,
    description:
      "Successfully completed Pearson MePro Level 10 English proficiency program.",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google / Coursera",
    year: "2026",
    image: google,
    description:
      "Completed Foundations: Data, Data, Everywhere by Google through Coursera.",
  },
  {
    title: "Forge Inspira'25",
    issuer: "Forge Alumnus",
    year: "2025",
    image: forge,
    description:
      "Secured 1st Position in Idea-a-thon at Forge Inspira'25.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-purple-400">
            Achievements
          </p>

          <h2 className="text-6xl font-bold mt-4">
            Certifications
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional certifications, competitions and achievements that
            strengthen my technical foundation.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="glass rounded-[30px] overflow-hidden border border-white/10"
            >

              <div className="overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-80 object-cover hover:scale-105 transition duration-700"
                />

              </div>

              <div className="p-8">

                <div className="flex items-center gap-3 text-purple-400">

                  <FaCertificate />

                  <span>
                    {certificate.issuer}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mt-5">
                  {certificate.title}
                </h3>

                <p className="text-gray-300 mt-4 leading-7">
                  {certificate.description}
                </p>

                <div className="flex justify-between items-center mt-8">

                  <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300">
                    {certificate.year}
                  </span>

                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition">
                    View
                    <FaExternalLinkAlt />
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}