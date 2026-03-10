import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import lushImg from "@/assets/lush-green.jpg";

const LushGreenSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="relative h-[60vh] md:h-[70vh] overflow-hidden"
    >
      <img src={lushImg} alt="Panoramic lush green golf course landscape" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground font-light italic text-center">
          "The fairway is a cathedral of green"
        </p>
      </div>
    </motion.section>
  );
};

export default LushGreenSection;
