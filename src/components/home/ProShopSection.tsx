import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import proshopImg from "@/assets/proshop.jpg";

const ProShopSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Pro Shop & Coaching</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Equip Your
            <br />
            <span className="italic">Finest Game</span>
          </h2>
          <div className="divider-champagne !mx-0 mb-8" />
          <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
            Our curated Pro Shop features the world's most prestigious brands—Titleist, Callaway,
            and exclusive club-branded collections. Personal fitting sessions ensure every club
            is an extension of your swing.
          </p>
          <div className="space-y-4">
            {["PGA Tour-level coaching staff", "TrackMan® swing analysis studio", "Custom club fitting & repair", "Members-only merchandise collection"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-masters rounded-full" />
                <p className="font-body text-sm text-muted-foreground">{item}</p>
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
          <img src={proshopImg} alt="Luxury pro shop interior" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 border border-champagne/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProShopSection;
