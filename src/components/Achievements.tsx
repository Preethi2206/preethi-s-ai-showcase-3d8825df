import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code2, Users, Sparkles } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "National Level Hackathon",
    description: "Participated and showcased innovative AI solutions at a national-level hackathon.",
  },
  {
    icon: Sparkles,
    title: "FAER Scholar",
    description: "Recognized as a FAER Scholar for academic excellence and research contributions.",
  },
  {
    icon: Code2,
    title: "Coding Practice",
    description: "Consistent problem-solving practice on competitive coding platforms.",
  },
  {
    icon: Users,
    title: "Workshops & Seminars",
    description: "Actively participated in AI/ML workshops, tech seminars and skill-building events.",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Achievements & <span className="text-gradient">Activities</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * i }}
                className="glass rounded-2xl p-6 hover:glow-accent transition-all group"
              >
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <a.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
