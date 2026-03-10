import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Royal Melbourne", "St Andrews Links", "Pebble Beach", "Muirfield", "Shinnecock Hills", "Cypress Point"
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Reciprocal Club Partners
        </p>
        <div className="divider-champagne" />
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
        {partners.map((partner, i) => (
          <motion.div
            key={partner}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            className="font-display text-lg md:text-xl text-muted-foreground/60 hover:text-masters transition-colors duration-300 tracking-wide"
          >
            {partner}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
