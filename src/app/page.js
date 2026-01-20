import { HeroSection } from "@/components/section/HeroSection";
import { OurStory } from "@/components/section/OurStorySection";
import { OurMenuSection } from "@/components/section/OurMenuSection";
import { ReservationSection } from "@/components/section/ReservationSection";
import { DiscountBanner } from "@/components/section/DiscountBanner";
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className=" max-w-5xl bg-[#3B53CC] rounded-lg shadow-sm -translate-y-8 mx-auto p-4">
        <p className="text-center text-white font-bold text-4xl">
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
