import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-semibold mb-4">
              <span className="text-gradient-gold">Emerald</span> Greens
            </h3>
            <p className="font-body text-sm leading-relaxed opacity-70 max-w-sm">
              Where tradition meets excellence. An exclusive sanctuary for those who appreciate
              the finer things in life, from championship golf to world-class dining.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4 text-champagne">Explore</h4>
            <div className="flex flex-col gap-3">
              <Link to="/course" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">The Course</Link>
              <Link to="/membership" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Membership</Link>
              <Link to="/dining" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Dining</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4 text-champagne">Contact</h4>
            <div className="flex flex-col gap-3 font-body text-sm opacity-70">
              <p>1 Augusta Lane, Prestige Valley</p>
              <p>+1 (555) MASTERS</p>
              <p>concierge@emeraldgreens.club</p>
            </div>
          </div>
        </div>
        <div className="divider-champagne-wide mb-8" />
        <p className="text-center font-body text-xs tracking-widest uppercase opacity-50">
          © 2026 Emerald Greens Golf & Country Club. All rights reserved. Members Only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
