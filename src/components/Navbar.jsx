"use client";

import { NavItem } from "./NavItem";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const menu = [
    { label: "MENU", href: "daftar-menu" },
    { label: "CERITA SUNNY", href: "cerita-sunny" },
    { label: "RESERVASI SEKARANG", href: "https://wa.me/6285861196708" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full py-4 z-50
          transition-all duration-300
          backdrop-blur-md
          ${scrolled ? "bg-white py-3 shadow-xs" : "bg-[#3C57DB]"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LEFT — LOGO */}
          <a href="/" className="flex items-center">
            <img src="/Logo (2).png" className="w-36" alt="logo" />
          </a>

          {/* RIGHT — BUTTON */}
          <div className="flex items-center gap-4">
            {/* CENTER — MENU */}
            <div
              className={`
                hidden text-sm font-light md:flex gap-10 mr-10
                ${scrolled ? "text-[#3C57DB]" : "text-white"}
              `}
            >
              {menu.map((item, i) => (
                <NavItem
                  key={i}
                  label={item.label}
                  href={item.href}
                  className={`tracking-wide ${
                    scrolled ? "text-[#3C57DB]" : "text-white"
                  }`}
                />
              ))}
            </div>

            {/* BUTTON */}
            <a href="https://www.google.com/maps/dir//M9Q4%2B2F9+Sunny+Side+Coffee,+samping+fakultas+ekonomi+universitas+galuh,+Jl.+Arya+Janggala,+Mekarjaya,+Kec.+Baregbeg,+Kabupaten+Ciamis,+Jawa+Barat+46274/@-7.1134905,107.3451959,9z/data=!4m12!1m2!2m1!1ssunnyside+coffee!4m8!1m0!1m5!1m1!1s0x2e6f5f8e1e8fb879:0xd082cf8702fe995c!2m2!1d108.3562216!2d-7.3124652!3e9?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D">
              <button
                className={`
                hidden md:inline-flex px-4 py-2 text-sm rounded-full border transition
                ${
                  scrolled
                    ? "border-[#3C57DB] text-[#3C57DB] hover:bg-[#3C57DB]/10"
                    : "border-white text-white hover:bg-white/10"
                }
              `}
              >
                Lihat Lokasi
              </button>
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className={`
                md:hidden p-1 rounded-lg transition
                ${scrolled ? "text-[#3C57DB]" : "text-white"}
              `}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 backdrop-blur-md
          transition-all duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="absolute top-19 left-1/2 -translate-x-1/2 w-[90%] bg-white text-black rounded-xl p-6 shadow-xl">
          <div className="flex flex-col text-sm gap-6">
            {menu.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b pb-2 text-[#3C57DB]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
