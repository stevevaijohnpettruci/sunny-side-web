import { HeroSection } from "@/components/section/HeroSection";
import { OurStory } from "@/components/section/OurStorySection";
import { OurMenuSection } from "@/components/section/OurMenuSection";
import { ReservationSection } from "@/components/section/ReservationSection";
import { DiscountBanner } from "@/components/section/DiscountBanner";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* BANNER QUOTE */}
      <div
        className="
          max-w-5xl mx-auto
          bg-[#3B53CC]
          rounded-lg shadow-sm
          -translate-y-6 md:-translate-y-8
          p-3 md:p-4
        "
      >
        <p
          className="
            text-center text-white font-bold
            text-lg sm:text-2xl md:text-4xl
            leading-snug
          "
        >
          “KITA MANUSIA BUKAN MESIN JADI PERLU NGOPI.”
        </p>
      </div>

      <OurStory />
      <OurMenuSection />
      <ReservationSection />
      <DiscountBanner />
    </div>
  );
}
