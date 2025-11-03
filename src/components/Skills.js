import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "UI Design", level: 80 },
    { name: "HTML & CSS", level: 95 },
  ];

  return (
    <section className="skills p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      <div className="space-y-6">
        {skills.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="skill-bar bg-gray-700 rounded-full h-3 mt-2">
              <div
                className="skill-fill bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${s.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
