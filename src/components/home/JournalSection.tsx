import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    date: "March 2026",
    title: "Spring Invitational: A Weekend of Champions",
    excerpt: "The 47th annual Spring Invitational brought together the finest amateur golfers from across three continents.",
  },
  {
    date: "February 2026",
    title: "The Art of the Short Game: Masterclass Series",
    excerpt: "Our Director of Golf shares insights from three decades of perfecting the wedge play around our storied greens.",
  },
  {
    date: "January 2026",
    title: "Cellar Selection: 2019 Château Margaux",
    excerpt: "Sommelier's pick from our private reserve—a perfect pairing for the winter tasting menu.",
  },
];

const JournalSection = () => {
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
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">The Fairway Journal</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Stories from the <span className="italic">Green</span>
        </h2>
        <div className="divider-champagne mt-6" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            className="group border border-border p-8 hover:border-champagne transition-colors duration-500"
          >
            <p className="font-body text-xs tracking-widest uppercase text-accent mb-4">{article.date}</p>
            <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-masters transition-colors duration-300">
              {article.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
            <div className="mt-6 w-8 h-px bg-champagne group-hover:w-16 transition-all duration-500" />
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default JournalSection;
