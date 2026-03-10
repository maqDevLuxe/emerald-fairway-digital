import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import courseImg from "@/assets/course-detail.jpg";
import heroImg from "@/assets/hero-golf.jpg";
import lushImg from "@/assets/lush-green.jpg";

const holes = [
  { hole: 1, name: "The Awakening", par: 4, yards: 425, desc: "A sweeping dogleg right that greets players with panoramic views of the estate." },
  { hole: 2, name: "Whispering Pines", par: 3, yards: 185, desc: "A deceptive par 3 guarded by ancient pines and a deep front bunker." },
  { hole: 3, name: "The Ridge", par: 4, yards: 410, desc: "An elevated tee shot to a fairway that tumbles down toward a hidden green." },
  { hole: 4, name: "Devil's Elbow", par: 5, yards: 565, desc: "Our signature hole—a serpentine par 5 that wraps around a spring-fed lake." },
  { hole: 5, name: "Magnolia Walk", par: 4, yards: 380, desc: "Framed by magnolia trees, precision off the tee is rewarded here." },
  { hole: 6, name: "The Quarry", par: 3, yards: 200, desc: "Carved from natural limestone, this par 3 demands a confident tee shot." },
  { hole: 7, name: "The Cathedral", par: 3, yards: 215, desc: "Towering oaks form a natural cathedral over this unforgettable short hole." },
  { hole: 8, name: "Rolling Thunder", par: 5, yards: 545, desc: "Undulating terrain and strategic bunkering make this a true risk-reward hole." },
  { hole: 9, name: "The Turn", par: 4, yards: 440, desc: "A demanding closer to the front nine with water running the entire left side." },
  { hole: 10, name: "The Crossing", par: 4, yards: 415, desc: "A bridge over the creek leads to the most challenging stretch of the course." },
  { hole: 11, name: "Golden Hour", par: 4, yards: 395, desc: "Named for the way afternoon light catches the amber bunker sand." },
  { hole: 12, name: "Amen Corner", par: 3, yards: 155, desc: "Our most famous hole—a short iron over Azalea Pond to a tiered green." },
  { hole: 13, name: "The Gauntlet", par: 5, yards: 520, desc: "Three carries over water make this the ultimate test of nerve." },
  { hole: 14, name: "Founder's Fairway", par: 4, yards: 430, desc: "Named after our founding members, a straight test of power and accuracy." },
  { hole: 15, name: "Eagle's Nest", par: 5, yards: 530, desc: "Reachable in two for the bold, but the green is well-defended." },
  { hole: 16, name: "The Narrows", par: 4, yards: 390, desc: "A tight driving hole with OB left and dense forest right." },
  { hole: 17, name: "Reflection", par: 3, yards: 175, desc: "A serene island green reflected in the surrounding stillwater." },
  { hole: 18, name: "The Gauntlet", par: 4, yards: 470, desc: "The ultimate finishing hole—uphill to the clubhouse with grandstand views." },
];

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">{subtitle}</p>
      <h2 className="font-display text-4xl md:text-5xl font-light text-foreground" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="divider-champagne mt-6" />
    </motion.div>
  );
};

const CoursePage = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={heroImg} alt="Championship course aerial view" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">Championship Course</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-primary-foreground">The Course</h1>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Par", value: "72" },
            { label: "Total Yards", value: "7,435" },
            { label: "Slope Rating", value: "155" },
            { label: "Course Rating", value: "76.8" },
          ].map((s) => (
            <div key={s.label} className="p-6 border border-border">
              <p className="font-display text-4xl text-masters mb-2">{s.value}</p>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full width image */}
      <section className="relative h-[40vh]">
        <img src={lushImg} alt="Course landscape" className="w-full h-full object-cover" />
      </section>

      {/* Hole by hole */}
      <section className="section-padding">
        <SectionHeader subtitle="Hole by Hole" title='The Complete <span class="italic">Journey</span>' />
        <div className="max-w-4xl mx-auto space-y-0">
          {holes.map((hole, i) => (
            <motion.div
              key={hole.hole}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-12 gap-4 items-center py-6 border-b border-border hover:bg-card/50 transition-colors px-4"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-display text-2xl text-masters">#{hole.hole}</span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-lg italic text-foreground">{hole.name}</h3>
              </div>
              <div className="col-span-4 md:col-span-1 text-center">
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Par {hole.par}</span>
              </div>
              <div className="col-span-4 md:col-span-2 text-center">
                <span className="font-body text-sm text-muted-foreground">{hole.yards} yds</span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <p className="font-body text-sm text-muted-foreground">{hole.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Course image */}
      <section className="relative h-[50vh]">
        <img src={courseImg} alt="Championship hole detail" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      <Footer />
    </div>
  );
};

export default CoursePage;
