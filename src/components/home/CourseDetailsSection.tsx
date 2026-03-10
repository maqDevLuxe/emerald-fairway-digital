import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import courseImg from "@/assets/course-detail.jpg";

const CourseDetailsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Championship Course</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            18 Holes of
            <br />
            <span className="italic">Pure Prestige</span>
          </h2>
          <div className="divider-champagne !mx-0 mb-8" />
          <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
            Designed by the legendary Alister MacKenzie in 1923, our championship course weaves through
            ancient oak corridors and over pristine water features. Every hole tells a story of strategic
            brilliance, where risk and reward dance in perfect harmony.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: "Par", value: "72" },
              { label: "Yards", value: "7,435" },
              { label: "Slope", value: "155" },
            ].map((stat) => (
              <div key={stat.label} className="text-center border border-border p-4">
                <p className="font-display text-3xl text-masters mb-1">{stat.value}</p>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img src={courseImg} alt="Championship golf hole with water hazard" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 border border-champagne/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetailsSection;
