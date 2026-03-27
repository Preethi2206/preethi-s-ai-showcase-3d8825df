import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Medical Image Processing System",
    description:
      "An intelligent system that detects diseases using advanced image processing and machine learning techniques. Built CNN models for classification of medical scans with high accuracy.",
    tech: ["Python", "TensorFlow", "OpenCV", "ML"],
    role: "Model building, training & testing",
    image: projectMedical,
    featured: true,
  },
  {
    title: "FAER – Scholar Portfolio",
    description:
      "A modern, interactive portfolio web application showcasing academic achievements, projects, and skills with smooth animations and responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    role: "Full Stack Development",
    image: null,
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-12" />

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="glass rounded-2xl overflow-hidden hover:glow-primary transition-all group"
              >
                <div className={`grid ${project.image ? "md:grid-cols-2" : ""} gap-0`}>
                  {project.image && (
                    <div className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col justify-center">
                    {project.featured && (
                      <span className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                        ⭐ Featured Project
                      </span>
                    )}
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      <span className="text-primary font-mono">Role:</span> {project.role}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Github size={16} /> Code
                      </a>
                      <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
