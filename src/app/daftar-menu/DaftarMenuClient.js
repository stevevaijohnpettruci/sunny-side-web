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
      : menuData.products.filter(
          (item) => item.category === activeCategory
        );

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
      <div className="relative z-10 max-w-7xl mx-auto px-16 py-20 flex flex-col gap-14">

        {/* TITLE */}
        <div>
          <h1 className="text-6xl -translate-x-8 translate-y-6 font-bold text-transparent stroke-text">
            OUR MENU
          </h1>
          <h2 className="text-[#3C57DB] font-bold text-4xl">OUR MENU</h2>
          <p className="mt-2 text-gray-600 max-w-lg">
            Nikmati menu Sunny Side dan rasakan sensasi nikmatnya
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex gap-16">

          {/* SIDEBAR */}
          <aside className="min-w-[220px]">
            <h4 className="font-semibold mb-5 text-[#3C57DB]">
              Kategori Menu
            </h4>

            <ul className="space-y-3 text-sm">
              <li
                onClick={() => handleCategoryClick("All")}
                className={`cursor-pointer transition ${
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
                  className={`cursor-pointer transition ${
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
          <section className="grid grid-cols-3 gap-x-12 gap-y-10">
            {filteredProducts.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                price={item.price}
              />
            ))}
          </section>

        </div>
      </div>
    </SeamlessBGSection>
  );
}
