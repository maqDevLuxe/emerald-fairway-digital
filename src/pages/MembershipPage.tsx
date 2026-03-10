import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import clubhouseImg from "@/assets/clubhouse.jpg";
import { Shield, Users, Award, Clock, Star, Wine } from "lucide-react";

const tiers = [
  {
    name: "Legacy",
    tagline: "The Ultimate Distinction",
    features: ["Full course & facilities access", "Priority tee times", "Reciprocal club privileges", "Exclusive events & tournaments", "Personal locker & caddie", "Wine cellar allocation"],
    note: "By nomination only",
  },
  {
    name: "Presidential",
    tagline: "For the Distinguished Few",
    features: ["Full course access", "Preferred tee times", "Dining privileges", "Pro shop discounts", "Guest passes (12/year)", "Fitness & spa access"],
    note: "Limited to 50 new members annually",
    featured: true,
  },
  {
    name: "Social",
    tagline: "The Clubhouse Experience",
    features: ["Clubhouse & dining access", "Social events & galas", "Limited golf (6 rounds/month)", "Pro shop access", "Fitness facilities", "Networking opportunities"],
    note: "Application required",
  },
];

const process = [
  { icon: Shield, step: "01", title: "Nomination", desc: "Two current members formally nominate your candidacy." },
  { icon: Users, step: "02", title: "Application", desc: "Complete a comprehensive membership application." },
  { icon: Award, step: "03", title: "Review", desc: "The Membership Committee reviews all candidates." },
  { icon: Clock, step: "04", title: "Welcome", desc: "Upon approval, join our distinguished community." },
];

const MembershipPage = () => {
  const heroRef = useRef(null);
  const tiersRef = useRef(null);
  const tiersInView = useInView(tiersRef, { once: true, margin: "-100px" });
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={clubhouseImg} alt="Clubhouse interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">By Invitation Only</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground">Membership</h1>
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section ref={tiersRef} className="section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={tiersInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Membership Tiers</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Choose Your <span className="italic">Legacy</span></h2>
          <div className="divider-champagne mt-6" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={tiersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className={`border p-8 text-center transition-all duration-500 ${
                tier.featured ? "border-masters bg-primary text-primary-foreground green-glow" : "border-border hover:border-champagne"
              }`}
            >
              <Star size={20} className={tier.featured ? "mx-auto mb-4 text-champagne" : "mx-auto mb-4 text-accent"} />
              <h3 className="font-display text-2xl mb-1">{tier.name}</h3>
              <p className={`font-body text-xs tracking-widest uppercase mb-6 ${tier.featured ? "text-champagne" : "text-muted-foreground"}`}>
                {tier.tagline}
              </p>
              <div className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 justify-center">
                    <div className={`w-1 h-1 rounded-full ${tier.featured ? "bg-champagne" : "bg-masters"}`} />
                    <span className={`font-body text-sm ${tier.featured ? "opacity-90" : "text-muted-foreground"}`}>{f}</span>
                  </div>
                ))}
              </div>
              <p className={`font-body text-xs italic ${tier.featured ? "text-champagne" : "text-muted-foreground"}`}>{tier.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="section-padding bg-card">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">The Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Path to <span className="italic">Membership</span></h2>
          <div className="divider-champagne mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <p className="font-display text-5xl text-champagne mb-4">{p.step}</p>
              <p.icon size={28} className="mx-auto mb-4 text-masters" />
              <h3 className="font-display text-lg text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">Begin Your Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Confidential <span className="italic">Inquiry</span>
          </h2>
          <div className="divider-champagne mb-12" />

          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-masters outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-masters outline-none transition-colors"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-masters outline-none transition-colors resize-none"
                placeholder="Tell us about yourself and your interest in membership"
              />
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="font-body text-xs tracking-widest uppercase px-12 py-4 bg-primary text-primary-foreground green-glow-hover transition-all duration-300"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MembershipPage;
