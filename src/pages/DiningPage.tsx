import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import diningImg from "@/assets/dining.jpg";
import clubhouseImg from "@/assets/clubhouse.jpg";
import { Wine, Utensils, Clock, Star } from "lucide-react";

const menus = [
  {
    name: "The Oak Room",
    type: "Fine Dining",
    icon: Utensils,
    hours: "Dinner: 6pm – 10pm",
    desc: "Executive Chef Laurent Dubois' tasting menus showcase seasonal ingredients from our estate gardens and partnerships with local purveyors.",
    dishes: ["Wagyu Tartare with Truffle Emulsion", "Pan-Seared Dover Sole", "Rack of Lamb with Herb Crust", "Dark Chocolate Fondant"],
  },
  {
    name: "The Cellar",
    type: "Wine Bar",
    icon: Wine,
    hours: "Open: 4pm – Midnight",
    desc: "Our 3,000-bottle collection features rare vintages from Bordeaux, Burgundy, Champagne, and Napa Valley's most exclusive estates.",
    dishes: ["Artisan Cheese Selection", "Charcuterie Board", "Foie Gras Torchon", "Sommelier's Tasting Flight"],
  },
  {
    name: "The Terrace",
    type: "Casual Dining",
    icon: Star,
    hours: "Lunch: 11am – 3pm",
    desc: "Al fresco dining overlooking the 18th green. Elevated club classics prepared with the same dedication to excellence.",
    dishes: ["Lobster Club Sandwich", "Grilled Caesar Salad", "The Emerald Burger", "Seasonal Soup du Jour"],
  },
];

const DiningPage = () => {
  const menusRef = useRef(null);
  const menusInView = useInView(menusRef, { once: true, margin: "-100px" });
  const cellarRef = useRef(null);
  const cellarInView = useInView(cellarRef, { once: true, margin: "-100px" });

  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={diningImg} alt="Fine dining with golf course views" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">Culinary Excellence</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground">Dining</h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">A Culinary Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Three Venues, <span className="italic">One Standard</span>
          </h2>
          <div className="divider-champagne mb-8" />
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            From intimate fine dining in The Oak Room to sunset cocktails on The Terrace,
            our culinary team delivers experiences that complement the prestige of our greens.
          </p>
        </div>
      </section>

      {/* Menus */}
      <section ref={menusRef} className="section-padding bg-card">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {menus.map((menu, i) => (
            <motion.div
              key={menu.name}
              initial={{ opacity: 0, y: 30 }}
              animate={menusInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="border border-border p-8 hover:border-champagne transition-colors duration-500"
            >
              <menu.icon size={24} className="text-masters mb-4" />
              <h3 className="font-display text-2xl text-foreground mb-1">{menu.name}</h3>
              <p className="font-body text-xs tracking-widest uppercase text-accent mb-2">{menu.type}</p>
              <div className="flex items-center gap-2 mb-6">
                <Clock size={12} className="text-muted-foreground" />
                <p className="font-body text-xs text-muted-foreground">{menu.hours}</p>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{menu.desc}</p>
              <div className="divider-champagne mb-6" />
              <p className="font-body text-xs tracking-widest uppercase text-accent mb-3">Signature Selections</p>
              <div className="space-y-2">
                {menu.dishes.map((dish) => (
                  <p key={dish} className="font-display text-sm italic text-foreground">{dish}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wine Cellar */}
      <section ref={cellarRef} className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={cellarInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img src={clubhouseImg} alt="Wine cellar and lounge" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 border border-champagne/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={cellarInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">The Wine Program</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              A Cellar of
              <br />
              <span className="italic">Rare Distinction</span>
            </h2>
            <div className="divider-champagne !mx-0 mb-8" />
            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
              Our Head Sommelier curates a collection spanning Old World and New World regions,
              with particular strength in aged Bordeaux and boutique California Cabernets.
              Private cellar allocations are available to Legacy members.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Bottles", value: "3,000+" },
                { label: "Regions", value: "28" },
                { label: "Vintages", value: "1952–2023" },
              ].map((s) => (
                <div key={s.label} className="text-center border border-border p-4">
                  <p className="font-display text-2xl text-masters mb-1">{s.value}</p>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiningPage;
