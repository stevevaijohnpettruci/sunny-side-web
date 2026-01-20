export const SeamlessBGSection = ({ children }) => {
  return (
    <section
      id="menu"
      className="
        relative 
        min-h-screen 
        bg-white 
        overflow-hidden
        bg-[url('/img/background-menu-seamless.png')]
        bg-repeat
        bg-[length:1000px_600px]
      "
    >
      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/25 to-white/90" />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};
