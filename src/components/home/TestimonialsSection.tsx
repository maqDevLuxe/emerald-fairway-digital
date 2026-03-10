import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  { initials: "J.W.", text: "In forty years of membership, every sunrise on the first tee still takes my breath away. This is not just a club—it is home.", title: "Founding Member" },
  { initials: "R.H.", text: "The level of discretion and service here is unmatched. From the caddie program to the wine cellar, perfection is the baseline.", title: "Member Since 1998" },
  { initials: "E.M.", text: "My grandfather played here. My father played here. And one day, my children will carry on the tradition. That continuity is priceless.", title: "Legacy Member" },
];

const TestimonialsSection = () => {
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
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Member Voices</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Words of <span className="italic">Distinction</span>
        </h2>
        <div className="divider-champagne mt-6" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.initials}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            className="border border-border p-8 text-center hover:border-champagne transition-colors duration-500"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
              <span className="font-display text-xl text-primary-foreground">{t.initials}</span>
            </div>
            <p className="font-display text-base italic text-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div className="divider-champagne mb-4" />
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{t.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
