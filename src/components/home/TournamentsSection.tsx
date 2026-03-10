import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Counter = ({ end, suffix = "", inView }: { end: number; suffix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end]);

  return <span>{count}{suffix}</span>;
};

const stats = [
  { value: 47, suffix: "", label: "Championships Hosted" },
  { value: 12, suffix: "", label: "Major Tournaments" },
  { value: 102, suffix: "", label: "Years of Legacy" },
  { value: 320, suffix: "+", label: "Distinguished Members" },
];

const TournamentsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-champagne mb-4">Historic Tournaments</p>
        <h2 className="font-display text-4xl md:text-5xl font-light">
          A Legacy of <span className="italic">Greatness</span>
        </h2>
        <div className="divider-champagne mt-6" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            className="text-center"
          >
            <p className="font-display text-5xl md:text-6xl text-champagne mb-2">
              <Counter end={stat.value} suffix={stat.suffix} inView={inView} />
            </p>
            <p className="font-body text-xs tracking-widest uppercase opacity-70">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TournamentsSection;
