import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

export default function ContactForm() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong.");
      });
  };

  return (
    <section className="py-32">

      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="glass rounded-[40px] p-10"
        >

          <h2 className="text-5xl font-bold text-center mb-4">
            Let's Build Together
          </h2>

          <p className="text-center text-gray-400 mb-10">
            Have an idea or opportunity?
            Let's connect.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            <div className="relative">

              <FaUser className="absolute left-5 top-5 text-purple-400" />

              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full glass rounded-xl pl-14 pr-5 py-4 outline-none"
              />

            </div>

            <div className="relative">

              <FaEnvelope className="absolute left-5 top-5 text-purple-400" />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Email Address"
                className="w-full glass rounded-xl pl-14 pr-5 py-4 outline-none"
              />

            </div>

            <div className="relative">

              <FaCommentDots className="absolute left-5 top-5 text-purple-400" />

              <textarea
                rows="6"
                name="message"
                required
                placeholder="Your Message..."
                className="w-full glass rounded-xl pl-14 pr-5 py-4 outline-none resize-none"
              />

            </div>

            <button
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-xl py-4 flex justify-center items-center gap-3 text-lg font-semibold"
            >

              {loading ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}

            </button>

            {success && (
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="text-center text-green-400"
              >
                ✅ Message sent successfully!
              </motion.p>
            )}

          </form>

        </motion.div>

      </div>

    </section>
  );
}