import murali from "../assets/murali.png";

import ayurpulse from "../assets/ayurpulse.png";
import sharefood from "../assets/sharefood.png";
import farmshop from "../assets/farmshop.png";
import globalbuy from "../assets/globalbuy.png";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Floating Product Images */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <img
          src={ayurpulse}
          alt=""
          className="absolute top-20 left-10 w-32 opacity-10 animate-float"
        />

        <img
          src={sharefood}
          alt=""
          className="absolute top-52 right-10 w-40 opacity-10 animate-float-slow"
        />

        <img
          src={farmshop}
          alt=""
          className="absolute bottom-32 left-20 w-36 opacity-10 animate-float"
        />

        <img
          src={globalbuy}
          alt=""
          className="absolute bottom-20 right-32 w-36 opacity-10 animate-float-slow"
        />

      </div>

      {/* Main Content */}

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[8px] text-purple-400 mb-6">
            PRODUCT BUILDER
          </p>

          <h1 className="text-6xl lg:text-8xl font-bold leading-none">

            Murali

            <br />

            <span className="gradient-text">
              Vara Prasad
            </span>

          </h1>

          <p className="mt-8 text-2xl font-semibold text-white">
            This person builds products.
          </p>

          <p className="text-purple-300 text-xl mt-2">
            Not just portfolio projects.
          </p>

          <p className="mt-8 text-gray-300 text-xl leading-8 max-w-xl">

            From healthcare and agriculture
            to social impact and global commerce,

            I build AI, IoT, Web and Mobile
            solutions that solve real-world problems.

          </p>

          {/* Tags */}

          <div className="flex flex-wrap gap-3 mt-8">

            <div className="glass px-4 py-2 rounded-xl">
              AI
            </div>

            <div className="glass px-4 py-2 rounded-xl">
              IoT
            </div>

            <div className="glass px-4 py-2 rounded-xl">
              Web
            </div>

            <div className="glass px-4 py-2 rounded-xl">
              Android
            </div>

            <div className="glass px-4 py-2 rounded-xl">
              Product Design
            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-5 mt-10 flex-wrap">

            <a
              href="#products"
              className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-semibold"
            >
              Explore Products
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="glass px-8 py-4 rounded-2xl font-semibold"
            >
              View Resume
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* Glow */}

          <div className="absolute w-[550px] h-[550px] bg-purple-600/30 blur-[150px] rounded-full"></div>

          <div className="glass p-4 rounded-[40px] relative">

            <img
              src={murali}
              alt="Murali Vara Prasad"
              className="w-[420px] rounded-[30px]"
            />

            <div className="absolute -top-5 -left-10 glass px-5 py-3 rounded-2xl">
              AI Builder
            </div>

            <div className="absolute top-1/2 -right-10 glass px-5 py-3 rounded-2xl">
              Product Creator
            </div>

            <div className="absolute bottom-10 -left-10 glass px-5 py-3 rounded-2xl">
              IoT Innovator
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}