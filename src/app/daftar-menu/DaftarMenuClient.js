"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SeamlessBGSection } from "@/components/section/SeamlessBackgroundSection";
import MenuCard from "@/components/MenuCard";
import menuData from "@/data/data-produk.json";

export default function DaftarMenuClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") || "All";

  const filteredProducts =
    activeCategory === "All"
      ? menuData.products
      : menuData.products.filter((item) => item.category === activeCategory);

  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <SeamlessBGSection>
      <div
        className="
           relative z-10
          max-w-7xl mx-auto
          px-9 md:px-16
          py-24 md:py-28
          flex flex-col
          gap-10 md:gap-14
        "
      >
        {/* TITLE */}
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

          <p className="mt-2 text-gray-600 max-w-lg text-sm md:text-base">
            Nikmati menu Sunny Side dan rasakan sensasi nikmatnya
          </p>
        </div>

        {/* CONTENT */}
        <div
          className="
            flex flex-col md:flex-row
            gap-8 md:gap-16
          "
        >
          {/* SIDEBAR */}
          <aside
            className="
              md:min-w-[220px]
            "
          >
            <h4 className="font-semibold mb-4 md:mb-5 text-[#3C57DB]">
              Kategori Menu
            </h4>

            <ul
              className="
                flex md:block
                gap-4 md:gap-0
                md:space-y-3
                text-sm
                overflow-x-auto
                pb-2
              "
            >
              <li
                onClick={() => handleCategoryClick("All")}
                className={`cursor-pointer whitespace-nowrap transition ${
                  activeCategory === "All"
                    ? "font-semibold text-[#3C57DB]"
                    : "hover:text-[#3C57DB]"
                }`}
              >
                All Menu
              </li>

              {menuData.categories.map((cat, i) => (
                <li
                  key={i}
                  onClick={() => handleCategoryClick(cat)}
                  className={`cursor-pointer whitespace-nowrap transition ${
                    activeCategory === cat
                      ? "font-semibold text-[#3C57DB]"
                      : "hover:text-[#3C57DB]"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </aside>

          {/* GRID */}
          <section
            className="
              grid
              grid-cols-2 md:grid-cols-3
              gap-x-6 md:gap-x-12
              gap-y-8 md:gap-y-10
            "
          >
            {filteredProducts.map((item) => (
              <MenuCard key={item.id} name={item.name} price={item.price} />
            ))}
          </section>
        </div>
      </div>
    </SeamlessBGSection>
  );
}
