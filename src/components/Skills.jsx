import {
  FaRobot,
  FaGlobe,
  FaMobileAlt,
  FaMicrochip,
  FaPalette,
  FaCode
} from "react-icons/fa";

const skills = [
  {
    icon: <FaRobot />,
    title: "AI Development"
  },
  {
    icon: <FaGlobe />,
    title: "Web Applications"
  },
  {
    icon: <FaMobileAlt />,
    title: "Android Apps"
  },
  {
    icon: <FaMicrochip />,
    title: "IoT Handling"
  },
  {
    icon: <FaCode />,
    title: "Prompt Engineering"
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design"
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h5 className="section-heading">
          Skills
        </h5>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
              glass
              rounded-[30px]
              p-20
              text-center
              hover:-translate-y-3
              transition-all
              duration-300
              "
            >

              <div className="text-5xl text-purple-400 mb-5">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.title}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}