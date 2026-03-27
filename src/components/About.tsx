import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI/ML Focus" },
  { icon: Code, label: "Full Stack" },
  { icon: Lightbulb, label: "Problem Solver" },
  { icon: Rocket, label: "Quick Learner" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-8" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a 3rd-year B.Tech AI & ML student with a strong passion for artificial intelligence, 
                machine learning, and problem-solving. I enjoy building real-world applications that 
                leverage intelligent algorithms to make an impact.
              </p>
              <p>
                From medical image processing to full-stack web development, I thrive on exploring 
                new technologies and pushing the boundaries of what's possible with code. I believe 
                in continuous learning and collaborative problem-solving.
              </p>
              <p>
                My goal is to become a skilled software developer and contribute to innovative 
                AI-based solutions that solve real-world challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass rounded-xl p-6 text-center hover:glow-primary transition-all group"
                >
                  <h.icon className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" size={32} />
                  <p className="text-sm font-medium text-foreground">{h.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
