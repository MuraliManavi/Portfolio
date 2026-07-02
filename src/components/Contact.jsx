import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
    >

      <div className="max-w-5xl mx-auto px-8">

        <h2 className="section-heading">
          Contact
        </h2>

        <div className="glass rounded-[40px] p-12 text-center">

          <p className="flex justify-center items-center gap-3 text-lg">

            <FaEnvelope />

            muralivaraprasad8@gmail.com

          </p>

          <p className="flex justify-center items-center gap-3 text-lg mt-5">

            <FaPhone />

            +91 7569673485

          </p>

          <div className="flex justify-center gap-8 mt-10">

            <a
              href="https://github.com/MuraliManavi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={35} />
            </a>

            <a
              href="https://linkedin.com/in/murali-vara-prasad-4b32012bb"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={35} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}