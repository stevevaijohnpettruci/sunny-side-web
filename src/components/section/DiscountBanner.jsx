import { ChevronRight } from "lucide-react";

export const DiscountBanner = () => {
  return (
    <section className="relative w-full h-50 md:h-50 lg:h-50 overflow-hidden">
      {/* Background Image */}
      <img
        src="/img/banner.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Discount Banner"
      />

      {/* Overlay untuk efek gelap agar teks terbaca */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
          Ikuti Sunny Side untuk mendapatkan diskon 50%
        </h1>

        <div className="mt-4">
          <button className="px-6 py-3 bg-[#324CCE] rounded-full flex items-center gap-2 font-medium hover:opacity-90 transition">
            Ikuti Sekarang
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
