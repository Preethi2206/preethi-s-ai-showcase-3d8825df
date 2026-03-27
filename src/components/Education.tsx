import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Python Programming Certification",
  "AI & Machine Learning Course",
  "FAER Scholar Recognition",
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
              </div>
              <div className="border-l-2 border-primary/30 pl-6 space-y-2">
                <h4 className="font-semibold text-foreground text-lg">B.Tech – AI & Machine Learning</h4>
                <p className="text-muted-foreground text-sm">3rd Year Student</p>
                <p className="font-mono text-xs text-primary">2022 – 2026</p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Award className="text-accent" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {c}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
