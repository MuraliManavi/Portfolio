export default function Capabilities() {
  const skills = [
    "Artificial Intelligence",
    "Web Development",
    "Android Development",
    "IoT Systems",
    "Firebase",
    "ESP32",
    "Arduino",
    "Prompt Engineering",
  ];

  return (
    <section id="capabilities" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Capabilities
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 rounded-xl bg-white/10"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}