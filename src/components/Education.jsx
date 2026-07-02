import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[6px] text-purple-400 mb-4">
            Education
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Academic Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Degree */}

            <div className="glass p-8 rounded-[30px]">

              <p className="text-purple-400 mb-3">
                2025 - 2028
              </p>

              <h3 className="text-2xl font-bold">
                B.Sc Artificial Intelligence
              </h3>

              <p className="text-gray-400 mt-4">
                Aditya Degree College
              </p>

              <p className="mt-4 text-green-400">
                SEM - 1 CGPA: 8.5
              </p>

            </div>

            {/* Intermediate */}

            <div className="glass p-8 rounded-[30px]">

              <p className="text-purple-400 mb-3">
                2023 - 2025
              </p>

              <h3 className="text-2xl font-bold">
                Intermediate (MPC)
              </h3>

              <p className="text-gray-400 mt-4">
                Andhra Pradesh Board
              </p>

              <p className="mt-4 text-green-400">
                84.5%
              </p>

            </div>

            {/* SSC */}

            <div className="glass p-8 rounded-[30px]">

              <p className="text-purple-400 mb-3">
                SSC
              </p>

              <h3 className="text-2xl font-bold">
                Secondary Education
              </h3>

              <p className="text-gray-400 mt-4">
                Andhra Pradesh State Board
              </p>

              <p className="mt-4 text-green-400">
                86.6%
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}