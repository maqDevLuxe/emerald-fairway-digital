import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clubhouseImg from "@/assets/clubhouse.jpg";

const ClubhouseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <img src={clubhouseImg} alt="Elegant clubhouse interior with leather and mahogany" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 border border-champagne/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">The Clubhouse</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            A Sanctuary of
            <br />
            <span className="italic">Refined Elegance</span>
          </h2>
          <div className="divider-champagne !mx-0 mb-8" />
          <p className="font-body text-sm leading-relaxed text-muted-foreground mb-4">
            Our 42,000 sq. ft. Georgian Revival clubhouse stands as a monument to timeless
            sophistication. Hand-laid mahogany paneling, Tiffany stained glass, and a trophy room
            that chronicles a century of golfing excellence.
          </p>
          <p className="font-body text-sm leading-relaxed text-muted-foreground">
            From the Members' Library to the Champions' Terrace, every corner has been curated
            to provide an unparalleled atmosphere of prestige and comfort.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClubhouseSection;
