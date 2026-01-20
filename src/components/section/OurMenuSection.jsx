"use client";

import { ChevronRight } from "lucide-react";
import { SeamlessBGSection } from "./SeamlessBackgroundSection";
import { useRouter } from "next/navigation";

export const OurMenuSection = () => {
  const router = useRouter();

  const seriesList = [
    { label: "Coffee Series", thumbnail: "/img/menu/coffee.png" },
    { label: "Non Coffee Series", thumbnail: "/img/menu/non-coffee.png" },
    { label: "Mocktail Series", thumbnail: "/img/menu/mocktail.png" },
    { label: "Dessert Series", thumbnail: "/img/menu/dessert.png" },
    { label: "Food Series", thumbnail: "/img/menu/food.png" },
  ];

  return (
    <SeamlessBGSection>
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6 md:px-20
          py-10 md:py-16
          flex flex-col
          gap-8 md:gap-10
        "
      >
        {/* SECTION TITLE — DESKTOP TETAP */}
        <div>
          <h1
            className="
              text-4xl md:text-6xl
              -translate-x-4 md:-translate-x-8
              translate-y-4 md:translate-y-6
              font-bold text-transparent stroke-text
            "
          >
            OUR MENU
          </h1>

          <h2 className="text-[#3C57DB] font-bold text-2xl md:text-4xl">
            OUR MENU
          </h2>

          <p className="text-gray-600 text-sm md:text-base">
            Nikmati menu Sunny Side dan rasakan sensasi nikmatnya
          </p>
        </div>

        {/* CONTENT GRID */}
        <div
          className="
            grid
            grid-cols-2 md:grid-cols-3
            gap-6 md:gap-12
          "
        >
          {seriesList.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              {/* CARD */}
              <div className="group bg-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition cursor-pointer">
                <div className="h-36 md:h-48 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
              </div>

              {/* LABEL */}
              <p className="text-center text-gray-500 font-medium text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/daftar-menu")}
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
    </SeamlessBGSection>
  );
};
