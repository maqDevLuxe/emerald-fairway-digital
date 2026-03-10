import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import diningImg from "@/assets/dining.jpg";

const DiningSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <img src={diningImg} alt="Fine dining restaurant with golf course views" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 border border-champagne/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Fine Dining & Cellar</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Culinary
            <br />
            <span className="italic">Excellence</span>
          </h2>
          <div className="divider-champagne !mx-0 mb-8" />
          <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
            Executive Chef Laurent Dubois crafts seasonal tasting menus that rival Michelin-starred
            establishments. Our 3,000-bottle wine cellar features rare vintages from Bordeaux, Burgundy,
            and Napa Valley's most exclusive estates.
          </p>
          <Link
            to="/dining"
            className="inline-block font-body text-xs tracking-widest uppercase px-8 py-3.5 border border-masters text-masters hover:bg-masters hover:text-primary-foreground transition-all duration-300"
          >
            View Dining
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DiningSection;
