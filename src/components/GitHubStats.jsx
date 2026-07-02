import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function GitHubStats() {
  return (
    <section id="github" className="py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-purple-400">
            GitHub
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Open Source Journey
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Building products, sharing code and continuously learning through
            modern software development.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            className="glass rounded-3xl p-8 text-center"
          >

            <FaGithub
              className="mx-auto text-5xl text-purple-400"
            />

            <h3 className="text-5xl font-bold mt-6">
              5+
            </h3>

            <p className="mt-3 text-gray-300">
              Public Products
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="glass rounded-3xl p-8 text-center"
          >

            <FaCodeBranch
              className="mx-auto text-5xl text-cyan-400"
            />

            <h3 className="text-5xl font-bold mt-6">
              React
            </h3>

            <p className="mt-3 text-gray-300">
              Primary Stack
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="glass rounded-3xl p-8 text-center"
          >

            <FaStar
              className="mx-auto text-5xl text-yellow-400"
            />

            <h3 className="text-5xl font-bold mt-6">
              AI
            </h3>

            <p className="mt-3 text-gray-300">
              Product Focus
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="glass rounded-3xl p-8 text-center"
          >

            <FaGithub
              className="mx-auto text-5xl text-green-400"
            />

            <h3 className="text-5xl font-bold mt-6">
              100%
            </h3>

            <p className="mt-3 text-gray-300">
              Passion
            </p>

          </motion.div>

        </div>

        {/* GitHub Profile */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[40px] mt-20 p-10"
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <h3 className="text-4xl font-bold">
                MuraliManavi
              </h3>

              <p className="mt-5 text-gray-300 leading-8 max-w-2xl">

                Explore all my repositories including AI,
                IoT, Web Applications, Agriculture,
                Healthcare and Cross-Border Commerce
                products.

              </p>

            </div>

            <a
              href="https://github.com/MuraliManavi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl"
            >

              <FaGithub size={24} />

              Visit GitHub

              <FaExternalLinkAlt />

            </a>

          </div>

        </motion.div>

        {/* Repository Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {[
            {
              name: "AyurPulse",
              url: "https://github.com/MuraliManavi/ayurpulse-web",
            },
            {
              name: "ShareFood",
              url: "https://github.com/MuraliManavi/ShareFood",
            },
            {
              name: "FARM Shop",
              url: "https://github.com/MuraliManavi/farmtech",
            },
            {
              name: "GlobalBuy India",
              url: "https://github.com/MuraliManavi/globalbuy-india",
            },
            {
              name: "Any Goods Exchange",
              url: "https://github.com/MuraliManavi/anygoods-exchange",
            },
          ].map((repo) => (

            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="glass rounded-3xl p-8 block"
            >

              <FaGithub className="text-4xl text-purple-400" />

              <h4 className="text-2xl font-bold mt-6">
                {repo.name}
              </h4>

              <p className="text-gray-400 mt-3">
                View Source Code →
              </p>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}