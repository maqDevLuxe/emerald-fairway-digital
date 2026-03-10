import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Award, Clock } from "lucide-react";

const criteria = [
  { icon: Shield, title: "Nomination Required", desc: "Two existing members in good standing must formally nominate each candidate." },
  { icon: Users, title: "Board Review", desc: "Our Membership Committee conducts a thorough and discreet vetting process." },
  { icon: Award, title: "Proven Character", desc: "Candidates must demonstrate integrity, sportsmanship, and community standing." },
  { icon: Clock, title: "Waiting Period", desc: "A minimum 18-month consideration period ensures the right fit for our community." },
];

const MembershipCriteriaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Strict Membership Criteria</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Exclusivity by <span className="italic">Design</span>
        </h2>
        <div className="divider-champagne mt-6" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {criteria.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            className="text-center p-6 group"
          >
            <div className="w-14 h-14 mx-auto mb-6 border border-champagne flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <item.icon size={22} className="text-masters group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-3">{item.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MembershipCriteriaSection;
