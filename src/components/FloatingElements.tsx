const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Golf balls */}
      <div className="absolute top-[15%] left-[8%] w-4 h-4 rounded-full bg-champagne-light opacity-20 animate-float" />
      <div className="absolute top-[45%] right-[5%] w-3 h-3 rounded-full bg-champagne-light opacity-15 animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[70%] left-[15%] w-2 h-2 rounded-full bg-champagne-light opacity-10 animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute top-[30%] right-[20%] w-3 h-3 rounded-full bg-champagne-light opacity-15 animate-float-slow" style={{ animationDelay: "1s" }} />
      
      {/* Golf tees */}
      <div className="absolute top-[55%] left-[85%] w-1 h-6 bg-champagne opacity-10 rounded-full animate-float" style={{ animationDelay: "3s", transform: "rotate(15deg)" }} />
      <div className="absolute top-[25%] left-[45%] w-1 h-5 bg-champagne opacity-8 rounded-full animate-float-slow" style={{ animationDelay: "5s", transform: "rotate(-10deg)" }} />
    </div>
  );
};

export default FloatingElements;
