import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const holes = [
  { hole: 1, name: "The Awakening", par: 4, yards: 425, difficulty: "Medium" },
  { hole: 4, name: "Devil's Elbow", par: 5, yards: 565, difficulty: "Hard" },
  { hole: 7, name: "The Cathedral", par: 3, yards: 215, difficulty: "Medium" },
  { hole: 12, name: "Amen Corner", par: 3, yards: 155, difficulty: "Extreme" },
  { hole: 15, name: "Eagle's Nest", par: 5, yards: 530, difficulty: "Hard" },
  { hole: 18, name: "The Gauntlet", par: 4, yards: 470, difficulty: "Extreme" },
];

const difficultyColor: Record<string, string> = {
  Medium: "text-champagne",
  Hard: "text-accent",
  Extreme: "text-masters",
};

const MetricsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Signature Holes</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Course <span className="italic">Metrics</span>
        </h2>
        <div className="divider-champagne mt-6" />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-5 gap-4 mb-4 font-body text-xs tracking-widest uppercase text-muted-foreground px-6">
          <span>Hole</span><span>Name</span><span className="text-center">Par</span><span className="text-center">Yards</span><span className="text-right">Rating</span>
        </div>
        {holes.map((hole, i) => (
          <motion.div
            key={hole.hole}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="grid grid-cols-5 gap-4 items-center px-6 py-4 border-t border-border hover:bg-card transition-colors duration-300"
          >
            <span className="font-display text-2xl text-masters">#{hole.hole}</span>
            <span className="font-display text-base italic text-foreground">{hole.name}</span>
            <span className="font-body text-sm text-center text-muted-foreground">{hole.par}</span>
            <span className="font-body text-sm text-center text-muted-foreground">{hole.yards}</span>
            <span className={`font-body text-xs tracking-widest uppercase text-right ${difficultyColor[hole.difficulty]}`}>
              {hole.difficulty}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
