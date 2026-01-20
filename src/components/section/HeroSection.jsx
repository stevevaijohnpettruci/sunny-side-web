import { ShoppingCart } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#3C57DB] max-h-screen overflow-hidden"
    >
      {/* PATTERN */}
      <img
        src="/Exclude.svg"
        alt="pattern"
        className="absolute top-0 right-0 w-600     pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 h-screen flex items-center relative z-10">
        {/* CONTENT */}
        <div className="text-white max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Pesan menu kesukaanmu di Sunny Side
          </h1>

          <p className="mt-4 text-white/80 text-lg">
            Tingkatkan fokusmu dengan secangkir kopi dari Sunny Side
          </p>

          <div className="mt-2 flex gap-4">
            <button className="px-6 py-3 bg-white text-[#324CCE] rounded-full flex items-center gap-2 font-medium hover:opacity-90 transition">
              Kunjungi Sekarang
              <ShoppingCart size={18} />
            </button>

            <button className="px-6 py-3 border border-white/40 rounded-full hover:bg-white/10 transition">
              Lihat Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
