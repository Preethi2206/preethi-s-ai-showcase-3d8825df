import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technicalSkills = [
  { name: "Python", level: 85 },
  { name: "Java", level: 70 },
  { name: "HTML / CSS", level: 80 },
  { name: "Machine Learning", level: 75 },
  { name: "AI Concepts", level: 80 },
  { name: "Git & GitHub", level: 70 },
];

const softSkills = ["Quick Learner", "Team Player", "Problem Solving", "Communication", "Adaptability", "Critical Thinking"];

const tools = ["VS Code", "Jupyter Notebook", "Google Colab", "Git", "Figma", "Postman"];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical */}
            <div>
              <h3 className="font-mono text-sm text-primary mb-6 uppercase tracking-wider">💻 Technical Skills</h3>
              <div className="space-y-5">
                {technicalSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * i }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.2 + 0.1 * i, duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills + Tools */}
            <div className="space-y-10">
              <div>
                <h3 className="font-mono text-sm text-primary mb-6 uppercase tracking-wider">🧠 Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="px-4 py-2 rounded-full glass text-sm text-foreground font-medium hover:border-primary/50 transition-colors"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-sm text-primary mb-6 uppercase tracking-wider">🛠 Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
