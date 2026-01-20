"use client";

import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const OurStory = () => {
  const router = useRouter();
  return (
    <section
      id="story"
      className="relative bg-white max-h-screen overflow-hidden"
    >
      <div
        className="
          flex flex-col
          px-6 md:px-20
          py-10 md:py-16
          gap-5
        "
      >
        {/* SECTION TITLE — DESKTOP TETAP */}
        <div>
          <h1
            className="
              text-4xl md:text-6xl
              -translate-x-4 md:-translate-x-8
              font-bold text-transparent stroke-text
            "
          >
            OUR STORY
          </h1>

          <h2
            className="
              text-[#3C57DB]
              -translate-y-4 md:-translate-y-6
              font-bold
              text-2xl md:text-4xl
            "
          >
            OUR STORY
          </h2>
        </div>

        {/* CONTENT */}
        <div
          className="
            flex flex-col md:flex-row
            gap-6 md:gap-12
          "
        >
          {/* IMAGE */}
          <div
            className="
              w-full md:w-150
              h-56 md:h-90
              rounded-xl bg-gray-200
              flex-shrink-0
            "
          />

          {/* TEXT */}
          <div
            className="
              max-w-2xl
              text-gray-500
              gap-3
              leading-relaxed
            "
          >
            <p className="text-base md:text-lg line-clamp-4 md:line-clamp-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <button
              onClick={() => router.push("cerita-sunny")}
              className="
                px-6 mt-3 py-3
                bg-[#324CCE] text-white
                rounded-full
                flex items-center gap-2
                font-medium
                hover:opacity-90 transition
                text-sm md:text-base
              "
            >
              Lihat Selengkapnya
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
