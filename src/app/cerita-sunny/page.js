import { SeamlessBGSection } from "@/components/section/SeamlessBackgroundSection";
import { ChevronRight } from "lucide-react";

export default function CeritaSunny() {
  return (
    <SeamlessBGSection>
      <div className="relative z-10 max-w-7xl mx-auto px-16 py-28 flex flex-col  ">
        
        {/* SECTION TITLE — TIDAK DIUBAH */}
        <div>
          <h1 className="text-6xl -translate-x-8 font-bold text-transparent stroke-text">
            OUR STORY
          </h1>
          <h2 className="text-[#3C57DB] -translate-y-6 font-bold text-4xl">
            OUR STORY
          </h2>
        </div>

        {/* CONTENT */}
        <div className="flex items-start gap-16">
          
          {/* IMAGE / PLACEHOLDER */}
          <div className="w-[520px] h-[340px] rounded-2xl bg-gray-200 shrink-0" />

          {/* TEXT */}
          <div className="max-w-xl text-lg text-gray-600 leading-relaxed space-y-4">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

        </div>
      </div>
    </SeamlessBGSection>
  );
}
