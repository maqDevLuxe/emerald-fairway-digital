import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-golf.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Aerial view of championship golf course at sunrise" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-6"
        >
          Est. 1923 · By Invitation Only
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-tight max-w-5xl"
        >
          Where Legends
          <br />
          <span className="italic font-light">Walk the Fairway</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-4 mb-10 divider-champagne-wide"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-body text-sm md:text-base text-primary-foreground/80 max-w-xl mb-10 tracking-wide"
        >
          An exclusive 18-hole championship sanctuary set among 380 acres
          of immaculate rolling greens and century-old oaks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-6"
        >
          <Link
            to="/course"
            className="font-body text-xs tracking-widest uppercase px-8 py-3.5 bg-primary text-primary-foreground green-glow-hover transition-all duration-300 hover:bg-masters-light"
          >
            Explore the Course
          </Link>
          <Link
            to="/membership"
            className="font-body text-xs tracking-widest uppercase px-8 py-3.5 border border-champagne text-champagne hover:bg-champagne/10 transition-all duration-300"
          >
            Membership
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-champagne/50 mx-auto animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
