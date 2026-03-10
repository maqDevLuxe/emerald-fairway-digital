import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Begin Your Legacy</p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-6">
          Inquire for
          <br />
          <span className="italic">Membership</span>
        </h2>
        <div className="divider-champagne mb-8" />
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
          Membership at Emerald Greens is by invitation and nomination only. Begin the process
          with a confidential inquiry, and our Membership Director will guide you through every step.
        </p>
        <Link
          to="/membership"
          className="inline-block font-body text-xs tracking-widest uppercase px-12 py-4 bg-primary text-primary-foreground green-glow-hover transition-all duration-300 hover:bg-masters-light"
        >
          Submit an Inquiry
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
